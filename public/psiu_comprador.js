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
        let tabela = document.createElement('div');

        for(let item of relatorios[relatorio]) {
            let li = document.createElement('li');
            let label = document.createElement('label');
            let input = document.createElement('input');
            let span_prod = document.createElement('span');
            let span_quant = document.createElement('span');
            let span_input = document.createElement('span');

            input.setAttribute('type', 'checkbox');
            input.required = true;
    
            span_prod.textContent = `${item.nome}`;
            span_quant.textContent = `${item.quantidade}`;
            span_prod.className = `li_span_prod`;
            span_quant.className = `li_span_quant`;
            span_input.className = 'li_span_input';
            span_input.appendChild(input);

            label.appendChild(span_prod);
            label.appendChild(span_quant);
            label.appendChild(span_input);
            li.appendChild(label);
            ul.appendChild(li);
        }
        

        prod.textContent = 'Produto';
        prod.className = 'prod';
        quant.textContent = 'QTD';
        quant.className = 'quant';
        legenda.className = 'legenda';
        tituloRelatorio.textContent = new Date(dataUsuario).toLocaleString();
        tabela.className = 'tabela';
        divRelatorio.className = 'divRelatorio';

        legenda.appendChild(prod);
        legenda.appendChild(quant);
        tabela.appendChild(legenda);
        tabela.appendChild(ul);
        divRelatorio.appendChild(tituloRelatorio);
        divRelatorio.appendChild(tabela);
        divRelatorios.appendChild(divRelatorio);
    }
    console.log('end');
});
