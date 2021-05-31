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

    //relatorios[relatorio];
    for(let relatorio in relatorios) {
        let body = document.getElementsByTagName('body');
        let divRelatorio = document.createElement('div');
        let tituloRelatorio = document.createElement('h2');
        tituloRelatorio.textContent = relatorio;
        divRelatorio.appendChild(tituloRelatorio);
        body[0].appendChild(divRelatorio);
    }
    
    console.log('end');
});
