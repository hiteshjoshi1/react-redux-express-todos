REACT TODOS -   
A Hello World Project in React and REDUX.
Uses Semantic-ui for CSS.
Use NodeJs/Express for Backend and Mongodb as datastore

Start Mongodb
mongod --dbpath <yourdbpath> --port 27017

## Clone, Install server and client dependencies
git clone
cd <folderName>
Install server dependencies
npm i

# Server expects a Mongodb server running at localhost:27017

To seed the db with some seed data, change config.idex.js
   seedDB: process.env.seed||true

# With seedDb set to true, code will seed the db with dummy Todos.
Run server -
npm start

## Install Client dependencies
cd client
npm i

Run Client 
npm start


#] Command for Running NodeJs code in Docker container
docker build -t  hiteshjoshi1/nodetodos .


# Application needs following set for Mongodb connection in config.js
uname
password
dburl


## Runnig with docker connecting to Mongo at Mlab -
docker run   -p 3000:3000 -e uname='hitesh' \
-e password='password' \
-e dburl='yourMLABURL.mlab.com:56540/todos' \
-d hitesh/nodetodos


In heroku Set mongodb Urls --> for now it is pointing to MongoLab

heroku config:set uname=<username>
heroku config:set password=<password>
heroku config:set dburl=<dburl>

Deployed Application -> 
https://pure-scrubland-11307.herokuapp.com/


Thanks for free Dynos :)

Application TODOS-

TODO - Add Lerna for Single build
TODO - Deploy to Cloud/ Kubernetes
TODO - Add CI/CD
