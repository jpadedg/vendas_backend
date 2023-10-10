const estoqueService = require('../service/estoqueService')

module.exports = {
    buscarEstoque: async (req, res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        let umEstoque = await estoqueService.buscarEstoque(id);

        if(umEstoque){
            json.result= umEstoque;
        }
        res.json(json);
    },

    adicionarEstoque: async (req, res) => {
        let json = {error:'', result:{}};
        
        let quantidade = req.body.quantidade;

        if(quantidade) {
            let estoqueId = await estoqueService.inserirEstoque(quantidade);
            json.result = {
                id: estoqueId,
                quantidade
            };
        } else {
            quantidade = 0;
            let estoqueId = await estoqueService.inserirEstoque(quantidade);
            json.result = {
                id: estoqueId,
                quantidade
            };
        }
        res.json(json);
    },

    
    alterar: async (req, res) => {
        let json = {error:'', result:{}};
        
        let id = req.params.id;
        let quantidade = req.body.quantidade;

        if(quantidade && id) {
            await estoqueService.alterar(id, quantidade);
            json.result = {
                id,
                quantidade
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    apagar: async(req, res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        await estoqueService.excluir(id);

        res.json(json);
    }
}