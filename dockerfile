# use an official Node runtime as a parent image
FROM node:lts-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY  package*.json ./

#install the depencies
RUN npm install 

# Copy the remaining application files to the working directory
COPY . .

# Build the application
RUN npm run build

# USER node

# Expose port 3000 for the application
EXPOSE 3000

#start the application
CMD [ "npm", "run", "start"  ]