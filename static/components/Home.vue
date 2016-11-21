<template lang="html">
    <div class="row profile">
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

    props: ['user'],

    beforeRouteEnter(to, from, next) {

        if (!auth.user.authenticated) {
            next({
                path: '/login'
            })
            return
        }
        next()
    },

    created() {
        this.fetchUser()
    },

    methods: {

        fetchUser() {
            $.get('/api/profile')
            .done( user => {
                Object.assign(this.user, user)
            })
            .fail( err => console.log(err) )
        }

    },

}
</script>

<style lang="less">

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}

.fade-enter, .fade-leave-active {
    opacity: 0
}

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
