<template>
    <nav class="uk-navbar">
        <a href="" class="uk-navbar-brand">Family Board</a>
        <div v-if="!user.authenticated" class="uk-navbar-flip">
            <ul class="uk-navbar-nav">
                <router-link tag="li" class="li-login" to="/login">
                    <a>Login</a>
                </router-link>
                <router-link tag="li" to="/register">
                    <a>Sign Up</a>
                </router-link>
            </ul>
        </div>
        <div v-if="user.authenticated" class="uk-navbar-flip">
            <ul class="uk-navbar-nav">
                <li class="uk-parent" data-uk-dropdown="{mode: 'click'}">
                    <a href="">{{ user.name }} <i class="uk-icon-caret-down"></i></a>
                    <div class="uk-dropdown uk-dropdown-navbar uk-dropdown-top">
                        <ul class="uk-nav uk-nav-navbar">
                            <li><a href="#">Something here</a></li>
                            <li class="uk-nav-header">Header</li>
                            <li><a href="#">Something else here</a></li>
                            <li class="uk-nav-divider"></li>
                            <li><a @click.prevent="logout">Logout</a></li>
                        </ul>
                    </div>

                </li>
            </ul>
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
    nav.uk-navbar {
        border: none;
        padding: 10px 35px 0 35px;
        border-radius: 0px;

        li {

            a {
                border: 2px solid #36ba67;
                border-radius: 25px !important;
                height: 44px;
            }

            &:hover {
                a {
                    background: none;
                    border-color: #ec9d55;
                }
            }

            &.li-login {
                margin-right: 15px;
            }
        }
    }
</style>
