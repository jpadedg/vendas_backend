const vendaService = require('../service/vendaService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let vendas = await vendaService.buscarTodos();

        for(let i in vendas){
            json.result.push({
                id: vendas[i].id,
                valor: vendas[i].valor,
                data: vendas[i].data,
                pagamento: vendas[i].pagamento,
                status: vendas[i].status,
                idCliente: vendas[i].idcliente,
            })
        }
        res.json(json);
    },
    
    buscarVenda: async (req, res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        let venda = await vendaService.buscarVenda(id);

        if(venda){
            json.result= venda;
        }
        res.json(json);
    },

    
    adicionarVenda: async (req, res) => {
        let json = {error:'', result:{}};
        
        let valor = req.body.valor;
        let data = req.body.data;
        let pagamento = req.body.pagamento;
        let status = req.body.status;
        let idCliente = req.body.idCliente;


        if(valor && pagamento && status && idCliente) {
            let vendaId = await vendaService.inserirVenda(valor, data, pagamento, status, idCliente);
            json.result = {
                id: vendaId,
                valor,
                data,
                pagamento,
                status,
                idCliente
            };
        } else {
            json.error = 'Algum campo está vazio!';
        }
        res.json(json);
    },

    alterar: async (req, res) => {
        let json = {error:'', result:{}};
        
        let id = req.params.id;
        let valor = req.body.valor;
        let data = req.body.data;
        let pagamento = req.body.pagamento;
        let status = req.body.status;
        let idCliente = req.body.idCliente;

        if(valor && data && id && pagamento && status && idCliente) {
            await vendaService.alterar(id, valor, data, pagamento, status, idCliente);
            json.result = {
                id,
                valor,
                data,
                pagamento,
                status,
                idCliente
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    apagar: async(req, res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        await vendaService.excluir(id);
        res.json(json);
    }
}