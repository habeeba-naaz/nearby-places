build-image:
	docker build -t react-google-maps .

run:
	docker run --rm -p 3000:3000 -p 443:443 react-google-maps

run-interactive:
	docker run --rm -it react-google-maps bash