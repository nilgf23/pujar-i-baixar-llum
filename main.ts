basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
let llum = 127
led.setBrightness(llum)
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        llum += 1
        led.setBrightness(llum)
        basic.pause(25)
        serial.writeLine("" + (llum))
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        llum += -1
        led.setBrightness(llum)
        basic.pause(25)
        serial.writeLine("" + (llum))
    }
})
