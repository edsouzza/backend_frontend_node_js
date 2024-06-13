const  express = require("express")

const app = express()

const port = 3000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

/*ROTAS*/
app.get('/usuarios', function (req, res){
    res.send('Lista Usuarios')
})