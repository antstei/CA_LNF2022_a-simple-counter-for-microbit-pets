# Ein fortgeschrittenes verspieltes micro:bit-Pet-Tutorial für die „LNF 2022"

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
Um zu erkennen, wie lange unser elektronisches Haustier ignoriert wird, lassen wir den micro:bit ``||basic:beim Start||`` des Programms bei `1` beginnend im Sekundentakt zählen.

Um dies zu erreichen erstellen wir eine Variable namens „``||varible:vergangenes_sekunden||``" und ``||setzen vergangenes_sekunden auf 1||``.
Außerdem benutzen wir die ``||basic:dauerhaft||``-Schleife, um den micro:bit für `1` Sekunde ≙ `1000` Millisekunden ``||basic:pausieren|`` zu lassen, bevor er ``||varible:vergangenes_sekunden um 1||`` bei jedem Schleifendurchlauf ändern.

```blocks
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
soundExpression.hello.playUntilDone()
vergangenes_sekunden = 1

basic.forever(function () {
    basic.pause(1000)
    vergangenes_sekunden += 1
})
```

## Step 3
Um unserer elektronisches Haustier zum Leben zu erwecken, lassen wir den micro:bit ein trauriges Gesicht anzeigen und einen müden Ton abspielen, nachdem wir unser elektronisches Haustier für `5` Sekunden nicht berührt haben.
Dafür fügen wir eine ``||logic:wenn-dann||``-Anweisung in die ``||basic:dauerhaft||``-Schleife ein, um den micro:bit überprüfen zu lassen, ob ``||variable:vergangenes_sekunden = 5||``. Wenn dies der Fall ist, lassen wir den micro:bit ein ``||basic:trauriges||`` Gesicht anzeigen und den Sound ``||music:traurig||`` abspielen. 

```block
basic.forever(function () {
    basic.pause(1000)
    vergangenes_sekunden += 1
    if (vergangenes_sekunden == 5) {
        basic.showIcon(IconNames.Sad)
        soundExpression.sad.playUntilDone()
    }
})
```

## Step 4
Damit unser elektronisches Haustier sich freut, sobald wir das micro:bit-Logo berühren, lassen wir den micro:bit ein ``||basic:glückliches||`` Gesicht anzeigen und den Ton ``||music:glücklich||`` abspielen, wenn das Logo ``||input:berührt|||`` wird.

Da unser elektronisches Haustier inzwischen eine Zeit lang zufrieden ist, lassen wir den micro:bit im Sekundentakt weiter zählen, fangen dabei allerdings wieder von vorne an, indem wir ``||varible:vergangenes_sekunden auf 1 setzten||``.

```block
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    vergangenes_sekunden = 1
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
})
```

## Step 5
Weil unser elektronisches Haustier viel Aufmerksamkeit braucht, lassen wir den micro:bit ein komisches Gesicht anzeigen und einen eigenartigen Ton abspielen, nachdem wir unser elektronisches Haustier für `15` Sekunden nicht angefasst haben.

Wie zuvor fügen wir eine ``||logic:wenn-dann||``-Anweisung in die ``||basic:dauerhaft||``-Schleife ein, um den micro:bit überprüfen zu lassen, ob ``||variable:vergangenes_sekunden = 15||``. Wenn dies der Fall ist, lassen wir den micro:bit den Ton ``||music:geheimnisvoll||`` abspielen. 
Damit unser elektronisches Haustier außerdem nicht mehr funktioniert, wenn wir es für `15` Sekunden lang nicht in die Hand genommen haben, beenden wir die Ausführung unseres Programms, indem wir den micro:bit mithilfe einer ``||basic:Endlos||``-Schleife ein ``||basic:Totenkopf||``-Gesicht für immer zeichnen lassen.

```block
if (vergangenes_sekunden == 40) {
    soundExpression.mysterious.playUntilDone()
    while (true) {
        basic.showIcon(IconNames.Skull)
    }
}
```

## Step 6
Jetzt bist du gefragt, unser elektronisches Haustier glücklich zu machen, wenn wir zum Beispiel unseren micro:bit ``||input:schütteln||`` …, oder es etwa ``||music:gähnen||`` und einschlafen zu lassen, wenn wir es `10` Sekunden lang nicht berührt haben.

### Literatur
Micro:bit Educational Foundation. (2021). _[micro:bit pet](https://www.microbit.org/projects/make-it-code-it/microbit-pet/)_.

```ghost
basic.forever(function () {
    if (vergangenes_sekunden == 30) {
        basic.showIcon(IconNames.Asleep)
        soundExpression.yawn.playUntilDone()
    }
})

input.onButtonPressed(Button.AB, function () {
    vergangenes_sekunden = 1
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
    vergangenes_sekunden = 1
    basic.showIcon(IconNames.Surprised)
    soundExpression.giggle.playUntilDone()
})
```

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>