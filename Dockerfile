FROM node:16


COPY ./package.json .
COPY ./package-lock.json .

RUN npm i

COPY . .
EXPOSE 3000

RUN npm run build
CMD ["npm", "start"]