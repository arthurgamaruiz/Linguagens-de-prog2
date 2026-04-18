require('dotenv').config()
const express = require('express');
const mysql2 = require('mysql2/promise')

const app = express()

//middleware
app.use(express.json())

let conexao     //representa a conexão com o banco
//função para conectar com o banco
const conectar = async () => {          //utilizando promise
    //execução assíncrona para não bloquear
    try{
        conexao = await mysql2.createConnection({
        host: process.env.HOST, 
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: process.env.PORT
        })
        console.log('Conectado ao MySQL')
    }
    catch(erro){
        console.log(`Erro ao conectar com o banco: ${erro}`)
    }
}
conectar()
//****definindo endpoints****
//fazer uma rota para cadastrar uma tarefa
//suponha que o cliente vai enviar título e descrição por meio da requisição
//dica: use req.body

app.post('/tarefas', async (req, res) => {
    try {
        const {titulo, descricao} = req.body
        const [resultado] = await conexao.query(`INSERT INTO tb_tarefa (titulo, descricao) VALUES (?, ?)`, [titulo, descricao])
        res.status(201).json({
            titulo: titulo,
            descricao: descricao,
            cod_tarefa: resultado.insertId
        })
    } catch (erro) {
        console.log(erro)
        res.status(500).json({
            erro: 'Erro ao inserir titulo e descricao'
        })
    }
})
//fazer a rota para atualizar
app.put('/tarefas/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {titulo, descricao} = req.body
        const [resultado] = await conexao.query("UPDATE tb_tarefa SET titulo = ?, descricao = ? WHERE cod_tarefa = ?", [titulo, descricao, id])
        res.status(201).json({
            titulo: titulo,
            descricao: descricao,
            cod_tarefa: id
        })
    } catch (erro) {
        console.log(erro)
        res.status(500).json({
            erro: 'Erro ao atualizar titulo e descricao'
        })
    }
})
//rota para remover
app.delete('/tarefas/:id', async (req, res) => {
    try {
        const {id} = req.params
        const sql = "DELETE FROM tb_tarefa WHERE cod_tarefa = ?"
        await conexao.query(sql, [id])
        res.json({mensagem: "Tarefa excluída com sucesso!"})
    } catch (erro) {
        console.log(erro)
        res.status(500).json({erro: 'Erro ao excluir tarefa'})
    }
})

//obter a lista de tarefas (select)
app.get('/tarefas', async (req, res) => {   
    try {
        //req: requisição do cliente    
        const [linhas] = await conexao.query('SELECT * FROM tb_tarefa')
        res.json(linhas)
    } catch (error) {
        console.log(erro)
        res.status(500).json({
            erro: 'Erro ao buscar tarefas'
        })
    }
})

//requisição get
app.get('/', (req, res) => {
    res.json({
        mensagem: 'Servidor funcionando'
    })
})

const port = 3000
app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
})