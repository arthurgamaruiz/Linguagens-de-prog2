const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())
const dotenv = require('dotenv').config()

const cors = require('cors')
app.use(cors())                     //libera requisições de origens quaisquer

/**
 * front: http://5173 tenta conversar com outra origem -> http://localhost:3000
 * erro Cross Origin Resource Sharing
 * SOLUÇÃO: especificar no front quais origens podem compartilhar recursos (acesso a endpoints e que uma resposta possa ter conteúdo)
 *  
 * 
 */

app.get('/search', async function(req, res) {
    //console.log(req.params) objeto query tem um par chave valor, cuja chave é query
    //console.log(req.query)
    //copia código do arquivo pexelsClient (retira a chave de api do front-end)
    const pexelsClient = axios.create({
        baseURL: 'https://api.pexels.com/v1',
        headers: {
            Authorization: process.env.PEXELS_API_KEY,
        }
    })
    const {data} = await pexelsClient.get('/search', {
        params: {
            query:req.query.query   
        }
    })
    console.log(data)
    res.json(data)              //retorna para o front
})
const port = 3000
app.listen(port, () => console.log(`Back. Porta: ${port}`))