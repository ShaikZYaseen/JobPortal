# Stage 1: Build the React app with Vite
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the React app for production (creates a /dist directory)
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Remove default Nginx static files and add the React build output
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from the previous stage to Nginx HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx in the foreground to keep the container running
CMD ["nginx", "-g", "daemon off;"]
