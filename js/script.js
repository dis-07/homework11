'use strict';

class Person {
    constructor (firstName, lastName, age, birthDayDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthDayDate = birthDayDate;
    }

    celebrate () {
        const date = new Date(this.birthday);
        date.setFullYear(new Date().getFullYear());
        return 'Happy Birthday, let’s celebrate';
    }
}

class Employee extends Person {

    #salary = 0;

    constructor (firstName, lastName, age, birthDayDate, jobPosition, salary) {
        super (firstName, lastName, age, birthDayDate,);
        this.jobPosition = jobPosition;
        this.#salary = salary;
    }

    getYerSalary () {
        return this.#salary * 12;
    }

    celebrate() {
        super.celebrate()
        if (isWeekend(this.birthDayDate)) {
            return 'Happy Birthday, let’s celebrate';
        }   else {
                return 'Happy Birthday, but I need to work'
        }
    //     if (isWeekend(this.birthDayDate) === getYear(this.birthDayDate)){
    //         return 'Happy Birthday, let’s celebrate';
    //     } else {
    //         return 'Happy Birthday, but I need to work'
    //     }
    }
}


const employee = new Employee ('Mike', 'Vakovski', 25, '1901-08-24', 'Maneger', 2311);

console.log(employee);
console.log(employee.getYerSalary());
console.log(employee.celebrate());

const person = new Person ('Bob', 'Marli', 11,'2022-08-18');

console.log(person);
console.log(person.celebrate());


function isWeekend (date) {
    let day = new Date(date);
    let dayOfWeek = day.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
}

// function getYear (year) {
//     let nowDate = new Date().getFullYear();
//     let date = new Date(year).getFullYear();
//     let currentDate = date;

//     return currentDate === nowDate;
// }

// console.log(getYear('2020-10-10'));


// спасибо за подсказку, но я решил не использувать твое решегие, а сделать свое )
    // надеюсь мое решение имеет право на жизнь )