FROM node:18.13.0

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
