Counter.onCountDo(10, CountActions.Stopp, function () {
    basic.showIcon(IconNames.Asleep)
})

Counter.onCountDo(5, CountActions.Continue, function () {
    basic.showIcon(IconNames.Sad)
})

basic.showIcon(IconNames.Happy)
Counter.startCountingFromMin(1, Intervals.Seconds)