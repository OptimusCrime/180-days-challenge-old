FROM httpd:2.4

ENV APP_DIR=/usr/local/apache2/htdocs

COPY ./docker/config/app/app.conf /usr/local/apache2/conf/app.conf

RUN apt-get update && \
    apt-get install -y curl  && \
    curl -sL https://deb.nodesource.com/setup_9.x | bash -  && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y nodejs

# Windows is a stupid platform
RUN npm install -g webpack@^4.15.0 && npm install -g webpack-cli@^3.0.8

RUN echo 'Include conf/app.conf' >> /usr/local/apache2/conf/httpd.conf

WORKDIR $APP_DIR
