# Base image
FROM node:14

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install project dependencies
RUN pnpm install

# Copy the rest of the project files
COPY . .

# Build the client-side code
RUN cd client && pnpm run build

# Expose the server port
EXPOSE 5000

# Start the server
CMD [ "pnpm", "start" ]
