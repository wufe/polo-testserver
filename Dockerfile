FROM debian:12
LABEL name polo-test-server

WORKDIR /app
COPY . .

RUN apt install curl
RUN curl http://metaphorpsum.com/paragraphs/444

CMD tail -f /dev/null