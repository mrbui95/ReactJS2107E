// let car = {
//     name : 'Fiat',
//     model: 500,
//     weight: 850,
//     color: 'white',
//     start: () => {
//         console.log(car.name, 'start running')
//     },
//     stop: () => {
//         console.log(car.name, 'stoping...')
//     },
// }

// console.log(car)
// console.log('car.name', car.name)
// console.log('car[name]', car['name'])

// car.age = 5
// console.log('car.age', car.age)

// car.start()

// car.stop()

// for (let prop in car) {
//     if (typeof(car[prop]) !== 'function') {
//         console.log(prop, ':', car[prop])
//     }
// }


// let drive = function() {
//     console.log(this.name, 'is driving')
// }

// drive()

// car.drive = drive.bind(car)
// car.drive()

// car2 = {
//     name: 'Toyota',
// }

// car2.drive = drive

// car2.drive()


let student1 = {
    name: 'student1',
    age: 24,
}

let student2 = {
    ...student
}

