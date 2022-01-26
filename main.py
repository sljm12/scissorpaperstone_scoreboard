def on_sdw_onmbit_value(name, value):
    game.show_long_text("" + name + str(value), DialogLayout.BOTTOM)
sdwireless.sdw_onmbit_value(on_sdw_onmbit_value)

sdwireless.sdw_init()
sdwireless.sdw_set_radiogp(1)
mySprite = sprites.create(assets.image("""
    Apple
"""), SpriteKind.player)
mySprite.set_position(0, 0)
game.show_long_text("It works", DialogLayout.BOTTOM)