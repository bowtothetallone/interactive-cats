var nom = document.getElementById('nomNumber')
var canvas = document.getElementById('cat-canvas')
var context = canvas.getContext('2d')

var catA = new Cat({
  name: 'Grover',
  color: 'orange',
  x: 100,
  y: 100,
  scale: 0.3
})
var catB = new Cat({
  name: 'Baxter',
  color: 'Blue',
  x: 200,
  y: 100,
  scale: 0.4
})

var drawScene = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  catB.draw(context)
  catA.draw(context)
}

drawScene()

console.log(catA, catB)

nom.oninput = function () {
  catA.weight = this.value

  drawScene()
}
canvas.addEventListener('mousemove', function (event) {
  catA.x = event.offsetX
  catA.y = event.offsetY

  drawScene()
})
