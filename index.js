const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.post('/add', (req, res) => {
    console.log(req.body);
    res.send("feito");
});

app.listen(port, () => {
    console.log(`Servidor ligado na porta: ${port}`);
});