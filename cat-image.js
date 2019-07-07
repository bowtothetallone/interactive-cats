var nom = document.getElementById('nomNumber')
var canvas = document.getElementById('cat-canvas')
var context = canvas.getContext('2d')

var catNames = [
  'Grover',
  'Baxter',
  'Bruce',
  'Janet',
  'Admiral',
  'Mary',
  'Bob',
  'Jezebel',
  'Quinton'
]

var cats = catNames.map(function (catName, index) {
  return new Cat({
    name: catName,
    color: 'hsl(' + (((index / catNames.length) + 0.0625) * 360) + ', 75%, 60%)',
    x: 100 + (50 * index),
    y: 100,
    scale: 0.3 + (0.1 * index),
    sleep: 50 + (index * 50)
  })
})

var drawScene = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  cats.forEach(function (cat, catIndex) {
    cat.draw(context)
  })
}

drawScene()

nom.addEventListener('input', function (event) {
  // console.log('The nom slider fired an input event.', event)
  var weight = event.target.value
  cats.forEach(function (cat, catIndex) {
    cat.weight = weight
  })

  drawScene()
})

canvas.addEventListener('mousemove', function (event) {
  // console.log('The canvas fired a mouse move event.', event)
  cats.reverse()
  cats.forEach(function (cat, catIndex) {
    var nextCat = cats[catIndex + 1]
    if(nextCat) {
      cat.x = (1.5 * nextCat.x) - 150
      cat.y = (1.5 * nextCat.y) - 100
    }
  })
  cats.reverse()
  cats[0].x = event.offsetX
  cats[0].y = event.offsetY
  drawScene()
})
