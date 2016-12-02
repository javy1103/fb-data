'use strict'

const Lucid = use('Lucid')

class Group extends Lucid {

    users() {
        return this.hasMany('App/Model/User')
    }

}

module.exports = Group
