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
            password: 'required',
        }
    }

    static get visible () {
        return ['username', 'email']
    }

}

module.exports = User
