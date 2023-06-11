const http = require('http')
const fs=require('fs')
const porta = 3000

const serve = http.createServer((req,res)=>{
    fs.readFile('site.html',(err,arquivo)=>{
        res.writeHead(200,{'content-Type' : 'text/plain'})
        res.write(arquivo)
        return res.end()

    })

})

serve.listen(porta, ()=>{console.log('servido rodando')})