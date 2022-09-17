const fs = require('fs')

const dataFilePath = './cat-data.json'
const dataFileContents = fs.readFileSync(dataFilePath, 'utf-8')
const dataFileContentsParsed = JSON.parse(dataFileContents)

// console.log('What text is in my data file?', dataFileContents)
// console.log('What is the parsed result of my data file?', dataFileContentsParsed)

const catIndex = Math.floor(Math.random() * dataFileContentsParsed.length)
const currentCat = dataFileContentsParsed[catIndex]
console.log('What is this cat named?', currentCat.name)

var chonkiness = currentCat.chonk
var canvas = document.getElementById('cat-canvas')
var context = canvas.getContext('2d')
var distanceFromCenter = 0

var yourCat = {
  return new Cat({
    name: currentCat.name,
    color: currentCat.color,
    chonk: currentCat.chonk,
    age: currentCat.age,
    x: 0,
    y: 0,
    z: index * 50,
    scale: 0.5
  })
}

var planeDistance = 800

var drawScene = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save()
  yourCat.forEach(function (cat) {
    var zFraction = ((cat.z / planeDistance) * 2) + 1
    if (zFraction > 0 && zFraction < 2) {
      context.save()
      context.scale(zFraction, zFraction)
      yourCat.draw(context)
      context.restore()
    }
  })
  context.restore()
}

chonkiness.value(currentCat.chonk)

chonkiness.addEventListener('input', function (event) {
  // console.log('The chonk slider fired an input event.', event)
  var weight = event.target.value
  yourCat.for(function (currentCat) {
    currentCat.chonk = weight
  })
})
var makeACat = document.getElementById('makeACat')
makeACat.addEventListener('input', function (event) {
  drawScene()
})
