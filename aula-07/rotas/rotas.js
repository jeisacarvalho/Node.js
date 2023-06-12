const express = require('express')
const rotas=express.Router()

let cursosInfo=[
    {'curso':'node','info':'Curso de node'},
    {'curso':'react','info':'Curso de react'},
    {'curso':'java','info':'Curso de java'},
    {'curso':'arduino','info':'Curso de arduino'},
]

rotas.get('/',(req,res)=>{
    res.json({ola: 'Seja bem Vindo'})
})

//posso colocar parametros
// Parametro ==> cursoid

rotas.get('/:cursoid', (req,res)=>{
    const curso=req.params.cursoid
    const cursoi=cursosInfo.find(i=>i.curso == curso)
    if(!cursoi){
        res.status(404).json({
            erro:'curso nao encontrado', cursoPesquisa:curso
        })
    }else{
        res.status(200).json(cursoi)
    }
})

module.exports = rotas
   

   // find=>pesquisar
  