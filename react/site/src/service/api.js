import axios from 'axios'
const api = axios.create({
    baseURL: 'https://scdefinitiveedition.herokuapp.com/'
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
        return r.data;
    }


    async listarProdutosCategoriaPaginacao(categoria, page) {
        let r = await api.get(`/produto/v3?categoria=${categoria}&page=${page}`);
        return r.data;
    }

    async buscarProdutos(produto) {
        let r = await api.get('/produto/busca?search=' + produto);
        return r.data;
    }


    // Cliente

    async listarClientes() {
        let r = await api.get('/cliente')
        return r.data;
    }

    async inserirCliente( endereco, nome_cliente, cpf, dtnascimento, telefone, email, senha ) {
        let r = await api.post('/cliente', { endereco, nome_cliente, cpf, dtnascimento, telefone, email, senha })
        return r.data;
    }

    async removerCliente(id) {
        let r = await api.delete('/cliente' + id)
        return r.data;
    }


    // Cliente Login

    async login (email, senha) {
        let r = await api.post('/cliente/login', { email, senha })
        return r.data;
    }

    async cadastrar (nome, cpf, nascimento, email, senha) {
        let r = await api.post('/cliente/cadastro', { nome, email, cpf, nascimento, senha })
        return r.data;
    }



    // Recupera????o de Senha

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

    // Login ADM

    async loginAdm (email, senha, codigo) {
        let r = await api.post('/adm/login', { email: email, senha: senha, codigo: codigo })
        return r.data;
    }

    ///Area de Pagamento

    async confirmarPagmento ( email, endereco, numero, complemento, telefone, forma_pagamento, numero_do_cartao, parcelas ) {
        let j = await api.post('/cliente/confi_pagamento', {
            email, 
            endereco, 
            numero, 
            complemento,
            telefone, 
            forma_pagamento, 
            numero_do_cartao, 
            parcelas
        })
        return j.data
    } 

    //favoritos
    
    async mostrarFavoritos (cliente){
        let v = await api.get(`/favorito/?cliente=${cliente}`);
        return v.data;
    }

    async colocarFavoritos(cliente, produto) {
        let v = await api.post('/favorito', {
            cliente,
            produto
        });
        return v.data;
    }

    async deletarFavorito(id) {
        let v = await api.delete('/favorito/' + id)
        return v.data;
    }
}
