import axios from 'axios'
const api = axios.create({
    baseURL: 'https://sweetcherryifd.netlify.app/'
})

export default class Api {
    async listarProduto() {
        let r = await api.get('produto');
        return r.data;
    }

    async inserirProduto(nome, preco, categoria, descricao, avaliacao, imagem) {
        let r = await api.post('produto', { nome, preco, categoria, descricao, avaliacao, imagem });
        return r.data;
    }
}