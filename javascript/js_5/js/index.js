let fruits = ['orange', 'banana', 'kiwi', 'mango']

console.log(fruits.toString())
console.log(fruits)

let students = []

let studentA = {
    name: 'A',
    age: 20,
}

let studentB = {
    name: 'B',
    age: 21,
}

students.push(studentA)
students.push(studentB)
students.push({
    name: 'C',
    age: 23,
})

console.log(students)

let studentC = students.pop()
console.log(studentC)
console.log(students)

students.push(studentC)

students.unshift({
    name: '0',
    age: 18,
})

let student0 = students.shift()
console.log(student0)
console.log(students)

students.unshift(student0)

students.splice(4, 0, {
    name: 'D',
    age: 24,
})

students.push({
    name: 'F',
    age: 25,
})

students.push({
    name: 'E',
    age: 25,
})



console.log(students)

students.splice(5, 1)

console.log(students)

console.log(fruits.join(', '))

// copy, get a range from array

let fruits2 = fruits.slice(1)

console.log(fruits2)

let findStudent = students.find((student) => {
    return student.age === 24
})

let findStudent2 = students.find((student) => {
    return student.age === 27
})

console.log(findStudent)
console.log(findStudent2)
console.log(students)

const listStudent24 = students.filter(student => student.age === 24)
console.log(listStudent24)

students.sort((std1, std2) => {
    if (std1.name.toLowerCase() > std2.name.toLowerCase()) return 1
    else if (std1.name.toLowerCase() < std2.name.toLowerCase()) -1
    else return 0
})
console.log(students)
