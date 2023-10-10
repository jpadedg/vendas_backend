const produtoVendaService = require('../service/produtoVendaService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let produtosVenda = await produtoVendaService.buscarTodos();

        for(let i in produtosVenda){
            json.result.push({
                id: produtosVenda[i].id,
                idVenda: produtosVenda[i].idVenda,
                idProduto: produtosVenda[i].idProduto,
            })
        }
        res.json(json);
    },
    
    buscarProdutoVenda: async (req, res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        let produtosVenda = await produtoVendaService.buscarProduto(id);

        if(produtosVenda){
            json.result= produtosVenda;
        }
        res.json(json);
    },

    
    adicionarProdutoVenda: async (req, res) => {
        let json = {error:'', result:{}};
        
        let idVenda = req.body.idVenda;
        let idProduto = req.body.idProduto;


        if(idVenda && idProduto) {
            let produtoVendaId = await produtoVendaService.inserirProdutoVenda(idVenda, idProduto);
            json.result = {
                id: produtoVendaId,
                idVenda,
                idProduto
            };
        } else {
            json.error = 'Algum campo está vazio!';
        }
        res.json(json);
    },

    alterar: async (req, res) => {
        let json = {error:'', result:{}};
        
        let id = req.params.id;
        let idVenda = req.body.idVenda;
        let idProduto = req.body.idProduto;

        if(idVenda && idProduto && id) {
            await produtoService.alterar(id, idVenda, idProduto);
            json.result = {
                id,
                idVenda,
                idProduto
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    apagar: async(req, res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        await produtoVendaService.excluir(id);
        res.json(json);
    }
}