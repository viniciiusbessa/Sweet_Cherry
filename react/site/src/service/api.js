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

    async inserirProduto(nome, preco, categoria, descricao, avaliacao, imagem) {
        let r = await api.post('/produto', { nome, preco, categoria, descricao, avaliacao, imagem });
        return r.data;
    }

    async listarProdutosOrdenados() {
        let r = await api.get('/produtos');
        return[...r.data];
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

    async login (email, senha) {
        let r = await api.post('/login', { email, senha })
        return r.data;
    }

    async cadastrar (nome, email, senha) {
        let r = await api.post('/cadastro', { nome, email, senha })
        return r.data;
    }

}