class Enemy {
    constructor(game){
        this.game = game;
    }
    draw(context){
        context.drawImage(this.image, (this.width * this.frameX) + this.frameOffsetX, (this.height * this.frameY) + this.frameOffsetY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}

export class CactusBigTwo extends Enemy{
    constructor(game){
        super();
        this.game = game;
        this.frameX = 0;
        this.frameY = 0;
        this.width = 98;
        this.height = 102;
        this.x = this.game.width;
        this.y = this.game.groundHeight-this.height;
        this.image = document.getElementById("sprites");
        this.frameOffsetX = 652;
        this.frameOffsetY = 0;
        this.markedForDeletion = false;
    }
    update(){
        this.x -= this.game.speed;
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }
}

export class CactusBigFour extends Enemy{
    constructor(game){
        super();
        this.game = game;
        this.frameX = 0;
        this.frameY = 0;
        this.width = 150;
        this.height = 102;
        this.x = this.game.width;
        this.y = this.game.groundHeight-this.height;
        this.image = document.getElementById("sprites");
        this.frameOffsetX = 802;
        this.frameOffsetY = 0;
        this.markedForDeletion = false;
    }
    update(){
        this.x -= this.game.speed;
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }
}

export class CactusBigOne extends Enemy{
    constructor(game){
        super();
        this.game = game;
        this.frameX = 0;
        this.frameY = 0;
        this.width = 50;
        this.height = 102;
        this.x = this.game.width;
        this.y = this.game.groundHeight-this.height;
        this.image = document.getElementById("sprites");
        this.frameOffsetX = 752;
        this.frameOffsetY = 0;
        this.markedForDeletion = false;
    }
    update(){
        this.x -= this.game.speed;
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }
}

export class CactusSmallOne extends Enemy{
    constructor(game){
        super();
        this.game = game;
        this.frameX = 0;
        this.frameY = 0;
        this.width = 34;
        this.height = 72;
        this.x = this.game.width;
        this.y = this.game.groundHeight-this.height;
        this.image = document.getElementById("sprites");
        this.frameOffsetX = 446;
        this.frameOffsetY = 0;
        this.markedForDeletion = false;
    }
    update(){
        this.x -= this.game.speed;
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }
}

export class CactusSmallTwo extends Enemy{
    constructor(game){
        super();
        this.game = game;
        this.frameX = 0;
        this.frameY = 0;
        this.width = 68;
        this.height = 72;
        this.x = this.game.width;
        this.y = this.game.groundHeight-this.height;
        this.image = document.getElementById("sprites");
        this.frameOffsetX = 480;
        this.frameOffsetY = 0;
        this.markedForDeletion = false;
    }
    update(){
        this.x -= this.game.speed;
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }
}

export class CactusSmallThree extends Enemy{
    constructor(game){
        super();
        this.game = game;
        this.frameX = 0;
        this.frameY = 0;
        this.width = 102;
        this.height = 72;
        this.x = this.game.width;
        this.y = this.game.groundHeight-this.height;
        this.image = document.getElementById("sprites");
        this.frameOffsetX = 548;
        this.frameOffsetY = 0;
        this.markedForDeletion = false;
    }
    update(){
        this.x -= this.game.speed;
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }
}

export class Pterodactyl extends Enemy{
    constructor(game){
        super();
        this.game = game;
        this.width = 92;
        this.height = 82;
        this.frameOffsetX = 260;
        this.frameOffsetY = 0;
        this.frameX = 1;
        this.frameY = 0;
        this.maxFrame = 1;
        this.frameTimer = 0;
        this.fps = 10;
        this.frameInterval = 1000/this.fps;
        this.heightPick = Math.random();
        this.x = this.game.width;
        if (this.heightPick > 0.7) this.y = this.game.groundHeight-150; //middle height
        else if (this.heightPick > 0.4) this.y = this.game.groundHeight-90 //low height
        else if (this.heightPick > 0) this.y = this.game.groundHeight-180 //high height
        this.image = document.getElementById("sprites");
        this.markedForDeletion = false;
    }
    update(){
        this.x -= this.game.speed;
        if (this.x + this.width < 0) this.markedForDeletion = true;
        if (this.frameTimer > this.frameInterval){
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        }
        else this.frameTimer += 16
    }
}
