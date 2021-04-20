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
        if (llum < 255) {
            llum += 1
            led.setBrightness(llum)
            serial.writeLine("" + (llum))
        } else {
            soundExpression.giggle.play()
        }
        llum += 1
        led.setBrightness(llum)
        basic.pause(25)
        serial.writeLine("" + (llum))
    }
    if (input.buttonIsPressed(Button.B)) {
        if (llum >= 0) {
            llum += -1
            led.setBrightness(llum)
            serial.writeLine("" + (llum))
        } else {
            soundExpression.giggle.play()
        }
        llum += -1
        led.setBrightness(llum)
        basic.pause(25)
        serial.writeLine("" + (llum))
    }
})
