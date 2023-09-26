FROM node:18

WORKDIR /usr/src/app/server

COPY ./package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "prod:start"]