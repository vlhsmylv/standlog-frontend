FROM node:20 AS build
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm install 

# Copy source code
COPY . .

ARG VITE_API_URL

ENV VITE_API_URL=${VITE_API_URL}

# Build the application
RUN npm run build

EXPOSE 3000

# Use Vite's preview command to serve the built files
CMD ["npm", "run", "preview", "--", "--host", "--port", "3000"]