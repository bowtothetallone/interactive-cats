var nom = document.getElementById('nomNumber')
var canvas = document.getElementById('cat-canvas')
var context = canvas.getContext('2d')
var distanceFromCenter = 50
var secondsToLoop = 2

var ascendingCats = [
  'Grover',
  'Baxter',
  'Bruce',
  'Janet',
  'Admiral',
  'Mary',
  'Quinton',
  'Peter',
  'Annabelle'
].map(function (catName, index, catNames) {
  return new Cat({
    name: catName,
    color: 'hsl(' + (((index / catNames.length) + 0.0625) * 360) + ', 75%, 60%)',
    x: 0,
    y: 0,
    scale: 0.3 + (0.1 * index)
  })
})

var cats = [].concat(ascendingCats)

var drawScene = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save()
  context.translate(canvas.width * 0.5, canvas.height * 0.5)
  cats.forEach(function (cat, catIndex) {
    cat.draw(context)
  })
  context.restore()
}

nom.addEventListener('input', function (event) {
  // console.log('The nom slider fired an input event.', event)
  var weight = event.target.value
  cats.forEach(function (cat, catIndex) {
    cat.weight = weight
  })
})

canvas.addEventListener('mousemove', function (event) {
  // console.log('The canvas fired a mouse move event.', event)
  ascendingCats[0].x = event.offsetX - 300
  ascendingCats[0].y = event.offsetY - 200
})

var tau = Math.PI * 2
var animate = function (time) {
  requestAnimationFrame(animate)
  var seconds = time / 1000
  var phase = (seconds / secondsToLoop) * tau
  ascendingCats[0].x = Math.cos(phase) * distanceFromCenter
  ascendingCats[0].y = Math.sin(phase) * distanceFromCenter
  ascendingCats.reverse()
  ascendingCats.forEach(function (cat, catIndex) {
    var nextCat = ascendingCats[catIndex + 1]
    if(nextCat) {
      cat.x = (1.25 * nextCat.x)
      cat.y = (1.25 * nextCat.y)
    }
  })
  ascendingCats.reverse()
  drawScene()
}

requestAnimationFrame(animate)