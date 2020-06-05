FROM node:14.4.0-alpine3.10
USER root
WORKDIR /frontend
COPY . /frontend
EXPOSE 5000
RUN yarn
RUN yarn build