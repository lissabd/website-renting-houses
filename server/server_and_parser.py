import json
import os

import mysql.connector
import requests
from flask import Flask, request, send_file, jsonify
from selectolax.parser import HTMLParser
from flask_cors import CORS


def get_url_from_sql(metro_station, num_of_rooms):
    # Параметры подключения к базе данных
    db_config = {
        'user': 'user',  # Имя пользователя
        'password': 'userpassword',  # Пароль пользователя
        'host': 'mysql_db',  # Хост (docker на localhost с проброшенным портом 3304)
        'port': 3306,  # Порт, на который проброшен MySQL в Docker
        'database': 'my_db',  # Имя базы данных
    }

    # Создаем подключение к базе данных
    conn = mysql.connector.connect(**db_config)

    # Создаем курсор для выполнения запросов
    cursor = conn.cursor()

    # SQL запрос
    query = """
    SELECT request_url
    FROM requests_table
    WHERE metro = %s AND num_rooms = %s;
    """

    params = (metro_station, num_of_rooms)

    try:
        # Выполнение запроса
        cursor.execute(query, params)

        # Получение результатов
        result = cursor.fetchone()
        if result:
            print("Запрошенный URL:", result[0])
            return result[0]
        else:
            print("Данные не найдены.")

    finally:
        # Закрываем курсор и подключение к базе данных
        cursor.close()
        conn.close()


def parse_page(request_url, price_per_month_begin, price_per_month_end):
    params = {
        'priceMin': price_per_month_begin,
        'priceMax': price_per_month_end
    }

    response = requests.get(request_url, params=params, headers={
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Safari/605.1.15'
    })
    response.encoding = 'utf-8'
    html = response.text

    tree = HTMLParser(html)
    script = tree.css_first('script[id="initial_state_script"]').text()
    script = script[23:-1]

    data = json.loads(script)
    filename = os.path.join('script', 'script.json')

    with open(filename, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False)

    return filename


def write_in_json(data_offer):
    filename = 'data_offer.json'
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as file:
            data = json.load(file)
    else:
        data = {}

    data.update(data_offer)

    with open(filename, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=False)


def get_json_from_page(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        data = json.load(file)

    offers = data['map']['offers']['points']
    i = 1  # Начинаем счетчик карточек с последнего числа в текущем файле

    for offer in offers:
        ad_url = offer['shareUrl']
        img_urls = offer.get('fullImages', [])
        if len(img_urls) == 0:
            continue
        metro = offer.get('location', {}).get('metroList', [{}])[0].get('name', None)
        price_per_month = offer['price']['value']
        area_value = offer['area']['value']
        address = offer['location']['geocoderAddress']
        description = offer.get('description', None)

        data_offer = {
            f'card_{i}': {
                'ad_url': ad_url,
                'img_url1': img_urls[0] if len(img_urls) > 0 else None,
                'img_url2': img_urls[1] if len(img_urls) > 1 else None,
                'img_url3': img_urls[2] if len(img_urls) > 2 else None,
                'img_url4': img_urls[3] if len(img_urls) > 3 else None,
                'metro': metro,
                'price_per_month': price_per_month,
                'area_value': area_value,
                'address': address,
                'description': description
            }
        }
        i += 1
        write_in_json(data_offer)


app = Flask(__name__)
CORS(app)


@app.route('/process_data', methods=['POST'])
def process_data():
    print("Trying to solve post-request")
    data = request.get_json()  # Получаем данные из POST-запроса

    metro_station = data.get('metro')
    num_of_rooms = data.get('num_rooms')
    price_per_month_begin = data.get('priceMin')
    price_per_month_end = data.get('priceMax')

    request_url = get_url_from_sql(metro_station, num_of_rooms)  # получаю url из базы данных
    print("Got URL - " + request_url)
    filename = parse_page(request_url, price_per_month_begin, price_per_month_end)
    get_json_from_page(filename)

    return send_file('data_offer.json', as_attachment=True)


@app.route('/')
def get_data():
    print('Обработочка get_data GET запроса')
    data = {
        'num_rooms': '2',
        'metro': 'Мякинино',
        'priceMin': 50000,
        'priceMax': 70000
    }
    request_url = get_url_from_sql(data.get('metro'), data.get('num_rooms'))
    return jsonify(request_url)


if __name__ == '__main__':
    print("Сервер запущен site_rent_houses")
    app.run(host='0.0.0.0', port=8000)
