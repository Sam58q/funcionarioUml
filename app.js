//Carregando modulos
const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const porta = 5000

//Exibindo Informações Na Tela
app.get("/",(req,res)=>{
    res.send("<h1>Tudo Funcionando</h1>")

})

//EXECUTANDO O SERVIDOR 
app.listen(porta, ()=>{
    console.log("Servidor executando na porta",porta)
})