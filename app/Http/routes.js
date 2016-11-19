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
// Route.any('*', function * (request, response) {
//   yield response.sendView('welcome')
// })

Route.group('authenticated', function() {
    Route.resources('users', 'UserController').except('create', 'store')
    Route.get('profile', 'UserController.profile')
}).middleware('auth')

Route.post('login', 'AuthController.login')
Route.post('register', 'AuthController.register')
Route.post('auth', 'AuthController.check')
Route.delete('logout', 'AuthController.logout')
