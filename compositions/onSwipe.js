class Swipper {
  constructor (handler) {
    this.isStarted = false
    this.isMove = false

    let startingPosition = null

    this.onStart(({ x, y }) => {
      this.isStarted = true
      startingPosition = { x, y }
    })

    this.onMove(() => { this.isMove = true })

    this.onUp(({ x, y }) => {
      const xDiff = startingPosition.x - x
      const yDiff = startingPosition.y - y

      const direction = this.convertToDirection(xDiff, yDiff)

      handler(direction)

      startingPosition = null
      this.isStarted = false
      this.isMove = true
    })
  }

  onStart (handler) {
    document.addEventListener('touchstart', (event) => {
      const { clientX, clientY } = event.touches[0]
      handler({ x: clientX, y: clientY })
    }, false)

    document.addEventListener('mousedown', (event) => {
      handler({ x: event.clientX, y: event.clientY })
    }, false)
  }

  onMove (handler) {
    document.addEventListener('touchmove', (event) => {
      if (this.isStarted) {
        const { clientX, clientY } = event.touches[0]
        handler({ x: clientX, y: clientY })
      }
    }, false)

    document.addEventListener('mousemove', (e) => {
      if (this.isStarted) {
        handler({ x: e.clientX, y: e.clientY })
      }
    }, false)
  }

  onUp (handler) {
    document.addEventListener('touchend', (event) => {
      if (this.isMove) {
        const { clientX, clientY } = event.changedTouches[0]
        handler({ x: clientX, y: clientY })
      }
    })

    document.addEventListener('mouseup', ({ clientX, clientY }) => {
      if (this.isMove) { handler({ x: clientX, y: clientY }) }
    })
  }

  convertToDirection (xDiff, yDiff) {
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      return (xDiff > 0) ? 'left' : 'right'
    } else if (yDiff > 0) {
      return 'up'
    }

    return 'down'
  }
}

export default function onSwipe (handler) {
  return new Swipper(handler)
}
