'use strict'

const Validator = use('Validator')
const User = use('App/Model/User')
const Group = use('App/Model/Group')

class AuthController {

    * login(request, response) {
        const email = request.input('email')
        const password = request.input('password')
        try {
            const token = yield request.auth.attempt(email, password)
            response.json({token})
        } catch (e) {
            response.status(401).json({message: 'Invalid login credentials'})
        }
    }

    * logout(request, response) {
        response.clearCookie('access_token')
        response.ok()
    }

    * register(request, response) {
        const userData = request.only('email', 'password', 'username', 'name')
        const validation = yield Validator.validate(userData, User.rules)

        if (validation.fails()) {
            response.status(401).json(validation.messages())
        }
        const user = yield User.create(userData)
        const group = yield Group.create({ name: request.input('groupName') })
        yield group.users().save(user)
        const token = yield request.auth.generate(user)
        response.json({token})
    }
}

module.exports = AuthController
