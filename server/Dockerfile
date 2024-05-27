# FROM python:3.12-slim

#RUN apt-get update && apt-get install -y

#WORKDIR /app

#COPY ./website_rent_flats-1.0.tar.gz /app

#RUN tar -xzf website_rent_flats-1.0.tar.gz && \
#    mkdir script && rm website_rent_flats-1.0.tar.gz

#WORKDIR /app/website_rent_flats-1.0

#RUN pip install .

#EXPOSE 8000

#CMD ["python", "src/server_and_parser.py"]

FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt && \
    mkdir script
COPY server_and_parser.py .
EXPOSE 8000
CMD ["python", "server_and_parser.py"]