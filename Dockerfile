# Long tern stable
# bullseye: debian based
# slim: light weight
# https://snyk.io/blog/choosing-the-best-node-js-docker-image/

FROM node:lts-bullseye-slim AS build

RUN mkdir -p /src /opt/log /data

WORKDIR /src

COPY package.json yarn.lock /src/

RUN apt-get update && apt-get install -y net-tools apt-utils
# install yarn.lock version packages
RUN yarn install --frozen-lockfile

COPY . /src

RUN chmod +x /src/dc-entry.sh
ENTRYPOINT ["/src/dc-entry.sh"]

EXPOSE 8000
