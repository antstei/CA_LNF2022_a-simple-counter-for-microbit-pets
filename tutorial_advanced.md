# An Advanced Frisky micro:bit Pet Tutorial for the "Lange Nacht der Forschung 2022"

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
To keep track of how long our electronic pet is being ignored, we let the micro:bit count in one-second intervals, starting with `1` at the very beginning of our program's execution.
To accomplish this, we ``||varible:make a Variable||`` named "``||varible:counter||``" and ``||varible:set counter to 1||``. Furthermore, we make use of the ``||basic:forever||`` loop to ``||basic:pause||`` for `1` Second ≙ `1000` Milliseconds before we ``||varible:change counter by 1||`` in each iteration.

```blocks
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
soundExpression.hello.playUntilDone()
counter = 1

basic.forever(function () {
    basic.pause(1000)
    counter += 1
})
```

## Step 3
To breathe life into our electronic pet, we let the micro:bit draw a unhappy face and let the micro:bit play a sad sound after we have not touched our electronic pet for `20` seconds.
To do so, we insert a ``||logic:if-then||`` statement  in the ``||basic:forever||`` loop to check ``||logic:if||`` ``||variable:counter = 20||``. If this is the case, we let the micro:bit draw a sad face and let the micro:bit play the sound ``||music:sad||``. 

```block
basic.forever(function () {
    basic.pause(1000)
    counter += 1
    if (counter == 20) {
        basic.showIcon(IconNames.Sad)
        soundExpression.sad.playUntilDone()
    }
})
```

## Step 4
To make our electronic pet happy when we touch the micro:bit logo, we let the micro:bit draw a happy face and let it play the sound ``||music:happy||`` on logo ``||input:touch||``.

Having now satisfied our electronic pet for a while, we let the micro:bit continue counting in one-second intervals, but start over again, that is, ``||varible:set counter to 1||``.

```block
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    counter = 1
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
})
```

## Step 5
Since our electronic pet needs a lot of attention, we let the micro:bit draw a strange face and let it play a weird sound after we have not touched our electronic pet for `40` seconds.
As before, we insert another ``||logic:if-then||`` statement in the ``||basic:forever||`` loop to check ``||logic:if||`` ``||variable:counter = 40||``. If this is the case, we let the micro:bit play the sound ``||music:mysterious||``.

Furthermore, to make our electronic pet stop working when we leave it alone for `40` seconds, we terminate the execution of our program.
To do so, we ``||music:set the built in speaker off||`` and let the micro:bit draw a ``||basic:IconNames.Skull||`` face forever, i.e., leveraging an infinite ``||basic:loop||``.

```block
if (counter == 40) {
    soundExpression.mysterious.playUntilDone()
    music.setBuiltInSpeakerEnabled(false)
    while (true) {
        basic.showIcon(IconNames.Skull)
    }
}
```

## Step 6
Now it is your turn to make our electronic pet happy when we ``||input:shake||`` for instance our micro:bit …, or for example let it ``||music:yawn||`` and fall asleep when we do not touch it for `30` seconds.

### References
Micro:bit Educational Foundation. (2021). _[micro:bit pet](https://www.microbit.org/projects/make-it-code-it/microbit-pet/)_.

```ghost
basic.forever(function () {
    if (counter == 30) {
        basic.showIcon(IconNames.Asleep)
        soundExpression.yawn.playUntilDone()
    }
})

input.onButtonPressed(Button.AB, function () {
    counter = 1
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    soundExpression.hello.playUntilDone()
})

input.onGesture(Gesture.Shake, function () {
    counter = 1
    basic.showIcon(IconNames.Surprised)
    soundExpression.giggle.playUntilDone()
})
```

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>