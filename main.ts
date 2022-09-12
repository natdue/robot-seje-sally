radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    }
    if (receivedNumber == 1) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 50)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    }
    if (receivedNumber == 2) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 20)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    }
    if (receivedNumber == 3) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
        Kitronik_Move_Motor.stop()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
})
input.onSound(DetectedSound.Loud, function () {
    radio.sendNumber(3)
    Kitronik_Move_Motor.stop()
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 20)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 50)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
})
radio.setGroup(1)
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
moveMotorZIP.show()
basic.forever(function () {
    if (Kitronik_Move_Motor.measure() < 5) {
        Kitronik_Move_Motor.stop()
    }
})
basic.forever(function () {
    moveMotorZIP.rotate(1)
    moveMotorZIP.show()
    basic.pause(100)
})
