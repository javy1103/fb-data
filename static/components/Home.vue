<template lang="html">
    <div class="row profile">
        <usersList :groupUsers="users"></usersList>
        <div class="col-md-6 chat">
            <div class="col-md-12 chat-history">
                <message :user="user" v-for="message in messages" :message="message"></message>
            </div>
            <div class="col-md-12 chat-input">
                <form>
                    <input class="col-md-11 message-input" v-model="message">
                    <div class="col-md-1">
                        <button class="btn btn-success" @click.prevent="sendMessage">Send</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-md-3">

        </div>
    </div>
</template>

<script>

var io = require('socket.io-client'),
    auth = require('../auth'),
    message = require('./Message.vue'),
    usersList = require('./UsersList.vue')

export default {

    components: {
        message,
        usersList
    },

    props: ['user'],

    data() {
        return {
            messages: [],
            users: [
                { name: 'Eva' },
                { name: 'Volodymyr' },
                { name: 'Julia' },
                { name: 'Javier' },
                { name: 'Kate' },
                { name: 'Ana' },
                { name: 'Jorge' },
                { name: 'Ale' }
            ]
        }
    },

    beforeDestroy() {
        this.socket.disconnect()
    },

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
        .then( () => {
            var userGroup = this.user.userGroup
            this.socket = io.connect('http://localhost:3333', { query: `userGroup=${userGroup}` })
            this.socket.on( `${userGroup}.message`, message => this.messages.push( JSON.parse(message) ) )
        })
        .catch( err => console.log(err) )
    },

    methods: {

        fetchUser() {
            return new Promise( (resolve, reject) => {
                $.get('/api/profile')
                .done( user => {
                    Object.assign(this.user, user)
                    resolve()
                })
                .fail( err => reject(err) )
            })

        },

        sendMessage() {
            var scrollTo = $(this.$el).find('.chat-history').get(0).scrollHeight,
                message = { message: this.message, from: this.user.name, fromId: this.user.id }
                console.log(message);

            this.socket.emit(`${this.user.userGroup}.message`, JSON.stringify(message))
            this.message = ''
            $(this.$el).find('.chat-history').animate({ scrollTop: scrollTo }, 800)
        },
    }

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
    height: 100%;
    .col-md-6 {
        padding-left: 0;
        padding-right: 0;
        border-right: 1px solid #ddd;

        .chat-history {
            height: 95%;
            overflow-y: scroll;
        }

        .chat-input {

            height: 5%;

            .message-input {
                height: 35px;
                line-height: 35px;
            }
        }
    }

    >div[class^="col-"] {
        height: 100%
    }
}
</style>
