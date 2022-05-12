# Ein verspieltes micro:bit-Pet-Tutorial für die „Lange Nacht der Forschung 2022"

## Step 1
Um ein verspieltes elektronisches Haustier zu programmieren, lassen wir den micro:bit – zusätzlich zum Anzeigen eines freundlichen Gesichts – den Ton ``||music:Hallo||`` abspielen, wenn der micro:bit beginnt unser Programm abzuarbeiten.

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
Um zu erkennen, wie lange unser elektronisches Haustier ignoriert wird, lassen wir den micro:bit im ``||Counter:Sekundentakt||`` zählen. Dafür fangen wir ``||basic:beim Start||`` des Programms mit `1` zu zählen an.

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
Um unserer elektronisches Haustier zum Leben zu erwecken, lassen wir den micro:bit ein trauriges Gesicht anzeigen und den micro:bit den Ton ``||music:traurig||`` abspielen, nachdem wir unser elektronisches Haustier für `20` Sekunden nicht berührt haben.

```block
Counter.onCountEvent(20, CountActions.Continue, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
})
```

##  Step 3
Damit unser elektronisches Haustier sich freut, sobald wir das micro:bit-Logo berühren, lassen wir den micro:bit ein glückliches Gesicht anzeigen und den Ton ``||music:glücklich||`` abspielen, wenn das Logo ``||input:berührt|||`` wird.

Da unser elektronisches Haustier inzwischen eine Zeit lang zufrieden ist, lassen wir den micro:bit im ``||Counter:Sekundentakt||`` weiter zählen, fangen dabei allerdings wieder von vorne mit `1` an.

```block
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Counter.startFromMinAgain()
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
})
```

##  Step 4
Weil unser elektronisches Haustier viel Aufmerksamkeit braucht, lassen wir den micro:bit ein ``||basic:Totenkopf||``-Gesicht anzeigen und den Ton ``||music:geheimnisvoll||`` abspielen, nachdem wir unser elektronisches Haustier für `40` Sekunden nicht angefasst haben.

Damit unser elektronisches Haustier außerdem nicht mehr funktioniert, wenn wir es `40` Sekunden lang nicht in die Hand genommen haben, beenden wir die Ausführung unseres Programms indem wir die Option „``||Counter:höre auf zu zählen||``" auswählen.

```block
Counter.onCountEvent(40, CountActions.Stopp, function () {
    soundExpression.mysterious.playUntilDone()
    music.setBuiltInSpeakerEnabled(false)
    basic.showIcon(IconNames.Skull)
})
```

##  Step 5
Jetzt bist du gefragt, unser elektronisches Haustier glücklich zu machen, wenn wir zum Beispiel unseren micro:bit `||input:schütteln|||`` …, oder etwa unser elektronisches Haustier ``||music:gähnen||`` und einschlafen zu lassen, wenn wir es `30` Sekunden lang nicht berühren.

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