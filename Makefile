.PHONY: all bash build clean down logs restart start status stop tail

SERVER_SERVICE_NAME = server
APP_SERVICE_NAME = app

all: start

prod:
	@docker-compose -f docker-compose-prod.yml stop
	@docker-compose -f docker-compose-prod.yml build
	@docker-compose -f docker-compose-prod.yml up -d

bash:
	@docker-compose run --rm $(SERVER_SERVICE_NAME) bash

bash-app:
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
	@docker-compose run --rm $(SERVER_SERVICE_NAME) vendor/bin/phinx migrate -c config/phinx.php

composer-install:
	@docker-compose run --rm $(SERVER_SERVICE_NAME) composer install

npm-install:
	@docker-compose run --rm $(APP_SERVICE_NAME) npm install

npm-install-win:
	@docker-compose run --rm $(APP_SERVICE_NAME) npm install --no-bin-links

npm-build:
	@docker-compose run --rm $(APP_SERVICE_NAME) npm run-script build

npm-build-prod:
	@docker-compose run --rm $(APP_SERVICE_NAME) npm run-script build:prod

npm-watch:
	@docker-compose run --rm $(APP_SERVICE_NAME) npm run-script watch
