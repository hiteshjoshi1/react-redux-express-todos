#Helm charts
#Kubectl
#PODS
#Docker
#Horizontal scaling
#Replication and Load Balancing

# REACT TODOS -

Purpose of this application is to explore Kubernetes and the surrouding devops systems.

A Hello World Project in React, Redux, NodeJS, Mongodb.

I use MongoLab. You can use a local Mongo instance as well.

Start Mongodb
mongod --dbpath <yourdbpath> --port 27017

## Clone, Install server and client dependencies

git clone
cd <folderName>
Install server dependencies
npm i

## Server expects a Mongodb server running at localhost:27017

To seed the db with some seed data, change config.idex.js
seedDB: process.env.seed||true

### With seedDb set to true, code will seed the db with dummy Todos.

Run server -
npm start

## Install Client dependencies

cd client
npm i

Run Client
npm start

## Command for Building the image in Docker

docker build -t todos .

## Application needs following env variables for Mongodb connection in config.js

- userName
- password
- dbUrl

## Run locally with a local mongo db in host machine

Create a mongo user locally

$ mongo
$ use todos

```
db.createUser(
 {

     user: "hitesh",
     pwd: "joshi",
     roles: [ "readWrite", "dbAdmin" ]

}
)
```

### Run the code using docker while coonecting to MOngodb at Host

```
docker run -p 4000:4000 -e username='hitesh' \
-e password='joshi' \
-e dburl='host.docker.internal:27017/todos' \
-d todos
```

## Runnig with docker connecting to Mongo at Mlab -

```
docker run -p 4000:4000 -e username='hitesh' \
-e password='password' \
-e dburl='yourMLABURL.mlab.com:56540/todos' \
-d todos
```

## Passing env variables and Secrets to kubernetes

You declare configmap and secrets and then reference them in your pod.yaml file

Create Kubernetes secret for password

```
kubectl create secret generic password --from-literal=password=<your-mongo-password-here>
```

Create Kubernetes config map for username and MongoUrl->

```
kubectl create configmap username --from-literal=username=<you_mongo_username>

kubectl create configmap dburl --from-literal=dburl=<Your_db_Or_MlabUrl>
```

## Run with skaffold - Local Development

```
skaffold_dev
```

### If you are not using Skaffold for local development(God knows why- you should)

- set the environment variables with eval \$(minikube docker-env)
- build the image with the Docker daemon of Minukube eg
  ```
  docker build -t todos .
  ```
- Finally use K8 apply (I prefer it over k8 create and run) -

  ```
  kubectl apply -f ./charts/todos/templates/
  ```

- You can directly run it using K8 run as[Not preferred] -

```
kubectl run todos --image=todos:latest --image-pull-policy=Never
```

Open the Service to an external IP in Minikube, this is done automatically in a Paas like Azure ->

```
minikube service todos
```

### If everything goes fine , the deployed Load Balanced application would be available in -

http://192.168.64.4/

This is a load balancer URL which is redirecting to your pods which are running at 4000

## Production Readiness

Well to move to cloud cluster which would be the eventual home of such an application, we need to make some adjustments

In comes - Helm (Helm - client and Tiller - Server), the package manager for Kubernetes

## Deploying Using Helm in Local Minikube cluster -

- Install Helm

```
brew install kubernetes-helm
```

Again if you are not in mac/ Linux. Go figure....

- Initialise Tiller -

helm init --history-max 200

This will initialize Tiller and will make sure that it keeps only the last 200 builds as history.

- Now Start the deployment and services with helm using the command, from project root.

```
helm install ./charts/todos/
```

- This will start the pods - 3 in our case and create the load balancing service, check them out by

```
kubectl get po,svc
```

or

```
kubectl get all
```

Now if you used Helm to deploy to a Cloud Cluster , a public IP will be created on service creation and your website would be available on it.

However on minikube cluster, public ip is not provisioned automatically.
Open your application after your deployment has completed with the command -

```
minikube service todos
```

- See Deployed helm releases with

```
helm ls
```

- Check a particular Release -

```
helm status <RELEASE_NAME>
```

To see the deleted release ->

```
helm delete  <chart-name>
```

Soft Delete ->

```
helm delete --purge <chart-name>
```

### To RollBack to a particular Relase

```
helm rollback <RELEASE_NAME> <REVISION_NUMBER>
```

- To Permanently delete a release from Helm

```
helm delete --purge RELEASE_NAME
```

# TODO

- [x] Helm Charts
- [x] Deploy to Azure - See the Azure branch. Used Azure devops. Create a Build and Release pipeline
      Based on - Thanks (MATHIEU BENOIT)[https://github.com/mathieu-benoit]
      https://cloudblogs.microsoft.com/opensource/2018/11/27/tutorial-azure-devops-setup-cicd-pipeline-kubernetes-docker-helm/
- [ ] Deploy to GCE
- [ ] Deploy to AWS
- [ ] Create Helm charts with command line values passed at run time
