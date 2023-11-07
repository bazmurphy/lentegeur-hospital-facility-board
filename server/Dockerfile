# Creating a multi-stage build for production

# Use the official Node.js 18-alpine image as the build stage base image
FROM node:18-alpine as build

# Install required packages in the Alpine Linux environment
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1

# Define the NODE_ENV environment variable for the build stage
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set the working directory to /opt/
WORKDIR /opt/

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install the 'node-gyp' globally
RUN npm install -g node-gyp

# Set a global NPM configuration for 'fetch-retry-maxtimeout' and install production dependencies
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install --only=production

# Add the '/opt/node_modules/.bin' directory to the PATH environment variable
ENV PATH /opt/node_modules/.bin:$PATH

# Set the working directory to /opt/app/
WORKDIR /opt/app

# Copy the application source code to the working directory
COPY . .

# Build the application using the 'npm run build' command
RUN npm run build

# Creating the final production image

# Use the official Node.js 18-alpine image as the base image for the final production stage
FROM node:18-alpine

# Install vips-dev package in the Alpine Linux environment
RUN apk add --no-cache vips-dev

# Define the NODE_ENV environment variable for the final production stage
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set the working directory to /opt/
WORKDIR /opt/

# Copy the 'node_modules' directory from the build stage to the final image
COPY --from=build /opt/node_modules ./node_modules

# Set the working directory to /opt/app/
WORKDIR /opt/app

# Copy the application source code from the build stage to the final image
COPY --from=build /opt/app ./

# Add the '/opt/node_modules/.bin' directory to the PATH environment variable
ENV PATH /opt/node_modules/.bin:$PATH

# Change the ownership of the '/opt/app' directory to the 'node' user
RUN chown -R node:node /opt/app

# Set the user to 'node' for running the application
USER node

# Expose port 1337 for the application
EXPOSE 1337

# Specify the command to run the application when the container starts
CMD ["npm", "run", "start"]