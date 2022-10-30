include .env
export

CODE_VERSION=$(shell git rev-parse --short HEAD)

upload:
	curl https://api.rollbar.com/api/1/sourcemap \
	-F access_token=${ROLLBAR_ACCESS_TOKEN} \
	-F version=$(CODE_VERSION) \
	-F minified_url={minified_url} \
	-F source_map=@{source_map}

run:
	npm run build && node --enable-source-maps dist/main.js

