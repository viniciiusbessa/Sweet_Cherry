import axios from 'axios'
const api = axios.create({
<<<<<<< HEAD
    baseURL: 'http://localhost:3030/'
=======
    baseURL: 'http://localhost:3030'
>>>>>>> 8226aea738f1d4d0787a221dd8fcbe60d0465dbdP
})

export default class Api {
    // Produtos
    
    async listarProduto() {
        let r = await api.get(`/produto`);
        return r.data;
    }

    async inserirProduto(nome, preco, categoria, avaliacao, descricao, estoque, imagem) {
        let r = await api.post('/produto', { nome, preco, categoria, avaliacao, descricao, estoque, imagem });
        return r.data;
    }

    async alterarProduto(id, nome, preco, categoria, avaliacao, descricao, estoque, imagem) {
        let r = await api.put('/produto/' + id, { nome, preco, categoria, avaliacao, descricao, estoque, imagem });
        return r.data;
    }

    async removerProduto(id) {
        let r = await api.delete('/produto/' + id);
        return r.data;
    }


    async listarProdutosCategoria(categoria) {
        let r = await api.get('/produto/cate?categoria=' + categoria);
        return [...r.data];
    }

    async buscarProdutos(produto) {
        let r = await api.get('/produto/busca?search=' + produto);
        return [...r.data];
    }

        // TESTANDO
        //    async listarPaginacao(paginacao) {
        //        let r = await api.get('/produto/v3?categoria=&page=' + paginacao);
        //        return [...r.data.items], [r.data.totalPaginas];
        //    }
        // TESTANDO


    // Cliente

    async listarClientes() {
        let r = await api.get('/cliente')
        return r.data;
    }

    async inserirCliente( endereco, nome_cliente, cpf, dtnascimento, telefone, email, senha ) {
        let r = await api.post('/cliente', { endereco, nome_cliente, cpf, dtnascimento, telefone, email, senha })
        return r.data;
    }

    // Cliente Login

    async login (email, senha) {
        let r = await api.post('/cliente/login', { email, senha })
        return r.data;
    }

    async cadastrar (nome, email, senha) {
        let r = await api.post('/cliente/cadastro', { nome, email, senha })
        return r.data;
    }



    // Recuperação de Senha

    async esqueciASenha (email) {
        let r = await api.post('/recuperarsenha/esqueciasenha', { email: email })
        return r.data;
    }

    async validarCodigo (email, codigo) {
        let r = await api.post('/recuperarsenha/validarcodigo', { 
            email: email, 
            codigo: codigo })
        return r.data;
    }

    async resetarSenha (email, codigo, novaSenha) {
        let r = await api.put('/recuperarsenha/resetsenha', { 
            email: email, 
            codigo: codigo, 
            novaSenha: novaSenha })
        return r.data;
    }

<<<<<<< HEAD
    async credenciais (email, cpf, telefone, endereco, numero, complemento, destinatario, nrcartao, nmcliente, codeseguranca, cpftit) {
        let r = await api.post('/conf-pagamento', { email, cpf, telefone, endereco, numero, complemento, destinatario, nrcartao, nmcliente, codeseguranca, cpftit })
=======


    // Login ADM

    async loginAdm (email, senha, codigo) {
        let r = await api.post('/adm/login', { email: email, senha: senha, codigo: codigo })
>>>>>>> 8226aea738f1d4d0787a221dd8fcbe60d0465dbd
        return r.data;
    }

}