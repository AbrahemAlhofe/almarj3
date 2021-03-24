import { io } from 'socket.io-client'

export default (context, inject) => {
  const socket = io(process.env.BASE_URL)
  inject('socket', socket)
}
