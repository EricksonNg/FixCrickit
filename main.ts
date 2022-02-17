radio.onReceivedString(function (receivedString) {
    if (receivedString == "Both") {
        crickit.motor1.run(100)
        crickit.motor2.run(100)
    } else {
        if (receivedString == "R") {
            crickit.motor1.run(100)
            basic.showIcon(IconNames.Sad)
        }
        if (receivedString == "SR") {
            crickit.motor1.run(0)
            basic.showIcon(IconNames.Chessboard)
        }
        if (receivedString == "S") {
            crickit.motor2.run(100)
            basic.showIcon(IconNames.Sad)
        }
        if (receivedString == "SL") {
            crickit.motor2.run(0)
            crickit.motor2.stop()
            basic.showIcon(IconNames.TShirt)
        }
    }
})
radio.setGroup(158)
basic.forever(function () {
	
})
