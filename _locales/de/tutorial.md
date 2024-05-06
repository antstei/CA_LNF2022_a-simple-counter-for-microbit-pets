# Ein verspieltes micro:bit-Pet-Tutorial

## Step 1

Um ein verspieltes elektronisches Haustier zu programmieren, lassen wir den micro:bit – zusätzlich zum Anzeigen eines ``||basic:freundlichen||`` Gesichts – den Ton ``||music:Hallo||`` ``||basic:beim Start||`` des Programms abspielen.

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

Um zu erkennen, wie lange unser elektronisches Haustier ignoriert wird, lassen wir den micro:bit im ``||Counter:Sekundentakt||`` zählen. Dafür fangen wir ``||basic:beim Start||`` des Programms bei `1` zu zählen an.

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

## Step 3

Um unser elektronisches Haustier zum Leben zu erwecken, lassen wir den micro:bit ein ``||basic:trauriges||`` Gesicht anzeigen und den micro:bit den Ton ``||music:traurig||`` abspielen, nachdem wir unser elektronisches Haustier für `5` Sekunden nicht berührt haben.

Damit unser elektronisches Haustier weiterhin funktioniert, wenn wir es `5` Sekunden lang nicht in die Hand genommen haben, lassen wir unser Programm weiter ausführen, indem wir die Option „``||Counter:zähle weiter||``" auswählen.

```block
Counter.onCountEvent(5, CountActions.Continue, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
})
```

## Step 4

Damit unser elektronisches Haustier sich freut, sobald wir das micro:bit-Logo berühren, lassen wir den micro:bit ein ``||basic:glückliches||`` Gesicht anzeigen und den Ton ``||music:glücklich||`` abspielen, wenn das Logo ``||input:berührt|||`` wird.

Da unser elektronisches Haustier inzwischen eine Zeit lang zufrieden ist, lassen wir den micro:bit im ``||Counter:gleichen Takt||`` weiter zählen, fangen dabei allerdings ``||Counter:wieder von vorne||``, also bei `1` an.

```block
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
    Counter.startFromMinAgain()
})
```

## Step 5

Weil unser elektronisches Haustier viel Aufmerksamkeit braucht, lassen wir den micro:bit ein ``||basic:Totenkopf||``-Gesicht anzeigen und den Ton ``||music:geheimnisvoll||`` abspielen, nachdem wir unser elektronisches Haustier für `15` Sekunden nicht angefasst haben.

Damit unser elektronisches Haustier außerdem nicht mehr funktioniert, wenn wir es `15` Sekunden lang nicht in die Hand genommen haben, beenden wir die Ausführung unseres Programms, indem wir die Option „``||Counter:höre auf zu zählen||``" auswählen.

```block
Counter.onCountEvent(15, CountActions.Stopp, function () {
    basic.showIcon(IconNames.Skull)
    soundExpression.mysterious.playUntilDone()
})
```

## Step 6

Jetzt bist du gefragt, unser elektronisches Haustier glücklich zu machen, wenn wir zum Beispiel unseren micro:bit ``||input:schütteln||`` …, oder es etwa ``||music:gähnen||`` und einschlafen zu lassen, wenn wir es `10` Sekunden lang nicht berührt haben.

### Literatur

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
