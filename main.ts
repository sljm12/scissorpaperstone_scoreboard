let player1Position = ""
let player2Position = ""
let scoreBoard=new Play.ScoreBoard()

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

function showScore(){
    //player1ScoreSprite.setImage(projectImages.NumbersGreen[player1Score])
    //player2ScoreSprite.setImage(projectImages.NumbersGreen[player2Score])
}
sdwireless.sdw_onmbit_value(function (name, value) {
    game.showLongText("" + name + value, DialogLayout.Bottom)
    if(name != "ready"){
        if(value == 1){
            player1Position = name
        }else{
            player2Position = name
        }
        //Check for who is Winning
        if (player1Position != "" && player2Position != "") {
            let v = check(player1Position, player2Position);
            game.showLongText("" + v + " Wins", DialogLayout.Bottom)
            player1Position = ""
            player2Position = ""
            if(v==1){
                scoreBoard.increasePlayer1Score();
            }else if(v==2){
                scoreBoard.increasePlayer2Score();
            }
            scoreBoard.showScore();
        }
    }
})
sdwireless.sdw_init()
sdwireless.sdw_set_radiogp(1)
//let player1ScoreSprite = sprites.create(projectImages.NumbersGreen[0], SpriteKind.Player)
//let player2ScoreSprite = sprites.create(projectImages.NumbersRed[0], SpriteKind.Player)
scene.setBackgroundImage(projectImages.Background)
//player1ScoreSprite.setPosition(38, 58)
//player2ScoreSprite.setPosition(112, 58)
scoreBoard.showScore()
game.showLongText("It works", DialogLayout.Bottom)
