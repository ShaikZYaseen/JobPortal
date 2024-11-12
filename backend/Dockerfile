FROM node:alpine AS base
WORKDIR /app
COPY package*.json ./

EXPOSE 8000

FROM base AS development
COPY . .
RUN npm install
CMD ["npm", "run", "dev"] # Run in development mode

FROM base AS production
COPY . .
RUN npm install --production
CMD ["npm","run","start"] # Run in production mode
