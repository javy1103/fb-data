module.exports = new ( require('backbone').Model.extend( {
    initialize() {
        this.fetch({ url: 'profile' })
    },
    urlRoot: '/users'
} ) )()
