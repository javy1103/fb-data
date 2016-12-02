<template>
    <div id="app">
        <app-header ref="header" :user="user" v-on:logout="logout"></app-header>
        <div class="container-fluid app-content">
            <transition name="slide-fade" mode="out-in">
                <router-view v-bind:user="user"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>

var auth = require('./auth')

export default {

    name: 'app',

    components: {
        'app-header': require('./components/Header.vue')
    },

    data() {

        return {
            user: auth.user
        }
    },

    mounted() {

        this.size()
    },

    methods: {

        logout() {
            auth.logout()
            this.$router.push('login')
        },

        size() {
            $('.app-content').outerHeight(
                ( $(this.$el).outerHeight(true) - $(this.$refs.header.$el).outerHeight(true) )
            )
        }
    }



}
</script>

<style scoped lang="less">

.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
    padding-left: 150px;
    opacity: 0;
}

</style>
