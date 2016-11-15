'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

    static boot() {
        super.boot()
        this.addHook('beforeCreate', 'User.encryptPassword')
    }

    static get rules () {
        return {
            username: 'required|unique:users',
            email: 'required|email|unique:users',
            password: 'required|confirmed',
        }
    }

    // static get visible () {
    //     return ['username', 'email']
    // }

    apiTokens () {
        return this.hasMany('App/Model/Token')
    }

}

module.exports = User
