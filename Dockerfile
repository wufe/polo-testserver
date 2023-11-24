FROM node:21
LABEL name polo-test-server

WORKDIR /app
COPY . .

RUN curl http://metaphorpsum.com/paragraphs/444

RUN npm install --omit=dev

CMD node server/index.js