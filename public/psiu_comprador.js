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
        let divRelatorios = document.getElementById('divRelatorios');
        let divRelatorio = document.createElement('div');
        let tituloRelatorio = document.createElement('h2');
        let dataUTC = new Date(relatorio);
        let dataUsuario = new Date(dataUTC.valueOf() - dataUTC.getTimezoneOffset() * 60000);
        let ul = document.createElement('ul');

        for(let item of relatorios[relatorio]) {
            let li = document.createElement('li');
            let label = document.createElement('label');
            let input = document.createElement('input');
            
            input.setAttribute('type', 'checkbox');
            input.required = true;
            label.textContent = `${item.nome} - ${item.quantidade}`;
            label.appendChild(input);
            li.appendChild(label);
            ul.appendChild(li);
        }
        
        tituloRelatorio.textContent = new Date(dataUsuario).toLocaleString();
        divRelatorio.appendChild(tituloRelatorio);
        divRelatorio.appendChild(ul);
        divRelatorios.appendChild(divRelatorio);
    }
    console.log('end');
});
