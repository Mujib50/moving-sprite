input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 2; index++) {
        for (let Y = 0; Y <= 1; Y++) {
            basic.pause(100)
            Sprite.change(LedSpriteProperty.Y, -1 + index)
            basic.pause(100)
        }
        for (let X = 0; X <= 1; X++) {
            basic.pause(100)
            Sprite.change(LedSpriteProperty.X, -1 + index)
            basic.pause(100)
        }
    }
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(3, 3)
let P = -2
basic.forever(function () {
	
})
