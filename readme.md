Isomorphic fetch
https://github.com/matthew-andrews/isomorphic-fetch

Nuxt Apollo Client Example
https://glitch.com/edit/#!/nuxt-apollo-client

Use Apollo in your app
https://dev-blog.apollodata.com/use-apollo-in-your-vuejs-app-89812429d8b2#.x8kty2kaa

Nuxt
Layout: https://nuxtjs.org/examples/layouts

Build the latest image
$ docker build -t getitdone/nuxt-graphcms:latest .

Push the latest image to docker repo
$ docker push getitdone/nuxt-graphcms:latest

Azure
https://portal.azure.com/
New -> Compute -> Azure Container Service

ssh getitdone@tessinmgmt.westeurope.cloudapp.azure.com

docker run -ti --rm -v /var/run/docker.sock:/var/run/docker.sock dockercloud/registration

You can now access this cluster using the following command in any Docker Engine:
docker run --rm -ti -v /var/run/docker.sock:/var/run/docker.sock -e DOCKER_HOST dockercloud/client getitdone/6vy2jcllckr0rqux0q54vrjld

https://www.youtube.com/watch?v=KC4Ad1DS8xU
docker service create --name tessin --publish 80:80 getitdone/nuxt-graphcms swarm-master-751492A8-0

docker container run getitdone/nuxt-graphcms:latest

docker service ls
docker service ps tessin
docker service inspect tessin --pretty
docker service rm tessin

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)