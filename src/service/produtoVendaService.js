const db = require('../db')

module.exports = {
    //Buscar todos os produtos
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM produto_venda', (error, results) => {
                if(error){
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },
    
    // Incluir 1 novo cliente
    inserirProdutoVenda: (idVenda, idProduto) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO produto_venda (idVenda, idProduto) VALUES (?,?)',
                [idVenda,idProduto], 
                (error, results) => {
                    if(error){
                        rejeitado(error);
                        return;
                    }
                    aceito(results.adicionarProdutoVenda);
            });
        });
    },

    // Excluir um produto
    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM produto_venda WHERE id = ?',[id], (error, results) => {
                    if(error){
                        rejeitado(error);
                        return;
                    }
                    aceito(results);
            });
        });
    }
};