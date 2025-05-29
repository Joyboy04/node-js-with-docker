FROM node:22-alpine

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

CMD ["npm", "run", "start:dev"]