# relatorio-de-estoque
Aplicação criada para gerar e visualizar relatórios diários de estoque de uma rede de lanches.

# Objetivo
O objetivo dessa aplicação é ter 2 tipos de acesso, 1 para o responsável por gerar o relatório de Estoque e outro para o responsável por visualizar esse relatório e fazer a compra dos produtos.

# OBS: A interface está sendo desenvolvida de modo "Mobile first" uma vez que a aplicação será usada apenas no celular

# Sobre a Stack

Frontend: HTML / CSS / Javascript

Backend: Node(Express)

Banco de dados: PostgreSQL

Essa aplicação utiliza das tecnologias mais puras que eu pude encontrar para fazê-la. Para o frontend, será HTML, CSS e Javascript e node para o backend, com express. 

O maior objetivo dessa aplicação é o aprendizado dos conceitos mais básicos do desenvolvimento web, mas ela será utilizada no dia a dia de uma lanchonete.

# Como utilizar e testar essa aplicação:

Para utilizar ou testar a aplicação você precisa ter o node.js instalado. A versão utilizada é a: v14.16.1 

No diretório principal, onde está o arquivo index.js e o arquivo package.json utilize o comando: "npm init" para instalar as dependências.

Após isso, no mesmo diretório, inicie o servidor com o comando "node index.js". É possível utilizar também o comando "npm start". Este está configura para usar uma biblioteca chamada "nodemon" que observa mudança no arquivo do servidor e atualiza sempre que salvarmos uma modificação.

Em seguida, acesse o seu localhost na porta 3000 e escolha dentre as 2 formas de visualização: Estoque ou Compras.

Para estoque, utilize a credencial: login: estoque, senha: 123 
    
Para compras, utilize a credencial: login: comprador, senha: 321