const conectar = async ()=>{
    if(global.conexao && global.conexao.state != 'disconected')
    return global.conexao
    const mysql=require('mysql2/promise')
    const con = mysql.createConnection("mysql://root:Melissa31$@localhost:3306/curso_node")
    console.log('Conectou ao banco')
    global.conexao=con
    return con
}
conectar()

module.exports= {}
/*
ASYNC ==> A Programação assíncrona é uma forma de evitar delays ou tempos
 de espera na execução de um programa. Quando estamos executando algo 
 sincronicamente, podemos ter bloqueios no processo pela necessidade 
 de esperar alguma execução de código.
*/