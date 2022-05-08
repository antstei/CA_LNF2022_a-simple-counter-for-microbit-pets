# The micro:bit pet tutorial

## Step 1
To make a frisky electronic pet, we first let the micro:bit – in addion to let it draw a friendly face – play the sound "hello" when the it starts processing our program.
```template
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
To keep track of how long our electronic pet is being ignored for, we let the micro:bit count from `1` at (one) second intervals right from the beginning of execution of our program.

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
To breathe life into our electronic pet, we let the micro:bit draw another sad friendly face and let the micro:bit play the sound "sad" after we have not touched our electronic pet for `20` seconds.

```block
Counter.onCountDo(20, CountActions.Continue, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
})
```

##  Step 3
To make our electronic pet happy when we touch the micro:bit logo, we let the micro:bit draw a happy face and let it play the sound "happy". Since our electronic pet happy is now satisfied for a while, we also let the micro:bit count from `1` at (one) second intervals again.

```block
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Counter.resetCounter()
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
})
```

##  Step 4
Since our electronic pet needs a lot of attention, we let the micro:bit draw a skull face and let it play the sound "mysterious" " after we have not touched our electronic pet for `20` seconds. To make our electronic pet stop working when we leave it alone for `40` seconds, we terminate the execution of our program by selecting the option ``||Counter:stop counting||``. 

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