const express = require('express')
const app=express()
const porta = 3000

app.get('/',(req,res)=>{
    res.send('seja bem vindo')
})

app.get('/canal', (req,res)=>{
    res.json('canal CFB cursos')
})

app.listen(porta, ()=>{console.log('servido rodando')})