const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const path = require('path')

app.use('/controle', express.static(path.join(__dirname, 'controle')))

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'controle', 'index.html'))
})

io.on('connection', (socket)=>{
  socket.on('video', (id)=>{
    io.emit('video', id)
  })

  socket.on('controle', (id)=>{
    io.emit('controle', id)
  })

  socket.on('botoes', (s)=>{
    io.emit('botoes', s)
  })

  socket.on('volume', (vol)=>{
    io.emit('volume', vol)
  })
})

function start(){
  server.listen(4000, ()=>{
    console.log('Servidor rodando na porta 4000')
  })
}

export { start }
