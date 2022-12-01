### Env : docker dektop moacOs

# Ensure kubernetes service enabled
# build docker in rest_srv: docker build -t rest-srv-lab2:latest .
# kubectl apply -f infra.yaml

# check 

## main
curl http://localhost:30001
{"info":"Node.js, Express, and SQLite3 API"}

## users rest api call 
curl http://localhost:30001/users
[{"id":4,"name":"Jerry","email":"jerry@example.com"},{"id":5,"name":"George","email":"george@example.com"}]