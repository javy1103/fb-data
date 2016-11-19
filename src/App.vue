<template>
    <div id="app">
        <nav class="navbar navbar-default navbar-fixed-top">
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

        <router-view></router-view>
    </div>
</template>

<script>

export default {

    name: 'app',

}
</script>

<style scoped lang="less">

html, body {
    height: 100%;
}

#app {
    color: black;
    height: 100%;
}
</style>
