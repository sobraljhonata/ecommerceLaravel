import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/hello',
            name: 'hello',
            component: () => import('./views/Hello'),
        },
        {
            path:'/passport/authorized/clients',
            name:'authorizedclients',
            component: () => import('./components/passport/AuthorizedClients')
        },
        {
            path:'/passport/clients',
            name:'clients',
            component: () => import('./components/passport/Clients')
        },
        {
            path:'/passport/personal-access-tokens',
            name:'personalAccessTokens',
            component: () => import('./components/passport/PersonalAccessTokens')
        }
    ],
});
