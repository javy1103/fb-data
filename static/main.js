// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
var Vue = require('vue'),
    VueRouter = require('vue-router'),
    App = require('./App.vue'),
    Login = require('./components/Login.vue'),
    Register = require('./components/Registration.vue'),
    Home = require('./components/Home.vue'),
    auth = require('./auth')

window.jQuery = window.$ = require('jquery')

require('uikit')

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/home', component: Home }
]

const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})

auth.setAuthHeader()
.then( () => {
    auth.checkAuth()
    router.push('home')
})
