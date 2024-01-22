FROM node:18.13.0

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 5000

CMD [ "yarn", "start:dev" ]
