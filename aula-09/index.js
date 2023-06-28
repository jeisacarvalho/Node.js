(async ()=>{
    const db=require('./db')
    console.log('inserir novo cliente')
    await db.insereClientes({id:'2',nome:'Anderson',idade:'28'})
    console.log('Obter todos os clientes')
    const clientes=await db.todosClientes()
    console.log(clientes)
})()















