export class Text{
    constructor(){
        this.width = 20;
        this.height = 23;
        this.frameOffsetX = 953;
        this.frameOffsetY = 0;
        this.y = 65;
        this.textSpacing = 20;
        this.image = document.getElementById("sprites")
    }
    draw(context, frameX, frameY, x){
        context.drawImage(this.image, (frameX * this.width)+this.frameOffsetX, (frameY * this.height)+this.frameOffsetY, this.width, this.height, x, this.y, this.width, this.height);
    }
}

export class Zero extends Text{
    constructor(context){
        super();
        this.frameX = 0
        this.frameY = 0
    }
    draw(context, x){
        super.draw(context, this.frameX, this.frameY, x);
    }
}
export class One extends Text{
    constructor(context){
        super(); 
        this.frameX = 1
        this.frameY = 0
    }
    draw(context, x){
        super.draw(context, this.frameX, this.frameY, x);
    }
}
export class Two extends Text{
    constructor(context){
        super();
        this.frameX = 2
        this.frameY = 0
    }
    draw(context, x){
        super.draw(context, this.frameX, this.frameY, x);
    }
}
export class Three extends Text{
    constructor(context){
        super();
        this.frameX = 3
        this.frameY = 0
    }
    draw(context, x){
        super.draw(context, this.frameX, this.frameY, x);
    }
}
export class Four extends Text{
    constructor(context){
        super();
        this.frameX = 4
        this.frameY = 0
    }
    draw(context, x){
        super.draw(context, this.frameX, this.frameY, x);
    }
}
export class Five extends Text{
    constructor(context){
        super();
        this.frameX = 5
        this.frameY = 0
    }
    draw(context, x){
        super.draw(context, this.frameX, this.frameY, x);
    }
}
export class Six extends Text{
    constructor(context){
        super();
        this.frameX = 6
        this.frameY = 0
    }
    draw(context, x){
        super.draw(context, this.frameX, this.frameY, x);
    }
}
export class Seven extends Text{
    constructor(context){
        super();
        this.frameX = 7
        this.frameY = 0
    }
    draw(context, x){
        super.draw(context, this.frameX, this.frameY, x);
    }
}
export class Eight extends Text{
    constructor(context){
        super();
        this.frameX = 8
        this.frameY = 0
    }
    draw(context, x){
        super.draw(context, this.frameX, this.frameY, x);
    }
}
export class Nine extends Text{
    constructor(context){
        super();
        this.frameX = 9
        this.frameY = 0
    }
    draw(context, x){
        super.draw(context, this.frameX, this.frameY, x);
    }
}

export class H extends Text{
    constructor(context){
        super();
        this.frameX = 10
        this.frameY = 0
    }
    draw(context, x){
        super.draw(context, this.frameX, this.frameY, x);
    }
}

export class I extends Text{
    constructor(context){
        super();
        this.frameX = 11
        this.frameY = 0
    }
    draw(context, x){
        super.draw(context, this.frameX, this.frameY, x);
    }
}