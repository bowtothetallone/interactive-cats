var myCat = {
    name: 'Hobbes',
    'color': 'Orange',
    'pattern': 'Stripes',
    'parents': {
        'mother': 'Brigitta',
        'father': 'Darth'
    }
}

var catname
for (name in myCat) {
    if (typeof myCat[catname] == 'function') {
        console.log(catname + ': ' + myCat)
    }
}

var i
var catProperties = [
    'name',
    'color',
    'pattern',
    'parents'
]
for (i = 0; i < catProperties.length; i += 1) {
    var propertyName = catProperties[i]
    console.log(propertyName + ': ' + myCat[propertyName])
}

function Cat (config){
    this.name = config.name
    this.color = config.color
    this.x = config.x || 0
    this.y = config.y || 0
    this.scale = config.scale || 1
    console.log('New cat was created ', this)
}

Cat.prototype = {
    weight: 1,
    speed: 5,
    sleep: 9000,
    foodLevel: 0,
    purr: function (numberOfLoves) {
        for (let index = 0; index <= numberOfLoves; index++) {
            console.log('You pet ' + this.name + ' and it rewards you with purrs for the ' + index + ' time.')            
        }
    },
    eat: function (numberOfNoms) {
        this.foodLevel += numberOfNoms
        console.log(this.name + ' has eaten ' + numberOfNoms + ', so the food level is ' + this.foodLevel)
    }
}

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

console.log(catA, catB)
