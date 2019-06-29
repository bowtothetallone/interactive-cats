var nom = document.getElementById('nomNumber')
var canvas = document.getElementById('cat-canvas')
var context = canvas.getContext('2d')

var cats = [
  new Cat({
    name: 'Grover',
    color: 'red',
    x: 100,
    y: 100,
    scale: 0.3
  }),
  new Cat({
    name: 'Baxter',
    color: 'orange',
    x: 200,
    y: 100,
    scale: 0.4
  }),
  new Cat({
    name: 'Bruce',
    color: 'yellow',
    x: 300,
    y: 100,
    scale: 0.5
  }),
  new Cat({
    name: 'Janet',
    color: 'green',
    x: 400,
    y: 100,
    scale: 0.6
  }),
  new Cat({
    name: 'Admiral',
    color: 'Blue',
    x: 500,
    y: 100,
    scale: 0.7
  })
]

var drawScene = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  cats.forEach(function (cat, catIndex) {
    cat.draw(context)
  })
}

drawScene()

nom.oninput = function () {
  cats[0].weight = this.value

  drawScene()
}
canvas.addEventListener('mousemove', function (event) {
  cats[0].x = event.offsetX
  cats[0].y = event.offsetY

  drawScene()
})
