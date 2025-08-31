FROM node:20-alpine
WORKDIR /app
COPY package.json app.js ./
EXPOSE 8080
CMD ["node", "app.js"]
