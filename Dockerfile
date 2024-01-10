FROM debian:12
LABEL name polo-test-server

WORKDIR /app
COPY . .

RUN apt update
RUN apt install -y curl
RUN apt install -y python3

RUN npm install && \
    npm run build:client

CMD node server/index.js