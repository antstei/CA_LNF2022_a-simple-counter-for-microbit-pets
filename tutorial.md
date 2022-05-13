# A Frisky micro:bit Pet Tutorial for the "Lange Nacht der Forschung 2022"

## Step 1
To program a frisky electronic pet, we first let the micro:bit – in addition to let it draw a friendly face – play the sound ``||music:hello||`` when the micro:bit starts processing our program.
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
To keep track of how long our electronic pet is being ignored, we let the micro:bit count in ``||Counter:one-second intervals||``, starting with `1` at the very beginning of our program's execution.

```blocks
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
soundExpression.hello.playUntilDone()
Counter.startFromMin(1, Intervals.Seconds)
```

##  Step 3
To breathe life into our electronic pet, we let the micro:bit draw a sad face and let the micro:bit play the sound ``||music:sad||`` after we have not touched our electronic pet for `20` seconds.

```block
Counter.onCountEvent(20, CountActions.Continue, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
})
```

##  Step 3
To make our electronic pet happy when we touch the micro:bit logo, we let the micro:bit draw a happy face and let it play the sound ``||music:happy||`` on logo ``||input:touch||``.

Having now satisfied our electronic pet for a while, we let the micro:bit continue counting in ``||Counter:one-second intervals||``, but start over again, that is, beginning with `1`.

```block
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Counter.startFromMinAgain()
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
})
```

##  Step 4
Since our electronic pet needs a lot of attention, we let the micro:bit draw a ``||basic:IconNames.Skull||`` face and let it play the sound ``||music:mysterious||`` after we have not touched our electronic pet for `40` seconds.

Furthermore, to make our electronic pet stop working when we leave it alone for `40` seconds, we terminate the execution of our program by selecting the option ``||Counter:stop counting||``.

```block
Counter.onCountEvent(40, CountActions.Stopp, function () {
    soundExpression.mysterious.playUntilDone()
    music.setBuiltInSpeakerEnabled(false)
    basic.showIcon(IconNames.Skull)
})
```

##  Step 5
Now it is your turn to make our electronic pet happy when we ``||input:shake||`` for instance our micro:bit …, or for example let it ``||music:yawn||`` and fall asleep when we do not touch it for `30` seconds.

### References
Micro:bit Educational Foundation. (2021). _[micro:bit pet](https://www.microbit.org/projects/make-it-code-it/microbit-pet/)_.

```ghost
Counter.onCountEvent(30, CountActions.Continue, function () {
    basic.showIcon(IconNames.Asleep)
    soundExpression.yawn.playUntilDone()
})

input.onGesture(Gesture.Shake, function () {
    Counter.startFromMinAgain()
    basic.showIcon(IconNames.Surprised)
    soundExpression.giggle.playUntilDone()
})

input.onButtonPressed(Button.AB, function () {
    Counter.startFromMinAgain()
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