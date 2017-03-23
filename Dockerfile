FROM mhart/alpine-node:7.7.2
MAINTAINER olataube

ENV NODE_ENV production

# Create app directory & copy package.json.
RUN mkdir -p /app
COPY package.json /app/package.json

# Install deps.
WORKDIR /app
RUN npm install

# Copy app files & build.
COPY . /app
ONBUILD COPY . /app
RUN ./node_modules/.bin/nuxt build

# Expose the app port.
EXPOSE 3000

CMD ["node", "/app/server.js"]