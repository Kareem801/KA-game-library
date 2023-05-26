/**
 * Game Class
 */

import Player from "./player.js";
import InputHandler from "./input.js";
import Background from "./background.js";
// import Text from "./text.js";
import { Text, Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, H, I } from "./text.js";
import { CactusBigTwo, CactusBigFour, CactusBigOne, CactusSmallOne, CactusSmallTwo, CactusSmallThree, Pterodactyl } from "./enemy.js";

export class Game {
    constructor(width, height, canvas){
        this.width = width;
        this.height = height;
        this.groundHeight = height - height/8;
        this.player = new Player(this);
        this.input = new InputHandler(this, canvas);
        this.background = new Background(this);
        this.text = new Text() 
        this.characters = [new Zero(this, this.scoreListed), new One(this, this.scoreListed), new Two(this, this.scoreListed), new Three(this, this.scoreListed), new Four(this, this.scoreListed), new Five(this, this.scoreListed), new Six(this, this.scoreListed), new Seven(this, this.scoreListed), new Eight(this, this.scoreListed), new Nine(this, this.scoreListed), new H(this, this.scoreListed), new I(this, this.scoreListed)];
        this.enemies = [];
        this.score = 1;
        this.scoreListed = []
        this.scoreX = this.width - 150;
        this.highScoreListed = []
        this.scoreAnchor = this.scoreX;
        this.gravity = 10;
        this.speed = 13;
        this.enemyPick;
        // this.pointAudio = new Audio("../audio/point.wav");
        this.enemyTimer = 0;
        this.enemyInterval = 500;
        this.scoreTimer = 0;
        this.scoreInterval = 40;
        setInterval(this.scoreUp, 1000)
    }
    update(deltaTime){;
        this.background.update()
        this.player.update(this.input.keys, this.input.touchStarted);
        
        if (this.scoreTimer > this.scoreInterval){
            this.scoreTimer = 0;
            this.scoreUp();
        } else {
            this.scoreTimer += deltaTime;
        }


        if (this.enemyTimer > this.enemyInterval){
            if (Math.random() > 0.5) this.addEnemy();
            this.enemyTimer = 0;
        } else{
            this.enemyTimer += deltaTime;
        }
        
        this.enemies.forEach(enemy => {
            enemy.update();
            if(enemy.markedForDeletion) this.enemies = this.enemies.filter(e => e != enemy)
        });
    }
    
    draw(context){
        this.background.draw(context)
        this.enemies.forEach(enemy => {
            enemy.draw(context);
        });
        this.player.draw(context);
        
        this.scoreListed.forEach( character =>{
            this.characters[character].draw(context, this.scoreX);
            this.scoreX += this.text.textSpacing;
        })
        this.scoreX = 650;
        this.characters[10].draw(context,this.scoreX);
        this.scoreX += this.text.textSpacing;
        this.characters[11].draw(context,this.scoreX);
        this.scoreX += 50;
        
        if (localStorage.getItem("highScore") === "undefined") localStorage.setItem("highScore", 0);
        this.highScoreListed = [...localStorage.getItem("highScore")+''].map(n=>+n)
        
        this.highScoreListed.forEach( character =>{
            this.characters[character].draw(context, this.scoreX);
            this.scoreX += this.text.textSpacing;
        })
        
            this.scoreX = this.scoreAnchor;
    }

    scoreUp(){
        if (this.speed != 0) this.score = this.score+1;
        if (this.score % 100 === 0){
            this.speed += 1;
            // this.pointAudio.play();
        }
        this.scoreListed = [...this.score+''].map(n=>+n)
    }

    addEnemy(){
        this.enemyPick = Math.random();
        if (this.enemyPick < 0.3 && this.score > 400)
            this.enemies.push(new Pterodactyl(this))
        else {
                this.enemyPick = Math.random();
                if (this.enemyPick>=0.9)this.enemies.push(new CactusBigFour(this));
                else if (this.enemyPick>=0.7) this.enemies.push(new CactusBigTwo(this));
                else if (this.enemyPick>=0.5) this.enemies.push(new CactusSmallOne(this));
                else if (this.enemyPick>=0.3) this.enemies.push(new CactusSmallTwo(this));
                else if (this.enemyPick>=0.1) this.enemies.push(new CactusSmallThree(this));
                else this.enemies.push(new CactusBigOne(this));
            }
    }
    
}