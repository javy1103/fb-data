<template>
    <div id="app" class="container-fluid">
        <nav v-if="!user.authenticated" class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Project name</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <router-link tag="li" to="/login">
                            <a>Login</a>
                        </router-link>
                        <router-link tag="li" to="/register">
                            <a>Sign Up</a>
                        </router-link>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

var auth = require('./auth')

export default {

    name: 'app',

    data() {
        return {
            user: null
        }
    },

    created() {
        this.user = auth.user
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

html, body {
    height: 100%;
}

#app {
    color: black;
    height: 100%;
}
</style>
