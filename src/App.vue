<template>
    <div class="container" id="app">
        <component :is="currentComponent"></component>
        <div>
            <h2>Essential Links</h2>
            <ul>
                <li><a v-on:click=" currentComponent = 'Login' ">Login</a></li>
                <li><a v-on:click=" currentComponent = 'Registration' ">Register</a></li>
                <li><a v-on:click="showCurrent">showCurrent</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
var Login = require('./components/Login.vue'),
    Registration = require('./components/Registration.vue'),
    socket = require('socket.io-client')('http://localhost:3333')

export default {

    name: 'app',

    components: {
        Login,
        Registration
    },

    created() {
        socket.on('connect', () => console.log('connected over the socket'));
        socket.on('event', function(data){});
        socket.on('disconnect', function(){});
    },

    data() {
        return {
            currentComponent: 'Login'
        }
    },

    methods: {
        showCurrent() {
            console.log(this.currentComponent)
        }
    }
}
</script>

<style scoped lang="less">
#app {
    color: black;
}
</style>
