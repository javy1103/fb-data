<template>
    <div id="registration">
        <img src="http://vuejs.org/images/logo.png">
        <h1>{{ msg }}</h1>
        <form class="form-signin col-md-4 col-md-offset-4" autocomplete="nope">
            <div class="form-group">
                <label for="email" class="sr-only">Email address</label>
                <input v-model="credentials.email" type="email" id="email" class="form-control" placeholder="Email address" required="" autofocus="">
            </div>
            <div class="form-group">
                <label for="username" class="sr-only">Username</label>
                <input v-model="credentials.username" type="text" id="username" class="form-control" placeholder="Username" required="">
            </div>
            <div class="form-group">
                <label for="name" class="sr-only">Name</label>
                <input v-model="credentials.name" type="text" id="name" class="form-control" placeholder="Name" required="">
            </div>
            <div class="form-group">
                <label for="password" class="sr-only">Password</label>
                <input v-model="credentials.password" type="password" id="password" class="form-control" placeholder="Password" required="">
            </div>
            <div v-show="error" class="has-error">
                <span class="help-block">{{ error }}</span>
            </div>
            <hr>
            <div class="form-group">
                <button @click.prevent="submit" class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </div>

        </form>
    </div>
</template>

<script>
var auth = require('../auth')

export default {

    name: 'registration',

    data () {
        return {
            msg: 'Register to Your Vue.js App',
            credentials: {
                name: null,
                email: null,
                username: null,
                password: null
            },
            error: ''
        }
    },

    methods: {

        submit() {
            auth.signup(this, this.credentials, 'profile')
        }
    }
}
</script>

<style scoped>
#registration {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
