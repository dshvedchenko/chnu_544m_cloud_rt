Env : docker dektop moacOs

1. Ensure kubernetes service enabled
2. apply
kubectl apply -f postgres-secret.yaml
kubectl apply -f postgres-configmap.yaml
kubectl apply -f postgres-deployment.yaml
kubectl apply -f node-deployment.yaml

3. check 
curl http://localhost:3000
{"info":"Node.js, Express, and Postgres API"}

curl http://localhost:3000/users
[{"id":1,"name":"Jerry","email":"jerry@example.com"},{"id":2,"name":"George","email":"george@example.com"}]