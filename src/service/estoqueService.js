const db = require('../db')

module.exports = {
    //Buscar 1 estque
    buscarEstoque: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM estoque WHERE id = ?', [id], (error, results) => {
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

    
    // Incluir 1 novo estoque
    inserirEstoque: (quantidade) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO estoque (quantidade) VALUES (?)',
                [quantidade], 
                (error, results) => {
                    if(error){
                        rejeitado(error);
                        return;
                    }
                    aceito(results.adicionarEstoque);
            });
        });
    },

    // Alterar um estoque 
    alterar: (id, quantidade) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE estoque SET  quantidade = ? WHERE id = ?',
                [quantidade, id], 
                (error, results) => {
                    if(error){
                        rejeitado(error);
                        return;
                    }
                    aceito(results);
            });
        });
    },

    // Excluir um estoque
    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM estoque WHERE id = ?',[id], (error, results) => {
                    if(error){
                        rejeitado(error);
                        return;
                    }
                    aceito(results);
            });
        });
    }
};