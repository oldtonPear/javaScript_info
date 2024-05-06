const http = require('http');
var fs = require("fs");

const HOST = '192.168.4.23';
distanze = [
  { città1: "Belluno", città2: "Padova", distanza: 85.41 },
  { città1: "Belluno", città2: "Rovigo", distanza: 123.46 },
  { città1: "Belluno", città2: "Treviso", distanza: 52.70 },
  { città1: "Belluno", città2: "Venezia", distanza: 79.02 },
  { città1: "Belluno", città2: "Verona", distanza: 122.96 },
  { città1: "Belluno", città2: "Vicenza", distanza: 84.35 },

  { città1: "Padova", città2: "Rovigo", distanza: 38.28 },
  { città1: "Padova", città2: "Treviso", distanza: 40.31 },
  { città1: "Padova", città2: "Venezia", distanza: 36.18 },
  { città1: "Padova", città2: "Verona", distanza: 69.13 },
  { città1: "Padova", città2: "Vicenza", distanza: 30.29 },

  { città1: "Rovigo", città2: "Treviso", distanza: 75.06 },
  { città1: "Rovigo", città2: "Venezia", distanza: 59.00 },
  { città1: "Rovigo", città2: "Verona", distanza: 74.65 },
  { città1: "Rovigo", città2: "Vicenza", distanza: 56.32 },

  { città1: "Treviso", città2: "Venezia", distanza: 26.87 },
  { città1: "Treviso", città2: "Verona", distanza: 100.60 },
  { città1: "Treviso", città2: "Vicenza", distanza: 56.21 },

  { città1: "Venezia", città2: "Verona", distanza: 105.10 },
  { città1: "Venezia", città2: "Vicenza", distanza: 64.47 },

  { città1: "Verona", città2: "Vicenza", distanza: 44.40 }
]


const server = http.createServer((req, res) => {
  if (req.url === '/pagina' && req.method === 'GET'){
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('client.html').pipe(res)
  }
  if (req.url === '/distanze' && req.method === 'GET'){
    res.writeHead(200, { 'content-type': "text/plain"})
    res.end(JSON.stringify(distanze))
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,HOST ,() => console.log(`Server running on port ${PORT}`));

module.exports = server;
