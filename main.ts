let coins = 12
let apple_price = 2
let apple_quantity = 2
let banana_price = 3
let banana_quantity = 4
let chicken_leg_price = 7
let chicken_leg_quantity = 3
scene.setBackgroundColor(2)
game.splash("You have " + coins + " from the start ")
coins = coins + apple_price * apple_quantity
game.splash("Now You have " + coins + " from selling the apples")
coins = coins + chicken_leg_price * chicken_leg_quantity
game.splash("Now You have " + coins + " from selling the chicken legs")
coins = coins + banana_price * banana_quantity
game.splash("Now You have " + coins + " from selling the bananas")
game.splash("welcome")
