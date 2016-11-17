'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

    static boot() {
        super.boot()
        this.addHook('beforeCreate', 'User.encryptPassword')
    }

    static get primaryKey () {
        return 'username'
    }

    static get rules () {
        return {
            username: 'required|unique:users',
            email: 'required|email|unique:users',
            password: 'required',
            name: 'required|min:2'
        }
    }

    static get visible () {
        return ['name', 'username', 'email']
    }

}

module.exports = User
