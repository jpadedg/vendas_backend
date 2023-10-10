const clienteService = require('../service/clienteService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let clientes = await clienteService.buscarTodos();

        for(let i in clientes){
            json.result.push({
                nome: clientes[i].nome,
                email: clientes[i].email
            })
        }
        res.json(json);
    },

    buscarCliente: async (req, res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        let cliente = await clienteService.buscarCliente(id);

        if(cliente){
            json.result= cliente;
        }
        res.json(json);
    },

    adicionarCliente: async (req, res) => {
        let json = {error:'', result:{}};
        
        let nome = req.body.nome;
        let email = req.body.email;

        if(nome && email) {
            let clienteId = await clienteService.inserirCliente(nome, email);
            json.result = {
                id: clienteId,
                nome,
                email
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async (req, res) => {
        let json = {error:'', result:{}};
        
        let id = req.params.id;
        let nome = req.body.nome;
        let email = req.body.email;

        if(nome && email && id) {
            await clienteService.alterar(id, nome, email);
            json.result = {
                id,
                nome,
                email
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    apagar: async(req, res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        await ClienteService.excluir(id);

        res.json(json);
    }
}