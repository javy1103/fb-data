<template lang="html">
    <div class="row profile">
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Family Board</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ user.name }} <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#"></a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li class="dropdown-header">Nav header</li>
                                <li><a href="#">Separated link</a></li>
                                <li><a @click.prevent="logout">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>

        <div class="col-md-8 col-md-offset-2 content">

            <div class="starter-template text-center">
                <h1>Bootstrap starter template</h1>
                <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
            </div>
        </div>
    </div>

</template>

<script>

var socket = require('socket.io-client')('http://localhost:3333'),
    auth = require('../auth')

export default {

    beforeRouteEnter(to, from, next) {

        if (!auth.user.authenticated) {
            next({
                path: '/login'
            })
        }
        next()
    },

    data() {
        return {
            user: {
                name: null,
                email: null,
                id: null,
                username: null
            }
        }
    },

    created() {
        this.fetchUser()
    },

    methods: {

        fetchUser() {
            $.get('profile')
            .done( user => { this.user = user })
            .fail( err => console.log(err) )
        },

        logout() {
            auth.logout()
            this.$router.push('login')
        }
    },

}
</script>

<style lang="less">
.profile {
    .content {
        margin-top: 70px;
    }

    li {
        a {
            cursor: pointer;
        }
    }
}
</style>
