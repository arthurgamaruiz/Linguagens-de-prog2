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
        host: 'mysql-138a597e-arthurgamaruiz-b336.e.aivencloud.com', 
        user: 'avnadmin',
        password: 'AVNS_UXacZ5GSS_TI_PcsBvF',
        database: 'defaultdb',
        port: '10208',
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
//fazer a rota para atualizar e a rota para remover
app.put('/tarefas', async (req, res) => {
    try {
        const {titulo, descricao, id} = req.body
        // console.log(req.body.id)
        const [resultado] = await conexao.query("UPDATE tb_tarefa SET titulo = ?, descricao = ? WHERE cod_tarefa = ?", [titulo, descricao, id])
        res.status(201).json({
            titulo: titulo,
            descricao: descricao,
            cod_tarefa: req.body.id
        })
    } catch (erro) {
        console.log(erro)
        res.status(500).json({
            erro: 'Erro ao atualziar titulo e descricao'
        })
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