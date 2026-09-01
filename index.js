const http = require('node:http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Bonjour depuis mon nouveau projet Node.js !\n');
});

server.listen(PORT, () => {
    console.log(`Serveur démarré et accessible sur http://localhost:${PORT}/`);
});