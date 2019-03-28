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

# Install Client dependencies

cd client
npm i

Run Client
npm start

## Command for Building the image in Docker

docker build -t hiteshjoshi1/nodetodos .

## Application needs following env variables for Mongodb connection in config.js

- userName
- password
- dbUrl

## Run locally with a local mongo db in host machine

Create a mongo user locally

> mongo
> use todos
> db.createUser(
> {

     user: "hitesh",
     pwd: "joshi",
     roles: [ "readWrite", "dbAdmin" ]

}
)

###Run the code using docker while coonecting to MOngodb at Host

```
docker run -p 4000:4000 -e userName='hitesh' \
-e password='joshi' \
-e dbUrl='host.docker.internal:27017/todos' \
-d hiteshjoshi1/nodetodos
```

## Runnig with docker connecting to Mongo at Mlab -

```
docker run -p 3000:3000 -e uname='hitesh' \
-e password='password' \
-e dburl='yourMLABURL.mlab.com:56540/todos' \
-d hiteshjoshi1/nodetodos
```
