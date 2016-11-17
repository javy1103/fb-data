'use strict'
const Validator = use('Validator')
const User = use('App/Model/User')

class UserController {

    * index(request, response) {

    }

    * create(request, response) {

    }

    * store(request, response) {
        const userData = request.only('email', 'password', 'username', 'name')
        console.log(userData);
        const validation = yield Validator.validate(userData, User.rules)

        if (validation.fails()) {
            response.json(validation.messages())
            return
        }
        const user = yield User.create(userData)
        const token = yield request.auth.generate(user)
        response.header('Set-Cookie', `access_token=${token}`)
        response.json(user)
    }

    * show(request, response) {
        if ( request.input('username') ) {
            const User = yield User.find(request.input('username'))
            response.json({user: User})
        }

        reponse.json({user: request.authUser})

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
            const user = yield User.query('email', email).first()
            response.header('Set-Cookie', `access_token=${token}`)
            response.json(user)
        } catch (e) {
            response.unauthorized('Invalid login credentials')
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
