radio.onReceivedString(function (receivedString) {
    if (receivedString == "GO") {
        crickit.motor1.run(50)
        basic.showIcon(IconNames.Heart)
    } else {
        crickit.motor1.run(0)
        basic.showIcon(IconNames.Tortoise)
    }
})
basic.forever(function () {
    radio.setGroup(158)
})
