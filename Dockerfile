FROM node:12
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g json-server

COPY . .
EXPOSE  3000
CMD [ "npm", "start" ]
