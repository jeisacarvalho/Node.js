// criar conexão

const conectar = async () => {
    if(global.conexao && global.conexao.state !== 'disconnected') 
        return global.conexao
    const mysql = require('mysql2/promise');
    const con=mysql.createConnection("mysql://root:Melissa31$@localhost:3306/curso-de-node")
    console.log('conectou ao banco de dados')
    global.conexao = con
    return con
}

const todosClientes = async () => {
    const con = await conectar()
    const [linhas] = await con.query('select * from clientes;')
    return await linhas
}

module.exports = {todosClientes}