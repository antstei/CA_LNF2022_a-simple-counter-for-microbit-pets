Counter.onCountEvent(10, CountActions.Stop, function () {
    basic.showIcon(IconNames.Asleep)
    soundExpression.mysterious.playUntilDone()
    music.setBuiltInSpeakerEnabled(false)
})

Counter.onCountEvent(5, CountActions.Continue, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.yawn.playUntilDone()
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Counter.startFromMinAgain()
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
})

basic.showIcon(IconNames.Happy)
soundExpression.hello.playUntilDone()
Counter.startFromMin(1, Intervals.Seconds)