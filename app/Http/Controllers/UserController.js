'use strict'

const User = use('App/Model/User')

class UserController {

    * index(request, response) {

    }

    * show(request, response) {
        if ( request.input('username') ) {
            const user = yield User.find(request.input('username'))
            response.json(user)
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

    * profile(request, response) {
        yield response.json(request.authUser)
    }



}

module.exports = UserController
