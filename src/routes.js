const express = require('express');
const router = express.Router();

const clienteController = require('./controllers/clienteController');
const estoqueController = require('./controllers/estoqueController');
const produtoController = require('./controllers/produtoController');
const produtoVendaController = require('./controllers/produtoVendaController');
const vendaController = require('./controllers/vendaController');

router.get('/clientes', clienteController.buscarTodos);
router.get('/cliente/:id', clienteController.buscarCliente);
router.post('/cliente', clienteController.adicionarCliente);
router.put('/cliente/:id', clienteController.alterar);
router.delete('/cliente/:id', clienteController.apagar);


router.post('/estoque', estoqueController.adicionarEstoque);
router.get('/estoque/:id', estoqueController.buscarEstoque);
router.put('/estoque/:id', estoqueController.alterar);
router.delete('/estoque/:id', estoqueController.apagar);


router.get('/produto/', produtoController.buscarTodos);
router.get('/produto/:id', produtoController.buscarProduto);
router.post('/produto', produtoController.adicionarProduto);
router.put('/produto/:id', produtoController.alterar);
router.delete('/produto/:id', produtoController.apagar);


router.get('/produtoVenda/', produtoVendaController.buscarTodos);
router.post('/produtoVenda', produtoVendaController.adicionarProdutoVenda);
router.delete('/produtoVenda/:id', produtoVendaController.apagar);

router.get('/venda/', vendaController.buscarTodos);
router.post('/venda', vendaController.adicionarVenda);
router.put('/venda/:id', vendaController.alterar);
router.delete('/venda/:id', vendaController.apagar);

module.exports = router;