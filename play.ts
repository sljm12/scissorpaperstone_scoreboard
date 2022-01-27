// Add your code here
namespace Play{
    export class ScoreBoard{
        player1Score:int8;
        player2Score:int8;
        player1Sprite:Sprite;
        player2Sprite:Sprite;

        constructor(){
            this.player1Sprite = sprites.create(projectImages.NumbersGreen[0], SpriteKind.Player)
            this.player2Sprite = sprites.create(projectImages.NumbersRed[0], SpriteKind.Player)
            this.player1Sprite.setPosition(38,58)
            this.player2Sprite.setPosition(112,58)
            this.player1Score = 0
            this.player2Score = 0
        }

        showScore(){
            this.player1Sprite.setImage(projectImages.NumbersGreen[this.player1Score])
            this.player2Sprite.setImage(projectImages.NumbersRed[this.player2Score])
        }

        increasePlayer1Score(){
            this.player1Score+=1;
        }

        increasePlayer2Score(){
            this.player2Score+=1;
        }
    }
}