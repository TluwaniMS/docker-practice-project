# Basic practice project

## Practice project 1:

### Main Objective:
Setting up a node server in a container, and publishing it's port for external access.


#### 1. Building the docker image:

```
docker build -t node-js-server .
```

#### 2. Running the container and publishing the port:

```
docker run -d -p 3002:3002 --name node-js-server-container node-js-server
```
#### 3. Accessing the servers API:

```
curl http://localhost:3002/api/access-end-point
```

#### 4. View the container logs:

```
docker container logs node-js-server-container
```
