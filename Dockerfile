FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN rm -f src/repository/ProdutoRepository.ts

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
