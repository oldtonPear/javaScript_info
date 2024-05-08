const http = require('http');
const fs = require('fs')

const {
  getVinyl
} = require('./controller/controller');


const server = http.createServer((req, res) => {
  if (req.url === '/vinylAPI' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream('view/index.html').pipe(res);
  }
  else if (req.url === '/vinylAPI/vinyl' && req.method === 'GET') {
    getVinyl(req, res);
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
    JSON.stringify({message: 'error',}));
  }
});
  
  const PORT = process.env.PORT || 5000;
  
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  
  module.exports = server;