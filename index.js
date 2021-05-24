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

app.post('/add', async (req, res) => {
    let mudar1;
    let mudar2;
    try {
        const novoProduto = await pool.query(`INSERT INTO produtos_base (nome, quantidade) VALUES (${mudar1} ${mudar2})`);
    } catch(error) {
        console.error(error);
    }
});

app.listen(port, () => {
    console.log(`Servidor ligado na porta: ${port}`);
});