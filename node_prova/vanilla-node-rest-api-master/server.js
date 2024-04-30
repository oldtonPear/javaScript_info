const http = require('http');
var fs = require("fs");

const HOST = '192.168.4.23';
let id = 0;
let turno = 0;
const server = http.createServer((req, res) => {
  console.log("url = " + req.url)

  if (req.url === '/game.html' && req.method === 'GET'){
    console.log("entra")
    fs.readFile(__dirname + "/game.html", function(error, data) {
      if (error) {
        res.writeHead(404);
        res.write(error);
        res.end();
      } else {
        res.writeHead(201, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
      }
    });
  }
  if (req.url === '/server.js' && req.method === 'GET' && id < 2){
    id++;
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(id.toString())
  }
  if (req.url === '/server.js' && req.method === 'GET' && id >= 2){
    turno++;
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end("allowed")
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,HOST ,() => console.log(`Server running on port ${PORT}`));

module.exports = server;
