FROM node:10.16.2-slim

EXPOSE 3000

WORKDIR /project

COPY . .

RUN npm install -g yarn
RUN yarn install

CMD ["yarn", "dev"]
