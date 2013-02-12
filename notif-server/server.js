var io = require('socket.io').listen(8080),
    follow = require('follow'),
    events = require('events');

follow({db:'http://localhost:5984/commentaireuniversel', since:"now", include_docs:true}, function(error, change) {
    if (!error) {
      console.log('New change in ' + change.doc.base_url);
      io.sockets.in(change.doc.base_url).emit('new_doc', null);
    }
  }
)

io.sockets.on('connection', function (socket) {
  socket.on('join_room', function(room){
    console.log('Client entered room ' + room);
    socket.join(room); 
  })
});
