'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

    group() {
        return this.belongsTo('App/Model/Group')
    }

    static boot() {
        super.boot()
        this.addHook('beforeCreate', 'User.encryptPassword')
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
        return ['id', 'name', 'username', 'email']
    }

}

module.exports = User
