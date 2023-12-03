# Docker Commands Noted During Coursework for Reference
```sh
# Dockerfile - created
docker build -t image-name .

docker image ls

docker image rm ID

docker run --name container-name image-name

docker run -d --name container-name image-name	# detached (terminal is not occupied)

docker ps	# list out the currently active docker containers

docker rm container-name -f	# remove the active container

docker run -p 5000:5000 --name container-name image-name	# exposing port 5000

# lhs is for outside world traffic and rhs is for the port that we want to send the traffic to in our docker container
docker exec -it container-name bash

# .dockerignore - file created
docker run -v pathtofolderonlocalmachine:pathtofolderoncontainer -p 5000:5000 --name container-name image-name		# bind mount volume to sync code from local machine folder to docker folder

docker run -v $(pwd):/app -p 5000:5000 -d --name container-name image-name	# shorthand

npm install nodemon --save-dev

# Ctrl + \	# VSCode shortcut to open same file to the side

# Bind mount overrides the directories in our container as it syncs it with our working directory.

docker run -v $(pwd):/app -v /app/node_modules -p 5000:5000 -d --name container-name image-name	# extra volume created prevents the node_modules folder from getting deleted in the container

docker run -v $(pwd):/app:ro -v /app/node_modules -p 5000:5000 -d --name container-name image-name	# make bind-mount read only - container can read files from local directory but cannot write to it (:ro)

docker run -v $(pwd):/app:ro -v /app/node_modules --env PORT=3000 -p 5000:3000 -d --name container-name image-name	# setting environment variables

# .env - file created # add all your environment variables as key=value pairs
docker run -v $(pwd):/app:ro -v /app/node_modules --env-file ./.env -p 5000:3000 -d --name container-name image-name	# takes env vars from file

printenv # prints environment variables in linux

docker volume ls

docker rm container-name -fv	# delete volume associated with that container

docker volume prune	# remove all volumes that have built up

docker volume rm volume-id	# remove specific volume

# docker-compose.yml - file created # this file will help us run the docker command for us with a simple command rather than us having to execute a lenghty command over and over again.
# In docker-compose.yml, you refer to containers as services.
docker-compose up --help

docker-compose up -d

docker-compose down

docker-compose down -v	# bring down all anonymous volumes as they'll keep building up otherwise

docker-compose up -d --build	# rebuild the image

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d # order matters (base config followed by dev or prod)
```
