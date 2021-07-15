class MyClassParent {
    constructor(name, lastname, age) {
        this.name = name
        this.lastname = lastname
        this.age = age
    }

    getName() {
        return this.name;
    }

    getLastName() {
        return this.lastname;
    }

    getAge() {
        return this.age;
    }

    setAge(newAge) {
        this.age = newAge
    }
}

const myParentObject = new MyClassParent('Franco', 'Lavayen', 29);
myParentObject.setAge(30);
console.log('My age is: ' + myParentObject.getAge());

console.log('#################################');

/* Herencia con clases */
class MyClassChild extends MyClassParent {
    constructor(name, lastname, age, color, sport) {
        super(name, lastname, age)
        
        this.favoriteColor = color; 
        this.sport = sport; 
    }

    getFavortiteColor() {
        return this.favoriteColor;
    }

    getSport() {
        return this.sport;
    }

    setChangeSport(newSport) {
        this.sport = newSport
    }
}

// Create new child object that extends from parent class
const childObject = new MyClassChild('Juan', 'Perez', 25, 'Green', 'Tenis');

console.log(childObject);

// Set new age to child object using the parent method
childObject.setAge(50);

// Print the child object properties with the new changes
console.log(childObject);