const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = msg => console.log(msg)

const serializeClockTime = date => (
    {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
)

const civilianHours = time => (
    {
        ...time,
        hours: (time > 12) ? time.hours - 12 : time.hours
    }
)

const appendAMPM = time => (
    {
        ...time,
        ampm: (time.hours >= 12) ? "PM" : "AM"
    }
)

const display = target => time => target(time)

const compose = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg)

const formatClock = format => time =>
    format.replace("hh", time.hours)
        .replace("mm", time.minutes)
        .replace("ss", time.seconds)
        .replace("tt", time.ampm)

const prependZero = key => time => (
    {
        ...time,
        [key]: time[key] < 10 ? "0" + time[key] : time[key]
    }
)

const convertToCivilianTime = time => compose(appendAMPM, civilianHours)(time)
const doubleDigits = time => compose(prependZero("hours"), prependZero("minutes"), prependZero("seconds"))(time)

//setInterval(compose(clear, getCurrentTime, serializeClockTime, convertToCivilianTime, doubleDigits, formatClock("hh:mm:ss tt"), display(log)), oneSecond())

log(compose(getCurrentTime, serializeClockTime, convertToCivilianTime)())

