.PHONY: all bash build clean down logs restart start status stop tail

SERVER_SERVICE_NAME = server
APP_SERVICE_NAME = app

all: start

bash:
	@docker-compose run --rm $(SERVER_SERVICE_NAME) bash

bash_app:
	@docker-compose run --rm $(APP_SERVICE_NAME) bash

build:
	@docker-compose build

down:
	@docker-compose down

logs:
	@docker-compose logs -f

restart: stop start

reload:
	@docker-compose restart $(SERVER_SERVICE_NAME)

dev: build restart

start:
	@docker-compose up -d

up: start

status:
	@docker-compose ps

stop:
	@docker-compose stop

composer-migrate:
	@docker-compose run --rm $(SERVER_SERVICE_NAME) cd server && vendor/bin/phinx migrate -c docker/phinx.yml

composer-install:
	@docker-compose run --rm $(SERVER_SERVICE_NAME) cd server && composer install

npm-install:
	@docker-compose run --rm $(APP_SERVICE_NAME) npm install

npm-build:
	@docker-compose run --rm $(APP_SERVICE_NAME) npm run-script build

npm-watch:
	@docker-compose run --rm $(APP_SERVICE_NAME) npm run-script watch
