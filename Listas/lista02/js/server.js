const express = require('express')
const { get } = require('http')
const app = express()
const port = 5010

app.use(express.json())

let database = []

app.get('/buscar-todos-usuario', (req, res) => {
    try {
        res.status(200).json({cadastros: database})
    } catch (error) {
        res.status(500).json({mensagem: error})
    }
})

app.post('/cadastrar-usuario', (req, res) => {
    try {
        let cadastro = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            confirmacaoSenha: req.body.confirmacaoSenha,
        }

        if(cadastro.senha != cadastro.confirmacaoSenha) {
            return res.status(400).json({mensagem: "As senhas não coincidem!"})
        }

        database.push(cadastro)

        return res.status(201).json({mensagem: "Usuário adicionado com sucesso!"})
    } catch (error) {
        res.status(500).json({mensagem: error})
    }
})

app.post('/login', (req, res) => {
    try {
        let login = {
            email: req.body.email,
            senha: req.body.senha,
        }

        let emailEncontrado = database.find(login => login.email === email)
        let senhaEncontrada = database.find(login => login.senha === senha)

        if(!emailEncontrado) {
            return "Usuário ou senha inválido"
        }

        if(!senhaEncontrada) {
            return "Usuário ou senha inválido"
        }

        return "Login bem sucedido"
    } catch (error) {
        res.status(500).json({mensagem: error})
    }
})



app.listen(port, () => {
    console.log("Servidor Executado!")
    console.log(`http://localhost:${port}/buscar-todos-usuario`)
})