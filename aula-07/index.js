const express =require('express')
const rotas = require('./rotas/rotas')
const porta = 3000

const app=express()

app.use('/',rotas)

app.get('*',(req,res)=>{
    res.send('ola, dev')
})

app.listen(porta,()=>{console.log('rodando')})