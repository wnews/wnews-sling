SHELL:=/bin/bash
REGISTRY?=whistlepost
IMAGE_NAME=wnews-sling
TAGS?=latest
BUILD_ARGS?=

.PHONY: all clean build tag push run

all: build

clean:
	./gradlew clean && docker rmi $(REGISTRY)/$(IMAGE_NAME)

build:
	./gradlew build

tag:
	echo $(TAGS) | tr "/," "-\n" | xargs -n1 -I % docker tag $(REGISTRY)/$(IMAGE_NAME) $(REGISTRY)/$(IMAGE_NAME):%

push:
	echo $(TAGS) | tr "/," "-\n" | xargs -n1 -I % docker push $(REGISTRY)/$(IMAGE_NAME):%

run:
	docker-compose up
