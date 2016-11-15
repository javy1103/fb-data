'use strict'
const Validator = use('Validator')
const User = use('App/Model/User')

class UserController {

    * index(request, response) {

    }

    * create(request, response) {

    }

    * store(request, response) {
        const userData = request.only('email', 'password', 'username', 'password_confirmation')
        const validation = yield Validator.validate(userData, User.rules)

        if (validation.fails()) {
            response.json(validation.messages())
            return
        }
        const user = yield User.create(body)
        response.json(user)
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
            response.json({token})
        } catch (e) {
            response.unauthorized({error: e.message})
        }
    }

    * profile(request, response) {
        console.log(request.cookies());
        yield response.json(request.authUser)
    }

    * logout(request, response) {
        // console.log(Object.keys(request.auth));
        console.log(Object.keys(request.auth.config.config));
        console.log(request.auth.config.config.session);
        yield request.auth.revokeAll(request.authUser)
    }

}

module.exports = UserController
