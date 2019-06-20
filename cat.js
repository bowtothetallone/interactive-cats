var myCat = {
    'name': 'Hobbes',
    'color': 'Orange',
    'pattern': 'Stripes',
    'parents': {
        'mother': 'Brigitta',
        'father': 'Darth'
    }
}

console.log(myCat['name'])
console.log(myCat.parents.mother)

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

myCat.name
delete myCat.name

var MYCAT = {}

MYCAT.properties = {
    'name': 'Moe',
    'color': 'Tuxedo',
    'needs': 'Litter'
}

console.log(MYCAT)
console.log('The End')

function Cat (name, color){
    this.name = name 
    this.color = color
    console.log('New cat was created ', this)
}

Cat.prototype = {
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

var catA = new Cat('Grover', 'Magenta')
var catB = new Cat('Baxter', 'Blue')

console.log(catA, catB)
