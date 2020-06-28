import {httpClient} from './Api'
import {httClientPassport, httpClientPassport} from './ApiPassport'
import UrlsApi from './UrlsApi'

export default {
    async getTokens() {
        return await httpClientPassport.get('/oauth/tokens')
    },
    async deleteToken(idToken) {
        return await httpClientPassport.delete(`/oauth/tokens/${idToken}`)
    },
    async getClients() {
        return await httpClientPassport.get('/oauth/clients')
    },
    async deleteClient(idClient) {
        return await httpClientPassport.delete(`/oauth/clients/${idClient}`)
    },
    async novoCliente(params) {
        return await httpClientPassport.post('/oauth/clients', params)
    },
    async atualizarCliente(params, idClient) {
        return await httpClientPassport.put(`/oauth/clients/${idClient}`, params)
    },
    async getPersonalAccessTokens() {
        return await httpClientPassport.get('/oauth/personal-access-tokens')
    },
    async getScopes() {
        return await httpClientPassport.get('/oauth/scopes')
    },
    async novoPersonalAccessToken(params) {
        return await httpClientPassport.post('/oauth/personal-access-tokens', params)
    },
    async deletePersonalAccessToken(idToken) {
        return await httpClientPassport.delete(`/oauth/personal-access-tokens/${idToken}`)
    }
}