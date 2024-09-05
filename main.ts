input.onButtonPressed(Button.A, function () {
    basic.showString("BENVIDAS E BENVIDOS")
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.showString("PULSA B")
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        # # # . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # .
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C E G E C E G E ", 120), music.PlaybackMode.UntilDone)
    basic.showString("IMOS AO ESCENARIO DE AUDIO")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("TECNOLOXIA PARA CONVIVIR")
    basic.clearScreen()
    music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        # . # . #
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . # . #
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . # . #
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
    basic.showString("AXITAME")
})
basic.showIcon(IconNames.Happy)
basic.clearScreen()
basic.showString("PULSA A")
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    . . # # #
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . # . . .
    . # # # #
    . # . . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.clearScreen()
