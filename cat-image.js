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
  var num = catNames.length
  return new Cat({
    name: catName,
    color: 'hsl(' + ((((num - index) / num) + 0.0625) * 360) + ', 75%, 60%)',
    x: 0,
    y: 0,
    z: index * 50,
    scale: 0.3
  })
})

var descendingCats = [
  'Christine',
  'Blue',
  'Houdini',
  'Cupcake',
  'Jolene',
  'Kaffy',
  'Ellen',
  'Kerianne',
  'Caiser'
].map(function (catName, index, catNames) {
  return new Cat({
    name: catName,
    color: 'hsl(' + (((index / catNames.length) + 0.0625) * 360) + ', 75%, 60%)',
    x: 0,
    y: 0,
    z: index * -50,
    scale: 0.3
  })
})

var cats = [].concat(ascendingCats, descendingCats)
var planeDistance = 800

var drawScene = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save()
  context.translate(canvas.width * 0.5, canvas.height * 0.5)
  cats.sort(function (a, b){
    return a.z - b.z
  })
  cats.forEach(function (cat) {
    var zFraction = ((cat.z / planeDistance) * 2) + 1
    if (zFraction > 0 && zFraction < 2) {
      context.save()
      context.scale(zFraction, zFraction)
      cat.draw(context)
      context.restore()
    }
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
      cat.x = nextCat.x
      cat.y = nextCat.y
    }
  })
  ascendingCats.reverse()

  descendingCats[0].x = Math.cos(-phase) * distanceFromCenter
  descendingCats[0].y = Math.sin(-phase) * distanceFromCenter
  descendingCats.reverse()
  descendingCats.forEach(function (cat, catIndex) {
    var nextCat = descendingCats[catIndex + 1]
    if(nextCat) {
      cat.x = nextCat.x
      cat.y = nextCat.y
    }
  })
  descendingCats.reverse()
  drawScene()
}

requestAnimationFrame(animate)