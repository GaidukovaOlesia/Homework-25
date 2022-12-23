// 1. Створити клас Людина.
//
//     Властивості:
// імʼя;
// вік.
//     Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

//// 2. Створити клас Автомобіль.
// //
// //     Властивості:
// // марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// // власник.
// //     Методи:
// // конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
//
// // присвоїти власника - метод повинен приймати екземпляр класу Людина,
// // та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18,
// // інакше виводити у консоль відповідне повідомлення
//
// // метод, який виводить у консоль інформацію про автомобіль та
// // викликає метод виводу інформації класу Людина для виведення інформації про власника
//
// В якості демонстраціїї створити:
//
//     декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.

function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.getInfoPerson = function() {
    console.log(`My name is ${this.name}. I'm ${this.age} years old`);
}

function Car(brand, model, year, number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
}

Car.prototype.assignOwner = function(person) {
    if(person.age < 18) {
        console.log(("You are so young!"));
    } else {
        this.owner = person
    }
}

Car.prototype.showInfo = function() {
    console.log(`Car brand is ${this.brand} ${this.model} ${this.year} release, number ${this.number}.`);
    if(this.owner) {
        this.owner.getInfoPerson();
    } else {
        console.log(`Owner is not defined`)
    }
}

const user1 = new Person("Olga", 28);
const user2 = new Person("Vera", 15);
const user3 = new Person("Vanya", 33);
const carSkoda = new Car("skoda", "fabia", 2008, 1167);
const carReno = new Car("reno", "megan", 2020, 1550);
const carMersedes = new Car("mersedes", "benz", 2019, 1450);
carSkoda.assignOwner(user1);
carSkoda.showInfo();
carReno.assignOwner(user2);
carReno.showInfo();
carMersedes.assignOwner(user3);
carMersedes.showInfo();








