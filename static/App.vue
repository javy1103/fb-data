<template>
    <div id="app">
        <app-header :user="user" v-on:logout="logout"></app-header>
        <div class="uk-grid">
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

    methods: {

        logout() {
            auth.logout()
            this.$router.push('login')
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
