FROM node:12.16.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
RUN npm run build

WORKDIR ./server
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
