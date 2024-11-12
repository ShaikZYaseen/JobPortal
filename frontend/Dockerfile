# Stage 1: Base setup for both Development and Production
FROM node:alpine AS base
WORKDIR /app
COPY package*.json ./

# Stage 2: Development setup
FROM base AS development
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"] # Run React in development mode with live reloading

# Stage 3: Production setup
FROM base AS production
WORKDIR /app

# Install Nginx using apk (Alpine package manager)
RUN apk update && apk add --no-cache nginx

# Install only production dependencies
RUN npm install --production

COPY . .

# Build the React app for production
RUN npm run build

# Remove default nginx content and copy build files into nginx's directory
RUN rm -rf /usr/share/nginx/html/*
RUN cp -r build/* /usr/share/nginx/html/

# Expose port 80 to serve the app via nginx
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"] # Run Nginx in the foreground to serve the app
