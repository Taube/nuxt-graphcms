
Build the latest image
$ docker build -t getitdone/nuxt-graphcms:latest .

Push the latest image to docker repo
$ docker push getitdone/nuxt-graphcms:latest

Azure
https://portal.azure.com/
New -> Compute -> Azure Container Service

ssh getitdone@tessinmgmt.westeurope.cloudapp.azure.com -p 22 -L 22375:127.0.0.1:2375

docker run -ti --rm -v /var/run/docker.sock:/var/run/docker.sock dockercloud/registration

You can now access this cluster using the following command in any Docker Engine:
docker run --rm -ti -v /var/run/docker.sock:/var/run/docker.sock -e DOCKER_HOST dockercloud/client getitdone/6vy2jcllckr0rqux0q54vrjld

https://www.youtube.com/watch?v=KC4Ad1DS8xU
docker service create --name tessin --publish 80:3000 getitdone/nuxt-graphcms:latest swarm-master-751492A8-0x

docker container run getitdone/nuxt-graphcms:latest
docker container run -d -p 3000:3000 getitdone/nuxt-graphcms:latest
docker run -d -p 3000:3000 getitdone/nuxt-graphcms:latest

docker -H 52.174.186.65

docker service ls
docker service ps tessin
docker service inspect tessin --pretty
docker service rm tessin

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

Step 1:
ssh getitdone@tessinmgmt.westeurope.cloudapp.azure.com -p 22 -L 22375:127.0.0.1:2375

Step 2:
Start new Terminal and run commands like:
docker -H 127.0.0.1:22375 images
docker -H 127.0.0.1:22375 pull getitdone/nuxt-graphcms:latest
docker -H 127.0.0.1:22375 run -d -p 3000:3000 getitdone/nuxt-graphcms:latest

tessinmgmt.westeurope.cloudapp.azure.com

