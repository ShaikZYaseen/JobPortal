FROM node:alpine AS base

WORKDIR /app/backend

RUN npm install -g pnpm

COPY package*.json ./
COPY pnpm-lock.yaml ./

EXPOSE 8000

FROM base AS development

RUN pnpm install

COPY . .

CMD ["pnpm", "run", "dev"]

FROM base AS production

RUN pnpm install --production

COPY . .

CMD ["pnpm", "run", "start"]
