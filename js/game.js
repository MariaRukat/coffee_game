import {Coffee} from "./coffee";
import {Face} from "./face";

class Game{
        constructor(){
            this.board = document.querySelectorAll('.board-box');
            this.face = new Face();
            this.coffee = new Coffee();
            this.score = 0;
        }

        index(x,y){
            return x + (y*10);
        }

        startGame(){
            this.interval = setInterval(()=> {
                this.moveFace();
            },300);
        }

        showFace(){
            this.hideVisibleFace();
            this.board[this.index(this.face.x, this.face.y)].classList.add('face');
        };
    
        showCoffee(){
            this.board[this.index(this.coffee.x, this.coffee.y)].classList.add('coffee');
        };

        hideVisibleFace(){
            if (document.querySelector('.face')) {
                document.querySelector('.face').classList.remove('face');
            }
        };

        moveFace(){
            if(this.face.direction === 'right'){
                this.face.x = this.face.x + 1;
            }else if(this.face.direction === 'left'){
                this.face.x = this.face.x - 1;
            }else if(this.face.direction === 'down'){
                this.face.y = this.face.y + 1;
            }else if(this.face.direction === 'up'){
                this.face.y = this.face.y - 1;
            }
            this.checkCoffeeCollision();
            this.gameOver();
            this.showFace();  
        };
    
        turnFace(event){
            switch(event.which){
                case 37:
                    this.face.direction = 'left';
                    break;
                case 38:
                    this.face.direction = 'up';
                    break;
                case 39:
                    this.face.direction = 'right';
                    break;
                case 40:
                    this.face.direction = 'down';
                    break;
            }
        };
    
        checkCoffeeCollision(){
            if (this.face.x === this.coffee.x && this.face.y === this.coffee.y){
                document.querySelector('.coffee').classList.remove('coffee');
                this.score++;
                document.querySelector('#score strong').innerText = this.score;
                this.coffee = new Coffee();
                this.showCoffee();
            }
        };
    
        gameOver(){
            if(this.face.x<0 || this.face.x>9 || this.face.y<0 || this.face.y>9){
                clearInterval(this.interval);
                this.hideVisibleFace();
                document.querySelector('#over').classList.remove('invisible');
                document.querySelector('#over strong').innerText = this.score;
                if(this.score >=4){
                    document.querySelector('#over .end-face').classList.add("happy-face");
                }else if(this.score >=2){
                    document.querySelector('#over .end-face').classList.add("rested-face");
                }else{
                    document.querySelector('#over .end-face').classList.add("sleepy-face");
                }
            }
        };
}

export {Game};
