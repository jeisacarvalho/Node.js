const http = require('http');
const url = require('url')
const port1 = 1337;
const host = '127.0.0.1';

const server = http.createServer((req, res)=>{
   res.writeHead(200,{'content-Type' : 'text/html'});
   res.write(req.url);
   const p=url.parse(req.url,true).query;
   res.write('<br/>'+p.nome)
   res.write('<br/>'+p.curso)
   res.end();
});

server.listen(port1,host,()=>{console.log('servidor rodando')});