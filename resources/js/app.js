import Vue from 'vue'
import axios from 'axios'
import router from './routes'
import App from './views/App'

Vue.prototype.$axios = axios

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
