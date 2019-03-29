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

docker build -t node-todos-mongo .

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
docker run -p 4000:4000 -e username='hitesh' \
-e password='joshi' \
-e dburl='host.docker.internal:27017/todos' \
-d node-todos-mongo
```

## Runnig with docker connecting to Mongo at Mlab -

```
docker run -p 4000:4000 -e username='hitesh' \
-e password='password' \
-e dburl='yourMLABURL.mlab.com:56540/todos' \
-d node-todos-mongo
```

## Passing env variables and Secrets to kubernetes

You declare configmap and secrets and then reference them in your pod.yaml file

Create Kubernetes secret for password->
kubectl create secret generic password --from-literal=password=<your-mongo-password-here>

Create Kubernetes config map for username and MongoUrl->
kubectl create configmap username --from-literal=username=<you_mongo_username>

kubectl create configmap dburl --from-literal=dburl=<Your_db_Or_MlabUrl>

## Run with skaffold

skaffold_dev
