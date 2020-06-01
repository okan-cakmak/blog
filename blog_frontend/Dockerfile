# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:10
USER root
WORKDIR /app
COPY . .
EXPOSE 3000
RUN npm install
RUN npm run start