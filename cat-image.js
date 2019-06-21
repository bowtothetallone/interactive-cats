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
canvasRenderingContext.lineTo(235, 200)

//BackLegs
canvasRenderingContext.moveTo(360, 360)
canvasRenderingContext.lineTo(385, 360)
canvasRenderingContext.lineTo(425, 200)

canvasRenderingContext.moveTo(475, 360)
canvasRenderingContext.lineTo(500, 360)
canvasRenderingContext.lineTo(460, 200)

//neck
canvasRenderingContext.moveTo(185, 120)
canvasRenderingContext.lineTo(200, 190)

canvasRenderingContext.stroke()

//Tail
canvasRenderingContext.beginPath()
canvasRenderingContext.ellipse(470, 125, 75, 35, Math.PI * .50, 0, Math.PI, true);
canvasRenderingContext.stroke()

//Ears
canvasRenderingContext.beginPath()
canvasRenderingContext.moveTo(125, 105)
canvasRenderingContext.lineTo(140, 55)
canvasRenderingContext.lineTo(160, 80)
canvasRenderingContext.lineTo(185, 55)
canvasRenderingContext.lineTo(192, 105)


canvasRenderingContext.stroke()
canvasRenderingContext.fill()

//head
canvasRenderingContext.beginPath()
canvasRenderingContext.ellipse(152, 120, 50, 40, Math.PI, 0, 2 * Math.PI)
canvasRenderingContext.fill()

//default body
canvasRenderingContext.beginPath()
canvasRenderingContext.moveTo(200, 200)
canvasRenderingContext.lineTo(465, 200)
canvasRenderingContext.stroke() 

//chonky body
var weight = 0
var nom = document.getElementById('nomNumber')

function chonk(){
    canvasRenderingContext.beginPath()
    canvasRenderingContext.ellipse(332, 200, weight, 130, Math.PI / 2, 0, 2 * Math.PI)
    canvasRenderingContext.fillStyle = myColor
    canvasRenderingContext.fill()
    canvasRenderingContext.strokeStyle = myColor
    canvasRenderingContext.stroke()
}
nom.addEventListener("keyup", function(){
    weight=this.value
    chonk()
}, false)
