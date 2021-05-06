namespace SpriteKind {
    export const Cloud = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.Cloud, function (sprite) {
    game.over(true, effects.confetti)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let RainDrop: Sprite = null
let Cloud = sprites.createProjectileFromSide(assets.image`Cloud`, 10, 0)
Cloud.y = 60
Cloud.setKind(SpriteKind.Cloud)
game.onUpdateInterval(50, function () {
    RainDrop = sprites.createProjectileFromSprite(assets.image`RD`, Cloud, 0, 30)
    RainDrop.y += 3
    RainDrop.x += randint(-10, 10)
})
