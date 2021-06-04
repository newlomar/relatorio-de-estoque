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
        let prod = document.createElement('span');
        let quant = document.createElement('span');
        let legenda = document.createElement('div');

        for(let item of relatorios[relatorio]) {
            let li = document.createElement('li');
            let label = document.createElement('label');
            let input = document.createElement('input');
            let span_prod = document.createElement('span');
            let span_quant = document.createElement('span');
            
            input.setAttribute('type', 'checkbox');
            input.required = true;
            span_prod.textContent = `${item.nome}`;
            span_quant.textContent = `${item.quantidade}`;
            span_prod.className = `li_span_prod`;
            span_quant.className = `li_span_quant`;

            label.appendChild(span_prod);
            label.appendChild(span_quant);
            label.appendChild(input);
            li.appendChild(label);
            ul.appendChild(li);
        }

        

        prod.textContent = 'Produto';
        prod.className = 'prod';
        quant.textContent = 'QTD';
        quant.className = 'quant';
        tituloRelatorio.textContent = new Date(dataUsuario).toLocaleString();
        legenda.className = 'legenda';

        legenda.appendChild(prod);
        legenda.appendChild(quant);
        divRelatorio.appendChild(tituloRelatorio);
        divRelatorio.appendChild(legenda);
        divRelatorio.appendChild(ul);
        divRelatorios.appendChild(divRelatorio);
    }
    console.log('end');
});
