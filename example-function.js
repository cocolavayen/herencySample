function Person(name, lastname) {
    this.name = name
    this.lastname = lastname

    this.getName = function() {
        return this.name;
    }
}

// Creando objetos del tipo Person
const luis = new Person('Luis', 'Lavayen')
const franco = new Person('Franco', 'Beltran')

// Agregando nuevos metodo a la clase con Prototype
Person.prototype.getFullname = function() {
    return this.name + " " + this.lastname;
}

Person.prototype.setName = function(newName) {
    this.name = newName;
}

// Print Luis & Franco
console.log('My name is: ' + luis.getFullname());
console.log('My name is: ' + franco.getFullname());

luis.setName('Miguel');
franco.setName('Bruno');

// Print Luis & Franco
console.log('My name is: ' + luis.getFullname());
console.log('My name is: ' + franco.getFullname());


// Creando nueva propiedad a Person
Person.prototype.setNewProperty = function(property) {
    this.newProperty = property;
}

// luis.setNewProperty('Padel');
luis.setNewProperty('Padel');
franco.setNewProperty('Volley');

console.log('My new property is: ' + luis.newProperty);
console.log('My new property is: ' + franco.newProperty);

console.log('');
// console.log(luis);


/****** USANDO HERENCIA*******/
function Student(name, lastname, course, note) {
    Person.call(this, name, lastname);

    this.course = course;
    this.note = note;
}

// This is handled always on this way
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Create and print the student fullname
const student = new Student('Juan', 'Perez', 'Javascript', 10);
console.log(student.getFullname());

// Change student name and add new property 'handball'
student.setName('Ricardo');
student.setNewProperty('Handball');

// Print full student object
console.log(student);
