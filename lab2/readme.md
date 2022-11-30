Env : docker dektop moacOs

1. Ensure kubernetes service enabled
2. build docker in rest_srv: docker build -t rest-srv-lab2:latest .
2. kubectl apply -f infra.yaml

3. check 
curl http://localhost:3000
{"info":"Node.js, Express, and Postgres API"}

curl http://localhost:3000/users
[{"id":1,"name":"Jerry","email":"jerry@example.com"},{"id":2,"name":"George","email":"george@example.com"}]