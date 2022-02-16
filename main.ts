radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        crickit.motor2.run(100)
        basic.showIcon(IconNames.Sad)
    }
    if (receivedNumber == 1) {
        crickit.motor2.run(0)
        basic.showIcon(IconNames.TShirt)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "R") {
        crickit.motor1.run(100)
        basic.showIcon(IconNames.Sad)
    }
    if (receivedString == "STOP") {
        crickit.motor1.run(0)
        basic.showIcon(IconNames.Chessboard)
    }
})
radio.setGroup(158)
basic.forever(function () {
	
})
