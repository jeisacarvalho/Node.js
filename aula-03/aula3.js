const http = require('http')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type':'text/html'})
   if(req.url=='/'){
      res.write('Seja bem Vindo')
   }else if(req.url=='/Canal'){
      res.write('Canal Jeisa Carvalho')
   }else if(req.url=='/Curso'){
      res.write('Conheça nossos cursos')
   }else if(req.url=='/Curso/Node'){
      res.write('conheça nosso curso de node')
   }
   res.end()
})

servidor.listen(porta,host,()=>{console.log('Servidor rodando')})