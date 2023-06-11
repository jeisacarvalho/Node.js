const http = require('http')
const fs=require('fs')
const porta = 3000

const serve = http.createServer((req,res)=>{
    fs.appendFile('test.txt','curso de Node - CFB Cursos',(err)=>{
        if(err)throw err
        console.log('Aquivo criado')

    })

})

serve.listen(porta, ()=>{console.log('servido rodando')})