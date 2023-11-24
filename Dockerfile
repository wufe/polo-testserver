FROM node:14.15.4
LABEL name polo-test-server

WORKDIR /app
COPY . .

RUN curl http://metaphorpsum.com/paragraphs/444

RUN npm install && \
    npm run build:client

CMD node server/index.js