document.addEventListener('DOMContentLoaded', () => {
  const numDots = 30
  const dots = []
  let mousex = 0,
    mousey = 0

  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div')
    dot.className = 'neon-dot'
    document.body.appendChild(dot)
    dots.push(dot)
  }

  function moveDots() {
    let nextx = mousex,
      nexty = mousey

    dots.forEach((dot, index) => {
      const currentX = dot.style.left ? parseFloat(dot.style.left) : 0
      const currentY = dot.style.top ? parseFloat(dot.style.top) : 0

      dot.style.left = nextx + 'px'
      dot.style.top = nexty + 'px'

      nextx += (currentX - nextx) * 0.3
      nexty += (currentY - nexty) * 0.3
    })

    requestAnimationFrame(moveDots)
  }

  document.addEventListener('mousemove', e => {
    mousex = e.clientX
    mousey = e.clientY
  })

  moveDots()
})
