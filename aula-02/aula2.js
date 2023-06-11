/*O REQUIRE ==> realiza a importação de um arquivo 
para nossa página e verifica se esse arquivo 
está funcionando e se ele de fato existe.*/

/* CREATESERVER() ==> recebe como argumento uma função callback
 que é chamada quando recebe uma requisição HTTP 
 - isso retorna uma resposta com um status 200 ("OK") 
 do HTTP e o texto "Hello World".*/

const http = require('http');

http.createServer((requisiçao, resposta) => {
    resposta.writeHead(200, {'Content-Type': 'text/plain'});
    resposta.write('Hello World');
    resposta.end();
}).listen(1057);
