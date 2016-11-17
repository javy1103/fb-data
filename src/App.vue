<template>
    <div class="container-fluid" id="app">
        <keep-alive>
            <component :user="model" ref="currentComponent" :is="currentComponent"></component>
        </keep-alive>
    </div>
</template>

<script>
var login = require('./components/Login.vue'),
    registration = require('./components/Registration.vue'),
    profile = require('./components/Profile.vue'),
    model = require('./models/User')

export default {

    name: 'app',

    components: {
        login,
        registration,
        profile
    },

    mounted() {

        this.setToken()
        .then( () => this.getUser() )
        .catch( err => console.log(err) )

        this.$refs.currentComponent.$on( 'userAuthenticated', data => {
            this.setToken()
            .then( () => {
                model.set(data)
                this.currentComponent = 'profile'
            })
        })

    },

    data() {
        return {
            model,
            currentComponent: 'login'
        }
    },

    methods: {

        // TODO: invalidate token, remove from cookies and ajaxSetup

        getUser() {
            return new Promise( (resolve, reject) => {
                $.get('/profile')
                .done( response => {
                    model.set(response)
                    this.currentComponent = 'profile'
                    resolve()
                })
                .fail( err => reject(err) )
            })
        },

        setToken() {
            return new Promise( (resolve, reject) => {
                let token = document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                $.ajaxSetup({
                    headers: { Authorization: `Bearer ${token}` }
                })
                if( !token ) reject()
                resolve()
            })
        },

    }
}
</script>

<style scoped lang="less">
#app {
    color: black;
}
</style>
