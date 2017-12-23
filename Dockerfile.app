FROM httpd:2.4

ENV APP_DIR=/usr/local/apache2/htdocs

COPY ./docker/config/app/app.conf /usr/local/apache2/conf/app.conf

RUN apt-get update && \
    apt-get install -y curl  && \
    curl -sL https://deb.nodesource.com/setup_9.x | bash -  && \
    apt-get install -y nodejs

RUN echo 'Include conf/app.conf' >> /usr/local/apache2/conf/httpd.conf

WORKDIR $APP_DIR
