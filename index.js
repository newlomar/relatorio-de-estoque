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
            "SELECT * from produtos_teste;"
        );

        res.json(todosRelatorios.rows);
    } catch(error) {
        res.send(error);
    }
});

app.post('/add', async (req, res) => {
    try {

        const data = new Date();

        for(produto in req.body) {
        
            let novoProduto = await pool.query(
                'INSERT INTO produtos_teste (nome, quantidade, dataRelatorio) VALUES ($1, $2, $3)',
                [produto, Number(req.body[produto]), data.toLocaleString()]
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