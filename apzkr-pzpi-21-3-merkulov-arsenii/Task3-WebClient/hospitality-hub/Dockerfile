
FROM node:18.20-alpine

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy the project files into the container at /usr/src/app
COPY . .

# Install project dependencies
RUN npm install

EXPOSE 4200

# Start the Angular app
CMD ["npm", "start"]

