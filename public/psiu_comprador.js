const fetchProdutos = fetch('http://localhost:3000/teste')
                      .then(response => {
                          return response.json();
                      })
                      .then(produtos => {
                          console.log(produtos);
                      })