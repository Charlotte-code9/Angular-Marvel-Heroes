FROM node:latest AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT} 49153

CMD ["npm", "start"]