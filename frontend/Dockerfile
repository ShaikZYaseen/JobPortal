FROM node:alpine AS base
WORKDIR /app
COPY package*.json ./

FROM base AS development
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"] # Run React in development mode with live reloading

FROM base AS production

RUN apk update && apk add --no-cache nginx

RUN npm install --production

COPY . .

RUN npm run build

RUN rm -rf /usr/share/nginx/html/*
RUN cp -r build/* /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] # Run Nginx in the foreground to serve the app
