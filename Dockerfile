FROM debian:12
LABEL name polo-test-server

WORKDIR /app
COPY . .

RUN apt update
RUN apt install -y curl
RUN apt install -y python3

CMD tail -f /dev/null