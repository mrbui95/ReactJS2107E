let h3 = document.getElementById('js-first-title')
let containerElem = document.getElementById('js-container')

h3.style.color = 'red'
h3.style.borderTop = '1px solid black'

h3 = document.querySelector('.js-first-title')

h3.classList.add('bg-gray')

// let pElem = document.createElement('p')
// pElem.innerText = "Description"
// containerElem.appendChild(pElem)

// setTimeout(() => {
//     containerElem.removeChild(pElem)
// }, 1000)

onUserClick2 = () => {
    alert('Click2')
}

onUserClick3 = () => {
    alert('Click3')
}

onUserClick4 = () => {
    alert('Click3')
}

let buttonElem = document.querySelector('.js-btn-click')

buttonElem.addEventListener('onclick', onUserClick3)

let clockElem = document.querySelector('.js-clock')
let timerElem = clockElem.querySelector('.js-clock-timer')

setInterval(() => {
    timerElem.innerHTML = new Date().toLocaleTimeString()
}, 1000)

let currentOffset = 0
let isRunning = false
var timerInterval = null

let timeElem = document.querySelector('.js-time-runner')
let startStopBtnElem = document.querySelector('.js-btn-start-stop')

let startStopBtn = document.querySelector('.js-btn-start-stop')

const getTimeInfoFromOffset = (offset) => {
    let milisecond = Math.floor((offset % 1000) / 10)
    if (milisecond < 10) milisecond = `0${milisecond}`
    let second = Math.floor(offset / 1000) % 60
    if (second < 10) second = `0${second}`
    let minute = Math.floor(offset / 60000)
    if (minute < 10) minute = `0${minute}`

    return { minute, second, milisecond }
}

const onStartStopClick = () => {
    if (isRunning === true) {
        startStopBtnElem.innerHTML = 'Start'
        clearInterval(timerInterval)
        timerInterval = null
    } else {
        startStopBtnElem.innerHTML = 'Stop'
        start = new Date((new Date().getTime() - currentOffset))
        timerInterval = setInterval(() => {
            let current = new Date()
            let offset = current.getTime() - start.getTime()
            let { minute, second, milisecond } = getTimeInfoFromOffset(offset)
            timeElem.innerHTML = `${minute}:${second}:${milisecond}`
            currentOffset = offset
        }, 10)
    }
    isRunning = !isRunning
}

const onResetClick = () => {
    clearInterval(timerInterval)
    timerInterval = null
    start = null
    timeElem.innerHTML = '00:00:00'
}


