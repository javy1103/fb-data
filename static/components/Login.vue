<template>
    <div id="login" class="row">
        <img class="logo-img" src="http://vuejs.org/images/logo.png">
        <h1>{{ msg }}</h1>
        <form class="col-md-2 col-md-offset-5">
            <div class="form-group">
                <input v-model="credentials.email" type="email" class="form-control" placeholder="Email address" required="required" autofocus="">
            </div>
            <div class="form-group">
                <input v-model="credentials.password" type="password" class="form-control" placeholder="Password" required="required">
            </div>

            <div v-show="error" class="has-error">
                <span class="help-block">{{ error }}</span>
            </div>
            <hr>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-6">
                        <button @click.prevent="submit" class="btn btn-success btn-block" type="submit">Sign in</button>
                    </div>
                    <div class="col-md-6">
                        <div class="checkbox">
                            <label>
                                <a class="pull-right">Forgot password?</a>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <span class="help-block">Dont have an account? <router-link to="/register">Register</router-link></span>
            </div>
        </form>
    </div>
</template>

<script>

var auth = require('../auth')

export default {

    name: 'login',

    beforeRouteEnter(to, from, next) {

        if (auth.user.authenticated) {
            next({
                path: '/home'
            })
            return
        }
        next()
    },

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
