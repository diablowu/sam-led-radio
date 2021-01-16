input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("Hi")
    strip.clear()
    strip.show()
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Heart)
    strip.setBrightness(16)
    strip.showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
    strip.show()
})
let strip: neopixel.Strip = null
radio.setGroup(126)
strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
basic.forever(function () {
	
})
