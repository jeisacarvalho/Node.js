//CONEXÃO

const conectar = async ()=>{
    if(global.conexao && global.conexao.state != 'disconected')
    return global.conexao
    const mysql=require('mysql2/promise')
    const con=mysql.createConnection("mysql://root:Melissa31$@localhost:3306/curso_node")
    console.log('Conectou ao Banco')
    global.conexao=con
    return con
}

//Função para SELECT
const todosClientes = async()=>{
    const con=await conectar()
    const [linhas] = await con.query('SELECT * FROM cliente')
    return await linhas
}

module.exports = {todosClientes}
    /*
ASYNC ==> A Programação assíncrona é uma forma de evitar delays ou tempos
 de espera na execução de um programa. Quando estamos executando algo 
 sincronicamente, podemos ter bloqueios no processo pela necessidade 
 de esperar alguma execução de código.

 AWAIT ==> Quando utilizamos await , o JavaScript vai aguardar até que a Promise
  finalize. Se for finalizada com sucesso (o termo utilizado é fulfilled)
  , o valor obtido é retornado.
*/