FROM node:alpine AS base
WORKDIR /app
COPY package*.json ./

EXPOSE 8000

FROM base AS development
RUN npm install
COPY . .
CMD ["npm", "run", "dev"] # Run in development mode

FROM base AS production
RUN npm install --production
COPY . .
CMD ["npm","run","start"] # Run in production mode
