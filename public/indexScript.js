const botao_logar = document.getElementById('botao_logar');

botao_logar.addEventListener('click', () => {

    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if(login === 'estoque' && senha === '123') {
        return window.location = 'psiu_estoque.html';
    }
    
    else if(login === 'comprador' && senha === '321') {
        return window.location = 'psiu_comprador.html';
    }
    
    else {
        alert('Login ou senha incorretos');
    }

});
