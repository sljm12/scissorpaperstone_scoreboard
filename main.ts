let player1Position = ""
let player2Position = ""
let winner = ""

function check(p1:String, p2:String){
    if(p1 == p2){
        return 0;
    }
    if(p1 == "scissor" && p2 == "paper"){
        return 1;
    }else if (p1 == "paper" && p2 =="stone"){
        return 1;
    }else if (p1=="stone" && p2=="scissor"){
        return 1;
    }else{
        return 2;
    }
}
function checkScore(){
    if(player1Position != "" && player2Position != ""){
        let v = check(player1Position, player2Position);
        game.showLongText("" + v + " Wins", DialogLayout.Bottom)
        player1Position = ""
        player2Position = ""
    }
}
sdwireless.sdw_onmbit_value(function (name, value) {
    game.showLongText("" + name + value, DialogLayout.Bottom)
    if(name != "ready"){
        if(value == 1){
            player1Position = name
        }else{
            player2Position = name
        }
        checkScore();
    }
})
sdwireless.sdw_init()
sdwireless.sdw_set_radiogp(1)
let mySprite = sprites.create(assets.image`Apple`, SpriteKind.Player)
scene.setBackgroundImage(projectImages.Background)
mySprite.setPosition(10, 10)
game.showLongText("It works", DialogLayout.Bottom)
