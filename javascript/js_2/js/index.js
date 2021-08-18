function heavyCalculate() {
    console.log('Heavy Calculate')
}

let month = 5

if (month >= 1 && month <= 3) {
    console.log('Spring')
} else if (month >= 4 && month <= 6) {
    console.log('Summer')
} else if (month >= 7 && month <= 9) {
    console.log('Autumn')
} else if (month >= 10 && month <= 12) {
    console.log('Winter')
} else {
    console.log('Not Season')
}

switch (month) {
    case 1:
    case 2:
    case 3:
        console.log('Spring')
        break
    case 4:
    case 5:
    case 6:
        console.log('Summer')
        break
    case 7:
    case 8:
    case 9:
        console.log('Autumn')
        break
    case 10:
    case 11:
    case 12:
        console.log('Winter')
        break
    default:
        console.log('Not Season')
}


let n = 10

for (let i = 0; i < n; i += 1) {
    console.log(i)
}


let number = [3, 4, 6, 2, 7]
