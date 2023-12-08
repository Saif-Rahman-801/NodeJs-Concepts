const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Programmers");
    res.end();
  } else if(req.url === "/greet"){
    res.write("How you doing mate?");
    res.end();
  } else{
    res.write("not found");
    res.end();
  }
});

server.listen(5000);
console.log("listening port 5000");
