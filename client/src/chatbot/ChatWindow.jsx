import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { receiveMessage, sendMessage, deleteMessage } from '../store/chatSlice';
import './ChatWindow.scss';
import chatBotIcon from '../images/значок-чат-бота.png';
import { SiMoscowmetro } from "react-icons/si";
import { RxQuestionMarkCircled } from "react-icons/rx";
import arrow from '../images/arrow.png';
import chat_image from '.././images/chat.png';
import user_image from '.././images/user.png';
import chatwindowicon from '.././images/icon-chatwindow.png';
import { setCity, setMetro, setNumberOfRooms, setMinValueAns,  setMaxValueAns } from '../store/userAnswersSlice';
import ApartmentCard from './ApartmentCard ';
import axios from 'axios';
import ApartmentSlider from './ApartmentSlider';


const ChatWindow = () => {
  const dispatch = useDispatch();
  const [userMessage, setUserMessage] = useState('');
  const messages = useSelector((state) => state.chat.messages);
  const isFirstMessage = messages.length === 0;  
  const city = useSelector((state) => state.userAnswer.city);
  const metro = useSelector((state) => state.userAnswer.metroStation);
  const numberOfRooms = useSelector((state) => state.userAnswer.numberOfRooms);
  const priceMin = useSelector((state) => state.userAnswer.minValueAns);
  const priceMax = useSelector((state) => state.userAnswer.maxValueAns);
  const [isHovered, setIsHovered] = useState(false);

    /* ПОД ВОПРОСОМ */
    useEffect(() => {
      scrollToMiddle();
    }, []);
  
    const scrollToMiddle = () => {
      const chatHeight = messagesEndRef.current?.offsetTop || 0;
      const middleHeight = chatHeight / 3.2;
      window.scrollTo({ 
        top: middleHeight,
         behavior: 'smooth' 
        }
      );
    };
    /* --------------- */
 

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [apartments, setApartments] = useState([]);

  /* МОКОВЫЕ ДАННЫЕ И ЗАПРОМ
  
  console.log(apartments)
  useEffect(() => {
    if (city && metro && numberOfRooms && priceMin && priceMax) {
    // Фиктивные данные квартир
    const mockApartments = {
      card_1: {
        ad_url: 'https://realty.ya.ru/offer/2493133028252946689',
        img_url1: '//avatars.mds.yandex.net/get-realty-offers/12849436/add.7891bb6b4a6dc02a92fd64f2eec65713.realty-api-vos/large',
        img_url2: '//avatars.mds.yandex.net/get-realty-offers/10504775/add.9412100f68a50abd9332f012f2a09f68.realty-api-vos/large',
        img_url3: '//avatars.mds.yandex.net/get-realty-offers/11909678/add.0a979e1c7cdec5361acc1da3c3f3e5d7.realty-api-vos/large',
        img_url4: '//avatars.mds.yandex.net/get-realty-offers/11488677/add.e7a3d577c6171277410d840a489a54d2.realty-api-vos/large',
        metro: 'Юго-Западная',
        price_per_month: 100000,
        area_value: 85,
        address: 'Россия, Москва, Ленинский проспект, 45с4',
        "description": " Если видите объявление  предложение АКТУАЛЬНО, фотографии настоящие   Не откладывайте Ваш звонок и просмотр   хорошие квартиры СДАЮТСЯ ОЧЕНЬ БЫСТРО  Звучит банально, мы знаем, но это правда, поверьте!  Есть вопросы? Позвоните и назовите адрес"
      },
      card_2: {
        ad_url: 'https://realty.ya.ru/offer/1380158835194182401',
        img_url1: '//avatars.mds.yandex.net/get-realty-offers/10501146/add.35da009474e213a70198f0dab2208786.realty-api-vos/large',
        img_url2: '//avatars.mds.yandex.net/get-realty-offers/10504775/add.85e014862e5f55d38c48b32a2322e651.realty-api-vos/large',
        img_url3: '//avatars.mds.yandex.net/get-realty-offers/11491758/add.2fc23a5d144e38777f46a3feb500a085.realty-api-vos/large',
        img_url4: '//avatars.mds.yandex.net/get-realty-offers/10504775/add.a67bd822d0719e41a2dc7edc57899fac.realty-api-vos/large',
        metro: 'Профсоюзная',
        price_per_month: 90000,
        area_value: 85,
        address: 'Россия, Москва, Нахимовский проспект, 50с2'
      },
      card_3: {
        ad_url: 'https://realty.ya.ru/offer/1380158835194182401',
        img_url1: '//avatars.mds.yandex.net/get-realty-offers/10501146/add.35da009474e213a70198f0dab2208786.realty-api-vos/large',
        img_url2: '//avatars.mds.yandex.net/get-realty-offers/10504775/add.85e014862e5f55d38c48b32a2322e651.realty-api-vos/large',
        img_url3: '//avatars.mds.yandex.net/get-realty-offers/11491758/add.2fc23a5d144e38777f46a3feb500a085.realty-api-vos/large',
        img_url4: '//avatars.mds.yandex.net/get-realty-offers/10504775/add.a67bd822d0719e41a2dc7edc57899fac.realty-api-vos/large',
        metro: 'Киевская',
        price_per_month: 90000,
        area_value: 85,
        address: 'Россия, Москва, Нахимовский проспект, 50с2'
      }
    };

    setApartments(Object.values(mockApartments));
    }
  }, [city, metro, numberOfRooms, priceMin, priceMax, dispatch]);

  
  useEffect(() => {
    if (apartments.length > 0) {
      dispatch(receiveMessage(<ApartmentSlider apartments={apartments} />));
    } 
    
  }, [apartments, dispatch]);
   */

  useEffect(() => {
    const fetchDataFromBackend = async () => {
      try {
        if (city && metro && numberOfRooms && priceMin && priceMax) {
          const userData = {
            num_rooms: numberOfRooms,  // количество комнат
            metro: metro, // станция метро
            priceMin: priceMin,  // минимальная цена
            priceMax: priceMax  // максимальная цена
          };
          console.log(userData)
          const response = await axios.post('http://localhost:8000/process_data', userData);
          const apartments = response.data;
          console.log(apartments);
          apartments.forEach((apartment, index) => {
            dispatch(receiveMessage(<ApartmentSlider key={index} apartments={apartments} />));
          });
           
        }
      } catch (error) {
        console.error('Ошибка при получении данных с бэкенда:', error);
      }
    };

    fetchDataFromBackend();

  }, [city, metro, numberOfRooms, priceMin, priceMax, dispatch]); 
  

  const handleSaveMetroStation = () => {
    const selectElement = document.querySelector('.metro-stations');
    const selectedStation = selectElement.value;
    if (selectedStation) {
      var resetBtn = document.getElementsByClassName("metro-OK");
      resetBtn.disabled = true;
      dispatch(sendMessage(selectedStation));
    
      dispatch(setMetro(selectedStation.toString()));
    };
  };

  const handleSavePrice = () => {
    const minValueInput = document.querySelector('.startk input');
    const maxValueInput = document.querySelector('.input_block input');
    const minValue = minValueInput.value;
    const maxValue = maxValueInput.value;
    if (minValue && maxValue && minValue < maxValue) {
      dispatch(setMinValueAns(minValue));
      dispatch(setMaxValueAns(maxValue));
      console.log('dff')
      console.log(priceMin, priceMax, "dsdds");
      dispatch(sendMessage(minValue + ' - ' + maxValue))
    } else {
      // Обработка ошибки, если значения не введены
      console.error('Please enter both minimum and maximum values.');
    }
  };
  

  const errorMessage = (
    <div className='error-message'>
       <p>Sorry! I don't understand what you wrote...</p>
    </div>
  );


  const welcomeMessage =  (
    <div className='welcomeMessage'>
      <p>Hello! I’m Chat Assistant. I’ll help you to make a choice.</p>
      <p>Choose your city from the list below:</p>
      <div className='message-buttons'>
        <button onClick={() => handlerCity('Moscow')}><span></span>Moscow</button>
        <button><span></span>St. Petersburg</button>
        <button><span></span>Ekaterinburg</button>
        <button><span></span>Nizniy Novgorod</button>
      </div>
    </div>
  );

  const metroMessage =  (
    <div className='metro__message'>
        <p>Please, select the metro station in which 
        you would like to rent an apartment</p>
        <select defaultValue="Choose the station" className='metro-stations'>
            {/* Синяя ветка */}
            <option value="Митино">Митино</option>
            <option value="Пятницкое шоссе">Пятницкое шоссе</option>
            <option value="Мякинино">Мякинино</option>
            <option value="Строгино">Строгино</option>
            <option value="Крылатское">Крылатское</option>
            <option value="Молодежная">Молодежная</option>
            <option value="Кунцевская">Кунцевская</option>
            <option value="Славянский Бульвар">Славянский бульвар</option>
            <option value="Парк Победы">Парк Победы</option>
            <option value="Киевская">Киевская</option>
            <option value="Смоленская">Смоленская</option>
            <option value="Арбатская">Арбатская</option>
            <option value="Площадь Революции">Площадь Революции</option>
            <option value="Курская">Курская</option>
            <option value="Бауманская">Бауманская</option>
            <option value="Электрозаводская">Электрозаводская</option>
            <option value="Семеновская">Семеновская</option>
            <option value="Партизанская">Партизанская</option>
            <option value="Измайловская">Измайловская</option>
            <option value="Первомайская">Первомайская</option>
            <option value="Щелковская" className='blue__option'>Щелковская</option>
             {/* Красная ветка */}
            <option value="Бульвар Рокоссовского" className='red__option'>Бульвар Рокоссовского</option>
            <option value="Черкизовская"  className='orange__option'>Черкизовская</option>
            <option value="Преображенская площадь">Преображенская площадь</option>
            <option value="Сокольники">Сокольники</option>
            <option value="Красносельская">Красносельская</option>
            <option value="Комсомольская">Комсомольская</option>
            <option value="Красные ворота">Красные ворота</option>
            <option value="Чистые пруды">Чистые пруды</option>
            <option value="Лубянка">Лубянка</option>
            <option value="Охотный ряд">Охотный ряд</option>
            <option value="Библиотека имени Ленина">Библиотека имени Ленина</option>
            <option value="Кропоткинская">Кропоткинская</option>
            <option value="Парк культуры">Парк культуры</option>
            <option value="Фрунзенская">Фрунзенская</option>
            <option value="Спортивная">Спортивная</option>
            <option value="Воробьевы горы">Воробьевы горы</option> 
            <option value="Университет">Университет</option>
            <option value="Проспект Вернадского">Проспект Вернадского</option>
            <option value="Юго-Западаная">Юго-Западная</option>
            <option value="Тропарево">Тропарево</option>
            <option value="Румянцево">Румянцево</option>
            <option value="Саларьево">Саларьево</option>
            <option value="Филатов луг">Филатов луг</option>
            <option value="Прокшино">Прокшино</option>
            <option value="Ольховая">Ольховая</option>
            <option value="Коммунарка">Коммунарка</option>
            <option value="Потапово">Потапово</option>
            {/* Оранжевая ветка */}
            <option value="Новоясеневская">Новоясеневская</option>
            <option value="Ясенево">Ясенево</option>
            <option value="Теплый стан">Теплый стан</option>
            <option value="Коньково">Коньково</option>
            <option value="Беляево">Беляево</option>
            <option value="Калужская">Калужская</option>
            <option value="Новые Черёмушки">Новые Черёмушки</option>
            <option value="Профсоюзная">Профсоюзная</option>
            <option value="Академическая">Академическая</option>
            <option value="Ленинский проспект">Ленинский проспект</option>
            <option value="Шаболовская">Шаболовская</option>
            <option value="Октябрьская">Октябрьская</option>
            <option value="Третьяковская">Третьяковская</option>
            <option value="Китай-город">Китай-город</option>
            <option value="Тургеневская">Тургеневская</option>
            <option value="Сухаревская">Сухаревская</option>
            <option value="Проспект мира">Проспект мира</option>
            <option value="Рижская">Рижская</option>
            <option value="Алексеевская">Алексеевская</option>
            <option value="ВДНХ">ВДНХ</option>
            <option value="Ботанический сад">Ботанический сад</option>
            <option value="Свиблово">Свиблово</option>
            <option value="Бабушкинская">Бабушкинская</option>
            <option value="Медведково">Медведково</option>
        </select>
        <button 
            className='metro-OK' 
            onClick={handleSaveMetroStation}
        >
              OK
        </button>
    </div>
  );

  const roomsMessage = (
    <div className='roomsMessage'>
      <p className='text-rooms'>
      Write the <strong>number of rooms</strong> you want in the apartment. Please, write down only one number. Or if you are looking for a studio, write <strong>studio</strong>
      </p>
      <p>Example: 2</p>
      <p>Example: studio</p>
    </div>
  );

  const choosePriceMessage = (
    <div className='price-message' >
      <p>Select price range per month. Enter the minimum price in the first input, and the maximum in the second input </p>
      <div className='price-ranges-cont'>
        <div className='input_bloc startk'>
          <span className='price-sp'>Starts with</span>
          <input 
              type='number' 
              placeholder='Start...'
          
          />
        </div>
        <img src={arrow} alt='arrow' className='arrow-image'/>
        <div className='input_block'>
          <span className='price-sp'>Ends with</span>
          <input 
              type='number' 
              placeholder='End...'
          />
        </div>
      </div >
      <button className='ok-price-button' onClick={handleSavePrice}>OK</button>
    </div>
  )


  useEffect(()=> {
    if (city !== null) {
        setTimeout(() => {
          dispatch(receiveMessage(metroMessage));
        }, 1000);
    }
  }, [city, dispatch]);

  useEffect(() => {
    if (metro !== null) {
      setTimeout(() => {
        dispatch(receiveMessage(roomsMessage));
      }, 1000);
    }
  }, [metro, dispatch]);

  useEffect(() => {
    if (numberOfRooms !== null) {
      setTimeout(() => {
        dispatch(receiveMessage(choosePriceMessage))
      }, 1000);
    }
  }, [numberOfRooms, dispatch ])

  const handlerCity = (city) => {
    dispatch(sendMessage(city))
    dispatch(setCity(city));
  };

  const handleInputChange = (e) => {
     setUserMessage(e.target.value);
  };

  const handleDeleteLastMessage = () => {
    if (messages.length > 0) {
      const lastMessageIndex = messages.length - 1;
      if (messages[lastMessageIndex].from === 'user') { 
        dispatch(deleteMessage(lastMessageIndex));
      }
    }
  };
  const handleSendMessage = () => {
    if (userMessage.length !== 0) {
      const validValues = ["1", "2", "3", "studio", "STUDIO"];
      if (validValues.includes(userMessage.toLowerCase())) {
        dispatch(setNumberOfRooms(userMessage));
        dispatch(sendMessage(userMessage));
        setUserMessage("");
      }
      // Если это первое сообщение от пользователя и сообщения не было,
      // отправляем приветственное сообщение
      else if (isFirstMessage && userMessage.trim() !== "") {
        dispatch(sendMessage(userMessage));
        setUserMessage("");
        setTimeout(() => {
          dispatch(receiveMessage(welcomeMessage));
        }, 1000);
      } else {
        dispatch(sendMessage(userMessage));
        setUserMessage("");
        dispatch(receiveMessage(errorMessage));
      }
    }
  };
  const messagesEndRef = useRef(null);

  // Функция для прокрутки вниз окна чата
  const scrollToBottom = () => {
    const messagesContainer = document.querySelector('.messages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chat-window">
      <div className="header-chat">
        <div className="header-title">
          <img src={chatwindowicon} className='chat-icon' color='white'/>
          <span>Chat Assistant</span>
        </div>
        <div className="status-icons">
          <div className="status-icon green"></div>
          <div className="status-icon yellow"></div>
          <div className="status-icon red" onClick={handleDeleteLastMessage}></div>
        </div>
      </div>
      <div className="chat-container"   >
        <div className="messages"  >
        {messages.length === 0 ? (
          <div className="no-messages">
            <img src={chatBotIcon} alt="icon of chat-bot" />
            <div className='no-mes-span'>
              <span style={{ fontSize: "20px" }}>No recent messages...</span>
              <span style={{ fontSize: "14px" }}>
                To activate it, send your first message
              </span>
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <>
              <div key={index} className={`message ${message.from === "user" ? "user" : "bot"}`} >
              {message.from === "user" && <img src={user_image} alt="user" className="avatar"  />}
              {message.from === "bot" && <img src={chat_image} alt="chat bot" className="avatar" />}
              <div className="message-content" >{message.content}</div>
            </div>
            <div ref={messagesEndRef} />
            </>
          ))
        )}
       <div ref={messagesEndRef} />
      </div>
      </div>
      <div className="input-container">
        <div className='input-right'>
          <input
            type="text"
            value={userMessage}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
            placeholder="Start typing..."
          />
          <button onClick={handleSendMessage}>Send</button>

        </div>
        <div className='input-left' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='how-to'>
            <RxQuestionMarkCircled size={30}/>
            <span>How To</span>
          </div>
          {isHovered && (
          <div className="tooltip">
            <span><strong>Tips</strong></span>
            <span> - to activate the bot write any message</span>
            <span> - to delete the last message you wrote, click on the red circle in the upper corner of the window</span>
            <span> - in messages from the bot, where you see buttons - you just need to click on the option you need</span>
            <span> - do not forget to click on the "ok" buttons to confirm your answer</span>
          </div>
        )}
      </div>       
      </div>
    </div>
  );
};

export default ChatWindow;
