const http = require('http')
const porta = 3000

const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type' : 'text/plain'})
    res.end('ola, dev')

})

servidor.listen(porta,()=>{console.log('servidor rodando')})