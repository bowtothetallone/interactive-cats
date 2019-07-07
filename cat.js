function Cat (config){
    this.name = config.name
    this.color = config.color
    this.x = config.x || 0
    this.y = config.y || 0
    this.scale = config.scale || 1
    this.sleep = config.sleep || this.sleep
    console.log('New cat was created ', this)
}

Cat.prototype = {
    weight: 1,
    speed: 5,
    sleep: 9000,
    purr: function (numberOfLoves) {
        for (let index = 0; index <= numberOfLoves; index++) {
            console.log('You pet ' + this.name + ' and it rewards you with purrs for the ' + index + ' time.')            
        }
    },
    eat: function (numberOfNoms) {
        this.foodLevel += numberOfNoms
        console.log(this.name + ' has eaten ' + numberOfNoms + ', so the food level is ' + this.foodLevel)
    },
    draw: function (context) {
        var x = this.x || 0
        var y = this.y || 0
        var scale = this.scale || 1
        var weight = this.weight || 1
        var color = this.color
      
        context.save()
        context.translate(x, y)
        context.scale(scale, scale)
        context.translate(-300, -200)
      
        context.strokeStyle = color
        context.fillStyle = color
        context.lineJoin = 'round'
        context.lineCap = 'round'
        context.lineWidth = 15  
      
        //frontLegs
        context.beginPath()
        context.moveTo(125, 360)
        context.lineTo(150, 360)
        context.lineTo(200, 200)
      
        context.moveTo(250, 360)
        context.lineTo(275, 360)
        context.lineTo(235, 200)
      
        //BackLegs
        context.moveTo(360, 360)
        context.lineTo(385, 360)
        context.lineTo(425, 200)
      
        context.moveTo(475, 360)
        context.lineTo(500, 360)
        context.lineTo(460, 200)
      
        //neck
        context.moveTo(185, 120)
        context.lineTo(200, 190)
      
        context.stroke()
      
        //Tail
        context.beginPath()
        context.ellipse(470, 125, 75, 35, Math.PI * .50, 0, Math.PI, true);
        context.stroke()
      
        //Ears
        context.beginPath()
        context.moveTo(125, 105)
        context.lineTo(140, 55)
        context.lineTo(160, 80)
        context.lineTo(185, 55)
        context.lineTo(192, 105)
      
        context.stroke()
        context.fill()
      
        //head
        context.beginPath()
        context.ellipse(152, 120, 50, 40, Math.PI, 0, 2 * Math.PI)
        context.fill()
      
        //default body
        context.beginPath()
        context.moveTo(200, 200)
        context.lineTo(465, 200)
        context.stroke()
      
        //chonky body
        context.beginPath()
        context.ellipse(332, 200, weight, 130, Math.PI / 2, 0, 2 * Math.PI)
        context.fill()
        context.stroke()

        //name text
        // context.font = '32px sans-serif'
        // var statsX = 250
        // context.fillText('name: ' + this.name, statsX, -50)
        // context.fillText('sleep: ' + this.sleep, statsX, -10)
        // context.fillText('weight: ' + this.weight, statsX, 30)

        context.restore()
    }      
}
