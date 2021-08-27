let title = 'Today is a beautiful day'

let str = 'beautiful'
let replaceStr = 'awesome'

let index = title.indexOf(str)
let newTitle = title.substring(0, index) + replaceStr + title.substring((index + str.length))

console.log(newTitle)

let newTitle2 = title.split(str).join(replaceStr)
console.log(newTitle2)

let words = title.split(' ')

let newTitle3 = words.reduce((result, w) => {
    
})

console.log(title.split(/beautiful/))


class Person {
    name = ''
    age = 0

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    go = () => {
        console.log(this.name + " is going")
    }
}

class Student extends Person {
    name = ''
    age = 0

    constructor(name, age) {
        super(name, age)
    }

    study = () => {
        console.log(this.name + " is studying")
    }

    
}

class Teacher extends Person {
    name = ''
    age = 0

    static id = 100

    constructor(name, age) {
        super(name, age)
    }

    study = () => {
        console.log(this.name + " is studying")
    }

    teach = () => {
        console.log(this.name + " is teaching")
    }
}

let studentHoang = new Student()
studentHoang.name = 'Hoang'
let studentDuc = new Student()
studentDuc.name = 'Duc'

studentHoang.study()
studentDuc.study()

let studentDinh = new Student('Dinh', 21)
let studentTrong = new Student('Trong', 31)

// studentTrong.go()
// let studentGo = studentTrong.go
// studentGo()

// let studentStudy = studentDuc.study
// studentStudy()

let teacherHoan = new Teacher('Hoan', 30)
teacherHoan.teach()
teacherHoan.go()