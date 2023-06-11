const http = require('http');
const port1 = 1337;
const host = '127.0.0.1';

const server = http.createServer((req, res)=>{
   res.writeHead(200,{'content-Type' : 'text/html'});
   if(req.url=='/'){
    res.write('Seja bem Vindo!');
   }else if(req.url=='/canal'){
    res.write('canal CFB');
   }if(req.url=='/curso'){
    res.write('conheca os curso de Node.js');
   }else if(req.url=='/curso/node'){
    res.write('curso de node');
   }
   res.end();
});

server.listen(port1,host,()=>{console.log('servidor rodando')});