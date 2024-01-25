FROM node:16.20.2

WORKDIR /app

COPY package.json ./

RUN yarn
RUN yarn command-nest movies:import

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
