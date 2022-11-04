var express = require("express")
app = express()
port = 3000

app.listen(port)

let urlSearchHits = 0
let urlClickHits = 0

app.post("/register/search", (req, res)=>{
  urlSearchHits++
  res.send("")
})

app.post("/register/click", (req, res)=>{
  urlClickHits++
  res.send("")
})

app.get("/getsearch", (req, res)=>{
  res.send(createBody("search", urlSearchHits))
})

app.get("/getclick", (req, res)=>{
  res.send(createBody("click", urlClickHits))
})

function createBody(key, count){
  return {
    key: count
  }
}

console.log('todo list RESTful API server started on: ' + port);