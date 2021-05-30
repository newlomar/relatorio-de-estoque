const datasSetadas = [];
const fetchProdutos = fetch('http://localhost:3000/teste')
.then(response => {
    return response.json();
})
.then(produtos => {
    const datasRelatorios = [];
    const relatorios = {};
    for(let produto of produtos) {
        datasRelatorios.push(produto.datarelatorio);
    }
    let setDatas = new Set(datasRelatorios);
    for(let data of setDatas) {
        datasSetadas.push(data);
        relatorios[data] = [];
    }
    for(let produto of produtos) {
        for(data in relatorios) {
            if(produto.datarelatorio === data) {
                relatorios[data].push(produto);
            }
        }
    }
    console.log(relatorios);
});
