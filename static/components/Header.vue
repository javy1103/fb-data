<template>
    <nav class="navbar">
        <div class="container-fluid">
            <a href="" class="navbar-brand">Family Board</a>
            <div v-if="!user.authenticated" class="collapse navbar-collapse landing">
                <ul class="nav navbar-nav navbar-right">
                    <router-link tag="li" class="li-login" to="/login">
                        <a>Login</a>
                    </router-link>
                    <router-link tag="li" class="li-signup" to="/register">
                        <a>Sign Up</a>
                    </router-link>
                </ul>
            </div>
            <div v-if="user.authenticated" class="collapse navbar-collapse home">
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ user.name }} <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a @click.prevent="logout">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
module.exports = {

    props: ['user'],

    methods: {

        logout() {
            this.$emit('logout')
        }
    }

}
</script>

<style lang="less" scoped>
nav.navbar {
    border: none;
    border-radius: 0px;
    padding: 10px 20px;
    margin-bottom: 0px;

    li {

        a {
            color: #000000;
            padding: 10px 15px;
            border-color: transparent;
            text-transform: uppercase;
            background: none;
            cursor: pointer;
        }

        &.li-signup {
            a {
                border: 2px solid #ec9d55;
                border-radius: 25px !important;
                transition: color 0.8s, background-color 0.6s;
            }
        }

        &:hover {

            &.li-signup {
                a {
                    background: #ec9d55;
                    color: #FFFFFF;
                }
            }
        }

        &.li-login {
            margin-right: 15px;
        }
    }
}
</style>
