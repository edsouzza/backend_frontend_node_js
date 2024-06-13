const  express = require("express")

const app = express()

/* DEFINE O TIPO DE FORMATO DE DADOS JSON */
app.use(express.json())

/* CONFIG DA PORTA */
const port = 3000
app.listen(port, () => {
    console.log(`Run server in port ${port}`)
})

/*
    Query params => meusite.com/users?name=lino&age=57 - usar quado dado nao for nada sigiloso

    Rout  params => /users/2 => buscar,deletar,atualiza algo com o id passado que é 2 por exemplo 

    Request Body => {“name”:”Lino”, “age”:57} 

    VERBOS HTTP
    GET    - Leitura/Listagem
    POST   - criação
    PUT    - Atualizacao
    DELETE - Deleção
    PATCH  - Atualização parcial(somente 1)

    JSON => JAVASCRIPT OBJECT NOTATION

*/
const users = [
    {
        name : "Lino",
        age  : 57
    }
]
/* ROTAS */
app.get('/usuarios', function (req, res){
    res.json(users)
})

app.post('/usuarios', function (req, res){
    const newUser = req.body

    console.log(newUser)
    users.push(newUser)

    res.json(newUser)
})

app.delete('/usuarios/:id', function (req, res){
    const id = req.params.id
    
    console.log(req.id)
    users.splice(id, 1)

    res.send("Usuário deletado com sucesso!")
})