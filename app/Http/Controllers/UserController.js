'use strict'
const Validator = use('Validator')
const User = use('App/Model/User')

class UserController {

    * index(request, response) {

    }

    * create(request, response) {

    }

    * store(request, response) {
        const userData = request.only('email', 'password', 'username')
        const validation = yield Validator.validate(userData, User.rules)

        if (validation.fails()) {
            response.json(validation.messages())
            return
        }
        const user = yield User.create(userData)
        const token = yield request.auth.generate(user)
        response.json({user, token})
    }

    * show(request, response) {
        //
    }

    * edit(request, response) {
        //
    }

    * update(request, response) {
        //
    }

    * destroy(request, response) {
        //
    }

    * login(request, response) {
        const email = request.input('email')
        const password = request.input('password')
        try {
            const token = yield request.auth.attempt(email, password)
            response.header('Set-Cookie', `access_token=${token}`)
            response.json({token})
        } catch (e) {
            response.unauthorized({error: e.message})
        }
    }

    * profile(request, response) {
        yield response.json(request.authUser)
    }

    * logout(request, response) {
        response.clearCookie('fb_token', '')
        yield response.ok()
    }

}

module.exports = UserController
