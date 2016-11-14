<template>
    <div class="container" id="app">
        <component :is="currentComponent"></component>
        <div>
            <h2>Essential Links</h2>
            <ul>
                <li><a v-on:click=" currentComponent = 'Login' ">Login</a></li>
                <li><a v-on:click=" currentComponent = 'Registration' ">Register</a></li>
                <li><a v-on:click="showCurrent">showCurrent</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Login from './components/Login.vue'
import Registration from './components/Registration.vue'

export default {

    name: 'app',

    components: {
        Login,
        Registration
    },

    data() {
        return {
            currentComponent: 'Login'
        }
    },

    methods: {
        showCurrent() {
            console.log(this.currentComponent)
        }
    }
}
</script>

<style scoped lang="less">
    #app {
        color: black;
    }
</style>
