const express = require('express');
const path = require('path');
const app = express();
const pool = require('./db');
const port = 3000;


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.get('/teste', async (req, res) => {
    try {
        
        const todosRelatorios = await pool.query(
            "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name"
        );

        res.json(todosRelatorios.rows);
    } catch(error) {
        res.send(error);
    }
});

app.post('/add', async (req, res) => {
    try {

        let exemplo = 'exemplo3';

        let novaTabela = await pool.query(
            'CREATE TABLE $1::text (id SERIAL PRIMARY KEY, nome VARCHAR(255), quantidade SMALLINT)',
            [exemplo]
            );

        for(produto in req.body) {
        
            let novoProduto = await pool.query(
                'INSERT INTO $1 (nome, quantidade) VALUES ($2, $3)',
                [exemplo, produto, Number(req.body[produto])]
            );
        }
        res.json('foi');
    } catch(error) {
        console.error(error);
        res.send(error);
    }
});

app.listen(port, () => {
    console.log(`Servidor ligado na porta: ${port}`);
});