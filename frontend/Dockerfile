FROM node:20-alpine AS builder

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.25-alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /frontend/dist ./

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]