const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8050
const connectionString = "mongodb+srv://victorferreiracosta2007:ezkb2sbvtWS0WsV9@bancodedados.1hh7x.mongodb.net/"
const Usuario = require('./models/usuario')

app.use(express.json())

app.get('/', async (req, res) => {
    try{
        let usuarios = await Usuario.find()
        return res.status(200).json({users: usuarios})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error})
    }
})

app.post('/cadastrar-usuario', async (req, res) => {
    try {
        let usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }

        await Usuario.create(usuario)
        return res.status(201).json({mensagem: "Usuario cadastrado com sucesso!!"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Erro interno no servidor"})
    }
})

app.post('/login', async (req, res) => {
    try {
        let usuario = await Usuario.findOne({email:req.body})
        console.log(usuario)

        if(usuario === null)
        {
            return res.status(404).json({message: "Usuario ou senha invalidos"})
        }
        return res.status(200).json({message: "Login realizado com sucesso!", token_access:Math.floor(Math.floor(Math.random() * 1000000))})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Erro Interno no servidor"})
    }
})

mongoose.connect(connectionString, {
    dbName: "BancoDeDados"
}).then(() => {
    console.log("MongoDB up!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log("Falha ao se conectar ao mongoDB")
    console.log(error)
})

