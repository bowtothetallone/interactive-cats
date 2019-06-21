var canvas = document.getElementById('cat-canvas')

var canvasRenderingContext = canvas.getContext('2d')

var myColor = catA.color
canvasRenderingContext.strokeStyle = myColor
canvasRenderingContext.fillStyle = myColor
canvasRenderingContext.lineJoin = 'round'
canvasRenderingContext.lineCap = 'round'
canvasRenderingContext.lineWidth = 15

//frontLegs
canvasRenderingContext.beginPath()
canvasRenderingContext.moveTo(125, 360)
canvasRenderingContext.lineTo(150, 360)
canvasRenderingContext.lineTo(200, 200)

canvasRenderingContext.moveTo(250, 360)
canvasRenderingContext.lineTo(275, 360)
canvasRenderingContext.lineTo(250, 200)

//BackLegs
canvasRenderingContext.moveTo(475, 360)
canvasRenderingContext.lineTo(500, 360)
canvasRenderingContext.lineTo(450, 200)

canvasRenderingContext.moveTo(375, 360)
canvasRenderingContext.lineTo(400, 360)
canvasRenderingContext.lineTo(425, 200)

canvasRenderingContext.stroke()

//Tail
canvasRenderingContext.beginPath()
canvasRenderingContext.ellipse(475, 120, 75, 35, Math.PI * .50, 0, Math.PI, true);
canvasRenderingContext.stroke()

//Ears
canvasRenderingContext.beginPath()
canvasRenderingContext.moveTo(110, 65)
canvasRenderingContext.lineTo(125, 30)
canvasRenderingContext.lineTo(140, 50)

canvasRenderingContext.moveTo(180, 75)
canvasRenderingContext.lineTo(175, 30)
canvasRenderingContext.lineTo(155, 50)

canvasRenderingContext.stroke()
canvasRenderingContext.fill()

//neck
canvasRenderingContext.beginPath()
canvasRenderingContext.moveTo(185, 120)
canvasRenderingContext.lineTo(200, 190)
canvasRenderingContext.stroke()

//head
canvasRenderingContext.fillStyle = 'orange'
canvasRenderingContext.beginPath()
canvasRenderingContext.ellipse(135, 110, 50, 60, Math.PI / 4, 0, 2 * Math.PI)
canvasRenderingContext.fill()

var weight = 0
var nom = document.getElementById('nomNumber')

function getFat(){
    canvasRenderingContext.beginPath()
    canvasRenderingContext.ellipse(332, 200, weight, 130, Math.PI / 2, 0, 2 * Math.PI)
    canvasRenderingContext.fillStyle = myColor
    canvasRenderingContext.fill()
    canvasRenderingContext.strokeStyle = myColor
    canvasRenderingContext.stroke()
}
nom.addEventListener("keyup", function(){
    weight=this.value
    getFat()
}, false)


//default body
canvasRenderingContext.beginPath()
canvasRenderingContext.moveTo(200, 200)
canvasRenderingContext.lineTo(465, 200)
canvasRenderingContext.stroke() 