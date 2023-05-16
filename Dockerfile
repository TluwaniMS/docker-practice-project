FROM node:18-alpine
WORKDIR /src
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
CMD ["node", "server.js"]
EXPOSE 3002