<template>
    <div id="login" class="uk-width-1-2 uk-container-center">
        <img class="logo-img" src="http://vuejs.org/images/logo.png">
        <h1>{{ msg }}</h1>
        <form class="uk-form uk-grid">

            <div class="uk-container-center">

                <div class="uk-width-1-1 uk-margin-bottom">
                    <input v-model="credentials.email" type="email" class="uk-form-large uk-form-width-large" placeholder="Email address" required="required" autofocus="">
                </div>
                <div class="uk-width-1-1 uk-margin-bottom">
                    <input v-model="credentials.password" type="password" class="uk-form-large uk-form-width-large" placeholder="Password" required="required">
                </div>

                <div v-show="error" class="has-error">
                    <span class="help-block">{{ error }}</span>
                </div>
                <hr class="uk-grid-divider">
                <div class="uk-width-1-1">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me"> Remember me
                        </label>
                    </div>
                </div>
                <div class="uk-width-1-1">
                    <button @click.prevent="submit" class="uk-button uk-button-large uk-button-success" type="submit">Sign in</button>
                </div>
                <span class="help-block">Dont have an account? <router-link to="/register">Register</router-link></span>

            </div>

        </form>
    </div>
</template>

<script>

var auth = require('../auth')

export default {

    name: 'login',

    data () {
        return {
            msg: 'Login to Your Vue.js App',
            error: '',
            credentials: {
                email: null,
                password: null
            }
        }
    },

    methods:{
        submit() {
            this.error = ''
            auth.login(this, this.credentials, '/home')
        }
    }



}
</script>

<style scoped lang="less">

#login {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    .logo-img {
        height: 200px;
    }
}

h1 {
    margin-bottom: 30px
}

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
