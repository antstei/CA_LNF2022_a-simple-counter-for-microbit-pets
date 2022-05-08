# The micro:bit pet tutorial

## Step 1
To make a frisky electronic pet, we first let the micro:bit – in addion to let it draw a friendly face – play the sound ``||music:hello||`` when the micro:bit starts processing our program.
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
```

```blocks
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
soundExpression.hello.playUntilDone()
```

## Step 2
To keep track of how long our electronic pet is being ignored, we let the micro:bit count in one-second intervals, starting with `1` at the very beginning of our program's execution.

```blocks
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
soundExpression.hello.playUntilDone()
Counter.startCountingFromMin(1, Intervals.Seconds)
```

##  Step 3
To breathe life into our electronic pet, we let the micro:bit draw another sad face and let the micro:bit play the sound ``||music:sad||`` after we have not touched our electronic pet for `20` seconds.

```block
Counter.onCountDo(20, CountActions.Continue, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
})
```

##  Step 3
To make our electronic pet happy when we touch the micro:bit logo, we let the micro:bit draw a happy face and let it play the sound ``||music:happy||`` on logo ``||input:touch||``.

Having now satisfied our electronic pet for a while, we let the micro:bit continue counting in one-second intervals, but start over again, that is, beginning with `1`.

```block
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Counter.resetCounter()
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
})
```

##  Step 4
Since our electronic pet needs a lot of attention, we let the micro:bit draw a skull face and let it play the sound ``||music:mysterious||`` after we have not touched our electronic pet for `40` seconds.

Furthermore, to make our electronic pet stop working when we leave it alone for `40` seconds, we terminate the execution of our program by selecting the option ``||Counter:stop counting||``.

```block
Counter.onCountDo(40, CountActions.Stopp, function () {
    soundExpression.mysterious.playUntilDone()
    music.setBuiltInSpeakerEnabled(false)
    basic.showIcon(IconNames.Skull)
})
```

##  Step 5
Now it is your turn to make our electronic pet happy when we shake for instance our micro:bit, or let it fall asleep when we do not touch it for `30` seconds.

```ghost
Counter.onCountDo(30, CountActions.Continue, function () {
    basic.showIcon(IconNames.Asleep)
    soundExpression.yawn.playUntilDone()
})

input.onGesture(Gesture.Shake, function () {
    Counter.resetCounter()
    basic.showIcon(IconNames.Surprised)
    soundExpression.giggle.playUntilDone()
})

input.onButtonPressed(Button.AB, function () {
    Counter.resetCounter()
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    soundExpression.hello.playUntilDone()
})
```

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>