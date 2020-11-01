let serdir = 0
let yx = 0
let xx = 0
radio.setGroup(0)
let Ax = 9
let control2 = 0
let strt = 0
basic.forever(function () {
    xx = pins.map(
    pins.analogReadPin(AnalogPin.C16),
    0,
    1030,
    0,
    100
    )
    yx = pins.map(
    pins.analogReadPin(AnalogPin.C17),
    0,
    1030,
    0,
    100
    )
    if (xx > 70) {
        serdir = 10
    } else {
        if (xx < 30) {
            serdir = 20
        } else {
            serdir = 0
            strt = 1
        }
    }
    if (control2 == 0) {
        radio.sendValue("MotorX", xx)
        radio.sendValue("MotorY", yx)
    }
    basic.pause(30)
})
