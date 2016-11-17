<template>
    <div id="login" class="row">
        <img class="logo-img" src="http://vuejs.org/images/logo.png">
        <h1>{{ msg }}</h1>
        <form class="form-signin col-md-4 col-md-offset-4">
            <div class="form-group">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
            </div>
            <div class="form-group">
                <label for="inputPassword" class="sr-only">Password</label>
                <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
            </div>
            <div v-show="errorMessage" class="has-error">
                <span class="help-block">{{ errorMessage }}</span>
            </div>
            <hr>
            <div class="form-group">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div>
            </div>
            <div class="form-group">
                <button @click.prevent="login" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </div>

        </form>
    </div>
</template>

<script>
export default {

    name: 'login',

    data () {
        return {
            msg: 'Login to Your Vue.js App',
            errorMessage: ''
        }
    },

    methods:{

        login() {
            this.$delete('errorMessage')
            $.ajax({
                url: 'login',
                dataType: 'json',
                method: 'post',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            .done( data => { this.$emit('userAuthenticated', data) })
            .fail( err => { this.errorMessage = err.responseText })
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
