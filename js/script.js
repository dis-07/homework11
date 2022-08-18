'use strict';

class Person {
    constructor (firstName, lastName, age, birthDayDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthDayDate = birthDayDate;
    }

    celebrate () {
        return 'Happy Birthday, let’s celebrate';
    }
}

class Employee extends Person {

    #salary = 2314;

    constructor (firstName, lastName, age, birthDayDate, jobPosition,) {
        super (firstName, lastName, age, birthDayDate);
        this.jobPosition = jobPosition;
    }

    getYerSalary () {
        return this.#salary * 12;
    }

    celebrate () {
        let day = new Date(this.birthDayDate);
        let dayOfWeek = day.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            return 'Happy Birthday, let’s celebrate';
        } else {
            return 'Happy Birthday, but I need to work';
        }
    }
}

const employee = new Employee ('Mike', 'Vakovski', 25, '2022-08-14', 'Maneger');

console.log(employee);
console.log(employee.getYerSalary());
console.log(employee.celebrate());

const person = new Person ('Bob', 'Marli', 11,'2022-03-15');

console.log(person);
console.log(person.celebrate());