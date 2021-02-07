FROM node:14.15.4

WORKDIR /app
COPY . .

RUN npm install && \
    npm run build:client

CMD node server/index.js