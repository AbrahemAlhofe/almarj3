export default (context, inject) => {
  const baseUrl = process.env.BASE_URL.replace(/https?/g, 'ws')
  const socket = new WebSocket(baseUrl)
  inject('socket', socket)
}
