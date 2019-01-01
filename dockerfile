# use latest version of node
FROM node:8

# set working directory
WORKDIR /dist

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# bundle source code
COPY . .

# expose port 3000
EXPOSE 3000

# start app with yarn
CMD ["npm", "start"]