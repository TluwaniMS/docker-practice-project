FROM node:18-alpine
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .
CMD ["node", "server.js"]
EXPOSE 3002