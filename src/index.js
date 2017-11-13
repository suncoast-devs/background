import operators from './operators'

const COLORS = {
  bd: '#5a9090',
  bl: '#80ced2',
  gr: '#b2d235',
  yw: '#fff100',
  or: '#f89f1b',
  rd: '#d5562b',
  pp: '#885780',
  pl: '#c5a7b4',
  wh: '#f7f1d9'
}

const cellSize = 60
const elemSize = 20

const canvas = document.querySelector('canvas')
const controls = document.querySelector('form')

document.addEventListener('DOMContentLoaded', () => {
  draw()
})

controls.addEventListener('submit', event => {
  event.preventDefault()
  draw()
})

const ctx = canvas.getContext('2d')
const DOMURL = window.URL || window.webkitURL || window

const draw = () => {
  canvas.width = controls.width.value
  canvas.height = controls.height.value

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = COLORS.bl
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  for (let i = -1; i * cellSize < canvas.height; i++) {
    for (let j = -1; j * cellSize < canvas.width; j++) {
      if (Math.random() > i * cellSize / canvas.height) {
        const data = operators[rand(operators.length)].replace(
          'white',
          randColor()
        )
        const img = new Image()
        const svg = new Blob([data], { type: 'image/svg+xml' })
        const url = DOMURL.createObjectURL(svg)
        img.onload = () => {
          ctx.rotate(-0.0618)
          ctx.globalAlpha = Math.random()
          ctx.translate(
            cellSize * j + rand(cellSize / 2) + cellSize / 4,
            cellSize * i + rand(cellSize / 2) + cellSize / 4
          )
          ctx.drawImage(img, -elemSize / 2, -elemSize / 2, elemSize, elemSize)
          DOMURL.revokeObjectURL(url)
          ctx.resetTransform()
        }
        img.src = url
      }
    }
  }
}

const randColor = () => {
  const { gr, yw, or, rd, pp, pl, wh } = COLORS
  const colors = [gr, yw, or, rd, pp, pl, wh]
  if (Math.random() > 0.618) {
    return colors[rand(colors.length)]
  } else {
    return COLORS.bd
  }
}

const rand = n => Math.floor(Math.random() * n)
