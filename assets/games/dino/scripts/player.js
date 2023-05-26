import { Running, Crouching, Loss } from "./playerStates.js";

export default class Player {
    constructor(game, deltaTime){
        
        this.game = game;
        this.deltaTime = deltaTime;
        this.width = 88;
        this.height = 97;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame;
        this.fps = 25;
        this.frameOffsetX;
        this.frameOffsetY;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.x = 150;
        this.y = this.game.groundHeight-this.height;
        // this.dieAudio = new Audio("assets/die.wav");
        // this.jumpAudio = new Audio("assets/jump.wav");
        this.vy = 0;
        this.jumpHeight = 33;
        this.weight = 1.5;
        this.firstPlay = true;
        this.image = document.getElementById("sprites");
        this.restartbtn = document.getElementById("restartbtn");
        console.log("restartbtn", this.restartbtn)
        this.restartbtn.addEventListener('click', () => {
            if (this.currentState === this.states[2]) this.restart(this.game.speed);
        })
        

        this.states = [new Running(this), new Crouching(this), new Loss(this)];
        this.currentState = this.states[0];
        this.currentState.enter()
    }
    physics(){
        if (this.offGround()) this.y += this.game.gravity;
        if (this.y > 350.5 && this.currentState === this.states[0]) this.y = 350.5;
        if (this.y > 380 && this.currentState === this.states[1]) this.y = 380;
    }

    move(input, touchStarted){    
        if ((input.includes("ArrowUp") || touchStarted) && this.vy === 0 && !this.offGround() && this.currentState != this.states[1] && this.currentState != this.states[2]){
            this.vy = this.jumpHeight;
            // this.jumpAudio.play();
        }
        this.y -= this.vy;
        if (this.offGround()) this.vy -= this.weight;
        else if (!this.offGround()) this.vy = 0;
    }
    
    update(input, touchStarted){
        this.checkCollision()
        this.currentState.handleInput(input);
        if (!this.offGround) this.weight = 1.5;
        this.physics();
        this.move(input, touchStarted);
        
        //animate
        if (this.frameTimer > this.frameInterval){
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += 16;
        }
    }

    restart(){
        this.x = 150;
        this.y = this.game.groundHeight-this.height;
        this.currentState = this.states[0];
        this.currentState.enter()
        this.game.score = 0;
        this.game.speed = 13;
        this.game.enemies = []
        this.firstPlay = true;
    }
    
    setState(state){
        this.currentState = this.states[state]
        this.currentState.enter();
    }

    offGround(){
        return this.y <= this.game.groundHeight-this.height;
    }
    
    checkCollision(){
        this.game.enemies.forEach(enemy => {
            if (enemy.x < this.x + this.width-20 && 
                enemy.x + enemy.width-20 > this.x && 
                enemy.y < this.y + this.height-20 &&
                enemy.y + enemy.height-20 > this.y
            ){
                this.game.speed = 0;
                this.setState(2);
                if (this.firstPlay){
                    // this.dieAudio.play();
                    this.firstPlay = false;
                }
                if (this.game.score > localStorage.getItem("highScore")) {
                    // Update the high score in the local storage
                    localStorage.setItem("highScore", this.game.score);
                  } 
            } else{
                //no collision
            }
        });
    }
    
    draw(context){
            context.drawImage(this.image, (this.frameX*this.width)+this.frameOffsetX, (this.frameY*this.height)+this.frameOffsetY, this.width, this.height, this.x, this.y, this.width, this.height);
            if (this.currentState === this.states[2]){
                context.drawImage(this.image, 953, 28, 383, 24, (this.game.width/2)-(383/2), (this.game.height/2)-(24/2)-20, 383, 24)
                context.drawImage(this.image, 0, 0, 76, 68, (this.game.width/2)-(76/2), (this.game.height/2)+(68/2)-20, 76, 68)
            }
    }
}