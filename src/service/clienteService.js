const db = require('../db')

module.exports = {
    //Buscar todos os clientes
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM cliente', (error, results) => {
                if(error){
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

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

    // Incluir 1 novo cliente
    inserirCliente: (nome, email) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO cliente (nome, email) VALUES (?,?)',
                [nome, email], 
                (error, results) => {
                    if(error){
                        rejeitado(error);
                        return;
                    }
                    aceito(results.adicionarCliente);
            });
        });
    },

    // Alterar um cliente 
    alterar: (id, nome, email) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE cliente SET nome = ?, email = ? WHERE id = ?',
                [nome, email, id], 
                (error, results) => {
                    if(error){
                        rejeitado(error);
                        return;
                    }
                    aceito(results);
            });
        });
    },

    // Excluir um cliente
    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM cliente WHERE id = ?',[id], (error, results) => {
                    if(error){
                        rejeitado(error);
                        return;
                    }
                    aceito(results);
            });
        });
    }
};