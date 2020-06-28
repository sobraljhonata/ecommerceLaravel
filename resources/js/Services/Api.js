import axios from 'axios'
import cfg from '@/config'

/**
 * Axios configuração
 * */
const BASE_URL_ENVIRONMENT = ''
const ACCESS_TOKEN_ENVIRONMENT = ''
const config = {
    baseURL: BASE_URL_ENVIRONMENT,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Basic ${ACCESS_TOKEN_ENVIRONMENT}`
    },
    validateStatus: (status) => {
        console.log('Status -->', status)
        return true
    }
}

/**
 * Criando uma instância do axios
 **/
const httpClient = axios.create(config)

httpClient.interceptors.request.use((config) => {
    // Faça algo antes que a solicitação seja enviada
    return config
}, (error) => {
    // Faça algo com erro de solicitação
    return Promise.reject(error)
})

httpClient.interceptors.response.use((response) => {
    // Qualquer código de status que esteja dentro do intervalo de 2xx faz com que essa função seja acionada
    // Faça algo com os dados de resposta
    return response
}, (error) => {
    // Quaisquer códigos de status que estejam fora do intervalo de 2xx fazem com que essa função seja acionada
    // Faça algo com erro de resposta
    return Promise.reject(error)
})

export {httpClient}
