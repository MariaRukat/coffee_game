import {Game} from "./game";

document.addEventListener('DOMContentLoaded', function(){

    const game = new Game();

    game.showFace();
    game.showCoffee();
    game.startGame();

    document.addEventListener("keydown", event => game.turnFace(event));


});