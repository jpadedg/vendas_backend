const db = require('../db')

module.exports = {
    //Buscar todos os produtos
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM venda', (error, results) => {
                if(error){
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    /*
    //Buscar 1 cliente
    buscarCliente: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM cliente WHERE id = ?', [id], (error, results) => {
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
    */
    // Incluir 1 nova venda
    inserirVenda: (valor, data ,pagamento, status, idCliente) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO venda (valor, data, pagamento, status, idCliente) VALUES (?,?,?,?,?)',
                [valor, data ,pagamento, status, idCliente], 
                (error, results) => {
                    if(error){
                        rejeitado(error);
                        return;
                    }
                    aceito(results.adicionarVenda);
            });
        });
    },

    
    // Alterar uma venda 
    alterar: (id, valor, data ,pagamento, status, idCliente) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE venda SET valor = ?, data = ?, pagamento = ?, status = ? , idCliente = ?  WHERE id = ?',
                [valor, data ,pagamento, status, idCliente, id], 
                (error, results) => {
                    if(error){
                        rejeitado(error);
                        return;
                    }
                    aceito(results);
            });
        });
    },

    // Excluir uma venda
    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM venda WHERE id = ?',[id], (error, results) => {
                    if(error){
                        rejeitado(error);
                        return;
                    }
                    aceito(results);
            });
        });
    }
};