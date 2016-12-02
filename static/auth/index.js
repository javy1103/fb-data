// URL and endpoint constants
const LOGIN_URL = 'api/login'
const SIGNUP_URL = 'api/register'

module.exports = {

    user: {
        authenticated: false,
        name: null,
        username: null,
        email: null,
        id: null,
        userGroup: null
    },

    login(context, creds, redirect) {

        $.ajax({
            url: LOGIN_URL,
            method: 'POST',
            data: creds,
            dataType: 'json'
        })
        .done( data => {
            this.onUserAuthenticated( context, data, redirect )
        })
        .fail( err => {
            context.error = err.responseJSON.message
        })
    },

    signup(context, creds, redirect) {

        $.ajax({
            url: SIGNUP_URL,
            method: 'POST',
            data: creds,
            dataType: 'json'
        })
        .done( data => {
            this.onUserAuthenticated( context, data, redirect )
        })
        .fail( err => {
            context.error = err.responseJSON[0].message
        })
    },


    logout() {
        localStorage.removeItem('id_token')
        this.user.authenticated = false
    },

    checkAuth() {
        var jwt = localStorage.getItem('id_token')
        if(jwt) {
            this.user.authenticated = true
        }
        else {
            this.user.authenticated = false
        }
    },

    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('id_token')
        }
    },

    setAuthHeader() {
        return new Promise( (resolve, reject) => {
            $.ajaxSetup({ headers: this.getAuthHeader() })
            resolve()
        })
    },

    onUserAuthenticated( context, data, redirect ) {
        localStorage.setItem('id_token', data.token)
        this.user.authenticated = true
        this.setAuthHeader()
        .then( () => {
            if(redirect) {
                context.$router.push(redirect)
            }
        })
        .catch( err => console.log(err) )
    }
}
