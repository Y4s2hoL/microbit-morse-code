radio.onReceivedString(function (receivedString) {
    if (receivedString == "DOT") {
        led.plot(2, 2)
        music.play(music.createSoundExpression(WaveShape.Square, 1000, 1000, 255, 255, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.pause(150)
        led.unplot(2, 2)
    } else if (receivedString == "DASH") {
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        music.play(music.createSoundExpression(WaveShape.Square, 1000, 1000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.pause(500)
        led.unplot(1, 2)
        led.unplot(2, 2)
        led.unplot(3, 2)
    } else {
        basic.showString("ERORR")
    }
})
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("DOT")
        led.plot(2, 2)
        music.play(music.createSoundExpression(WaveShape.Square, 627, 627, 255, 255, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.pause(150)
        led.unplot(2, 2)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("DASH")
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        music.play(music.createSoundExpression(WaveShape.Square, 627, 627, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.pause(500)
        led.unplot(1, 2)
        led.unplot(2, 2)
        led.unplot(3, 2)
    }
})
