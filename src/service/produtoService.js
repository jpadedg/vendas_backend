const db = require('../db')

module.exports = {
    //Buscar todos os produtos
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM produto', (error, results) => {
                if(error){
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    
    //Buscar 1 produto
    buscarProduto: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM produto WHERE id = ?', [id], (error, results) => {
                if(error){
                    rejeitado(error);
                    return;
                }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },
    
    // Incluir 1 novo produto
    inserirProduto: (nome, descricao, preco, idEstoque) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO produto (nome, descricao, preco, idEstoque) VALUES (?,?,?,?)',
                [nome, descricao,preco,idEstoque], 
                (error, results) => {
                    if(error){
                        rejeitado(error);
                        return;
                    }
                    aceito(results.adicionarProduto);
            });
        });
    },

    
    // Alterar um produto 
    alterar: (id, nome, descricao, preco, idEstoque) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE produto SET nome = ?, descricao = ?, preco = ?, idEstoque = ? WHERE id = ?',
                [nome, descricao,preco, idEstoque, id], 
                (error, results) => {
                    if(error){
                        rejeitado(error);
                        return;
                    }
                    aceito(results);
            });
        });
    },

    // Excluir um produto
    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM produto WHERE id = ?',[id], (error, results) => {
                    if(error){
                        rejeitado(error);
                        return;
                    }
                    aceito(results);
            });
        });
    }
};