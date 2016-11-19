'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.group('users', function() {
    Route.resources('users', 'UserController').except('create', 'store', 'edit')
    Route.get('profile', 'UserController.profile')
}).middleware('auth').prefix('/api')

Route.group('auth', function() {
    Route.post('login', 'AuthController.login')
    Route.post('register', 'AuthController.register')
    Route.delete('logout', 'AuthController.logout')
}).prefix('/api')

Route.any('*', function * (request, response) {
  yield response.sendView('welcome')
})
