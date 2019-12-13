FROM node:latest

ADD . /app
WORKDIR /app

RUN yarn install

RUN yarn start

EXPOSE 3000