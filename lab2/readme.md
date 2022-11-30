### Env : docker dektop moacOs

# Ensure kubernetes service enabled
# build docker in rest_srv: docker build -t rest-srv-lab2:latest .
# kubectl apply -f infra.yaml

# check 

## main
curl http://localhost:3000
{"info":"Node.js, Express, and Postgres API"}

## users rest api call 
curl http://localhost:3000/users
[{"id":1,"name":"Jerry","email":"jerry@example.com"},{"id":2,"name":"George","email":"george@example.com"}]