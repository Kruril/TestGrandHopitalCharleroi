FROM node:16.10-alpine

WORKDIR /web

COPY . /web/

RUN npm install -g npm
RUN npm cache verify
RUN npm cache clear -- force

RUN npm install react-scripts@3.4.1 -g --silent

RUN npm install --silent

CMD npm start
