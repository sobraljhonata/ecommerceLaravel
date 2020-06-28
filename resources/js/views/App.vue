<template>
    <div>
        <h1>Vue Router Demo App</h1>

        <p>
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'hello' }">Hello World</router-link> |
            <router-link :to="{ name: 'authorizedclients' }">authorized Clients</router-link> |
            <router-link :to="{ name: 'clients' }">Clients</router-link> |
            <router-link :to="{ name: 'personalAccessTokens' }">Personal Access Tokens</router-link>
        </p>
        <div class="container">
            <router-view></router-view>
        </div>        
    </div>
</template>
<script>
    export default {}
</script>