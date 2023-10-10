const produtoService = require('../service/produtoService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let produtos = await produtoService.buscarTodos();

        for(let i in produtos){
            json.result.push({
                id: produtos[i].id,
                nome: produtos[i].nome,
                descricao: produtos[i].descricao,
                preco: (produtos[i].preco)/100,
                idEstoque: produtos[i].idestoque
            })
        }
        res.json(json);
    },
    
    buscarProduto: async (req, res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        let produto = await ProdutoService.buscarProduto(id);

        if(produto){
            json.result= produto;
        }
        res.json(json);
    },

    
    adicionarProduto: async (req, res) => {
        let json = {error:'', result:{}};
        
        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let preco = req.body.preco;
        let idEstoque = req.body.idestoque;


        if(nome && descricao && preco && idEstoque) {
            let produtoId = await produtoService.inserirProduto(nome, descricao, preco, idEstoque);
            json.result = {
                id: produtoId,
                nome,
                descricao,
                preco,
                idEstoque
            };
        } else {
            json.error = 'Algum campo está vazio!';
        }
        res.json(json);
    },

    alterar: async (req, res) => {
        let json = {error:'', result:{}};
        
        let id = req.params.id;
        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let preco = req.body.preco;
        let idEstoque = req.body.idestoque;

        if(nome && descricao && preco && idEstoque && id) {
            await produtoService.alterar(id, nome, descricao, preco, idEstoque);
            json.result = {
                id,
                nome,
                descricao,
                preco,
                idEstoque
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    apagar: async(req, res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        await produtoService.excluir(id);
        res.json(json);
    }
}