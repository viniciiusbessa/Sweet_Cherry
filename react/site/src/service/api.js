import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
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
        let r = await api.get('/produtos?categoria='+categoria);
        return ([...r.data]);
    }


    async listarProdutosOrdenados(ordenacao) {
        let r = await api.get('/produtos?ordenacao='+ordenacao);
        return [...r.data];
    }


        // TESTANDO
           // async listarPaginacao() {
              //  let r = await api.get('/v3/produtos');
            //    return [...r.data.items], r.data;
           // }
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

    async login (email, senha) {
        let r = await api.post('/login', { email, senha })
        return r.data;
    }

    async cadastrar (nome, email, senha) {
        let r = await api.post('/cadastro', { nome, email, senha })
        return r.data;
    }

}