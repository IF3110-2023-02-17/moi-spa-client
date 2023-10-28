FROM node:18-alpine AS dev

WORKDIR /app/spa-react

COPY package*.json ./

COPY vite*.ts ./

COPY . .

RUN rm -rf node_modules
RUN npm install

EXPOSE 5173

# RUN npm run build
CMD ["npm", "run", "dev"]