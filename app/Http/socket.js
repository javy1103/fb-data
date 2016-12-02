'use strict'

const Redis = use('Redis')

module.exports = function(server) {

    const io = use('socket.io')(server)

    io.sockets.on('connection', function(socket) {

        let userGroup = socket.handshake.query.userGroup

        Redis.subscribe(userGroup, function(message, channel) {
            socket.emit(`${channel}.message`, message)
        })

        socket.on(`${userGroup}.message`, function(message) {
            Redis.publish(`${userGroup}`, message)
        })

    })

    return

}
