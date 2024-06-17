#!/bin/sh

HOST_URL="http://localhost:3000"
API_KEY="xxx"

timestamp=$(date +"%Y%m%d%H%M%S")
mkdir -p out/$timestamp

iterations=${1:-1}
query_file="query.graphql"

# Read the GraphQL query, escaping newlines
query=$(awk '{printf "%s\\n", $0}' $query_file)

# Define the JSON data and write it to a temporary file
json_data=$(jq -n --arg query "$query" \
'{
  query: $query,
}')

json_temp_file="out/$timestamp/request.json"
echo "$json_data" > "$json_temp_file"

for i in $(seq 1 $iterations); do 
  curl -s "$HOST_URL/api/graphql" \
  -H 'Accept-Encoding: gzip, deflate, br' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Connection: keep-alive' \
  -H 'DNT: 1' \
  -H "Authorization: users API-Key $API_KEY" \
  --data-binary "@$json_temp_file" \
  --compressed | jq . > out/$timestamp/out$i.json & 
done

wait

ls -la out/$timestamp | grep out
