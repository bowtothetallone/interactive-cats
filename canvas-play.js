var canvas = document.getElementById('cat-canvas')

console.dir(canvas)
var canvasRenderingContext = canvas.getContext('2d')
console.dir(canvasRenderingContext)
canvasRenderingContext.strokeStyle = '#fff'
canvasRenderingContext.lineJoin = 'round'
canvasRenderingContext.lineCap = 'round'
canvasRenderingContext.lineWidth = 20

//frontLegs
canvasRenderingContext.beginPath()
canvasRenderingContext.moveTo(100, 360)
canvasRenderingContext.lineTo(200, 270)
canvasRenderingContext.lineTo(300, 360)
canvasRenderingContext.stroke()

//BackLegs
canvasRenderingContext.beginPath()
canvasRenderingContext.moveTo(500, 360)
canvasRenderingContext.lineTo(450, 250)
canvasRenderingContext.lineTo(400, 360)
canvasRenderingContext.stroke()

//Ears
canvasRenderingContext.beginPath()
canvasRenderingContext.moveTo(75, 65)
canvasRenderingContext.lineTo(100, 10)
canvasRenderingContext.lineTo(125, 50)
canvasRenderingContext.stroke()

canvasRenderingContext.beginPath()
canvasRenderingContext.moveTo(165, 75)
canvasRenderingContext.lineTo(165, 10)
canvasRenderingContext.lineTo(135, 50)
canvasRenderingContext.stroke()

//Tail
canvasRenderingContext.beginPath()
canvasRenderingContext.moveTo(470, 230)
canvasRenderingContext.lineTo(525, 10)
canvasRenderingContext.stroke()

//head
canvasRenderingContext.beginPath()
canvasRenderingContext.ellipse(100, 110, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
canvasRenderingContext.stroke();

//body
canvasRenderingContext.beginPath()
canvasRenderingContext.ellipse(300, 210, 75, 175, Math.PI / 2, 0, 2 * Math.PI);
canvasRenderingContext.stroke();