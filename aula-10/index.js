(async ()=>{
    const db=require('./db')
    
    //const id=2
    //const nom='Anderson'
    //const ida= 38
    //await db.atualizarcliente(id,{nome:nom,idade:ida})
    //console.log('cliente' + id + 'atualizado')
    const id=2
    await db.deletarcliente(id)
    console.log('cliente' + id + 'deletado')


    console.log('Obter todos os clientes')
    const clientes=await db.todosClientes()
    console.log(clientes)
})()















