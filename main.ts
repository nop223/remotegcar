input.onButtonPressed(Button.A, function () {
    control2 = 0
    basic.showNumber(control2)
})
input.onButtonPressed(Button.B, function () {
    if (control2 == 0) {
        control2 = 1
    } else {
        control2 = control2 + 1
        if (control2 > 6) {
            control2 = 1
        }
    }
    basic.showNumber(control2)
})
let serdir = 0
let yx = 0
let xx = 0
let control2 = 0
radio.setGroup(0)
let Ax = 9
control2 = 0
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
    } else {
        if (control2 > 0 && serdir > 0) {
            if (strt == 1) {
                radio.sendValue("sernr", control2)
                radio.sendValue("serdir", serdir)
                strt = 0
            }
        } else {
        	
        }
    }
})
