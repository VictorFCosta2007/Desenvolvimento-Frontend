let express = require('express')
let app = express()
const porta = 5000

let produtos = [
    {
        nome: "Bolo de Morango",
        valor: 29.99,
        descricao: "Bolo refrescante de saboroso",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdocetier.com.br%2Fproduto%2Fbolo-ninho-com-morango%2F&psig=AOvVaw2Uw7pzK-clsYSiwyVAXPvH&ust=1722780277050000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCiiOn-2IcDFQAAAAAdAAAAABAQ"
    },
    {
        nome: "Bolo de Chocolate",
        valor: 49.99,
        descricao: "Nada melhor do que comer um bolo docinho e geladinho pela manhã",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Freceitinhas.com.br%2Freceita%2Fbolo-de-chocolate-com-morango%2F&psig=AOvVaw2jG-yW193QanZ7BA7iaKoF&ust=1722780847071000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCEovaA2YcDFQAAAAAdAAAAABAE"
    },
    {
        nome: "Bolo de Cenoura",
        valor: 39.99,
        descricao: "O bolo que tem sabor de lembranças...",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sabornamesa.com.br%2Fbolos%2Fbolo-de-cenoura-recheado&psig=AOvVaw3HLq3IF0iFfxkejcxI2FUN&ust=1722780891132000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLj9ocuB2YcDFQAAAAAdAAAAABAE"
    },

]

app.get('/', (requisicao, resposta) => {
    try {
        return resposta.json(produtos).status(200)
    } catch(error) {
        return resposta.json({message: "Operação invalida"}).status(400)
    }
})

app.get('/jogos', (requisicao, resposta) => {
    let queryUrl = requisicao.query

    return resposta.json(queryUrl).status(200)
})

app.listen(porta, () => {
    console.log(`http://localhost:${porta}`)
})