FROM node:alpine AS base
WORKDIR /app/frontend

RUN npm install -g pnpm

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

FROM base AS development

EXPOSE 5173

COPY . .

CMD ["pnpm", "run", "dev"]

FROM base AS production

RUN apk update && apk add nginx

RUN pnpm install --production

COPY . .

RUN pnpm run build

RUN rm -rf /usr/share/nginx/html/*
RUN cp -r build/* /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
