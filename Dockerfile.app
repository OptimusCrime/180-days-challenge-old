FROM httpd:2.4

COPY ./docker/config/app/app.conf /usr/local/apache2/conf/app.conf

RUN echo 'Include conf/app.conf' >> /usr/local/apache2/conf/httpd.conf