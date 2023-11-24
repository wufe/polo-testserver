FROM debian:12
LABEL name polo-test-server

WORKDIR /app
COPY . .

RUN apt update
RUN apt install -y curl
RUN apt install -y python3

CMD python3 -m http.server 3000