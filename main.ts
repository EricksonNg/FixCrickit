radio.onReceivedString(function (receivedString) {
    if (receivedString == "GO") {
        crickit.motor1.run(100)
        basic.showIcon(IconNames.House)
    } else {
        crickit.motor1.run(0)
        basic.showIcon(IconNames.Tortoise)
    }
})
radio.setGroup(158)
basic.forever(function () {
	
})
