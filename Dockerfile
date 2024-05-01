# syntax=docker/dockerfile:1

FROM node:20-alpine
WORKDIR /Web
# Copy everything
COPY . ./
RUN npm ci
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "4000"]