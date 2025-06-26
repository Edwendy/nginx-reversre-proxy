// ~/service2/service2.js
           const http = require('http');
           const port = 3000;
           const server = http.createServer((req, res) => {
             res.writeHead(200, {'Content-Type': 'text/plain'});
             res.end('Hello from Service 2 (Node.js Application)');
           });
           server.listen(port, () => {
             console.log(`Service 2 listening on port ${port}`);
           });