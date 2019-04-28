build-image:
	docker build -t react-google-maps .

run:
	docker run --rm -p 3000:3000 -e REACT_APP_API_KEY=API_KEY react-google-maps

run-interactive:
	docker run --rm -it -e REACT_APP_API_KEY=API_KEY react-google-maps sh

# Dev

build-dev:
	docker build -f Dockerfile.dev -t react-google-maps-dev .

run-dev:
	docker run --rm -p 3000:3000 -v `pwd`/public:/home/public -v `pwd`/src:/home/src -v `pwd`/node_modules:/home/node_modules --name react-dev-container -e REACT_APP_API_KEY=API_KEY react-google-maps-dev

run-interactive-dev:
	docker run --rm -it -p 3000:3000 -v `pwd`/public:/home/public -v `pwd`/src:/home/src -v `pwd`/node_modules:/home/node_modules --name react-dev-container -e REACT_APP_API_KEY=API_KEY react-google-maps-dev sh
