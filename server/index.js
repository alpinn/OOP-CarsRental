const http = require('http');
const PORT = 8000;

function onRequest(req, res){
    console.log('request: ', req)
    res.writeHead(200);
    res.end("Halooo from server");
}

const server = http.createServer(onRequest);

server.listen(PORT, '0.0.0.0', () => {
    console.log("Server sudah berjalan, silahkan dibuka http://127.0.0.1:%d", PORT);
});