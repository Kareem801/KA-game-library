const states = {
    RUNNING: 0,
    CROUCHING: 1,
    LOSS: 2
}

class State{
    constructor(state){
        this.state = state;
    }
}

export class Running extends State{
    constructor(player){
        super("RUNNING");
        this.player = player;
    }
    enter(){
        this.player.width = 88;
        this.player.height = 97;
        this.player.frameY = 0;
        this.player.frameOffsetX = 1338;
        this.player.frameOffsetY = 0;
        this.player.maxFrame = 3;
        this.player.frameX = 0;
        this.player.y = 350.5
        this.player.weight = 1.5;
    }
    handleInput(input){
        if (input.includes("ArrowDown") && !this.player.offGround()){
            this.player.setState(states.CROUCHING);
        }
    } 
}

export class Crouching extends State{
    constructor(player){
        super("CROUCHING");
        this.player = player;
    }
    enter(){
        this.player.frameY = 0;
        this.player.maxFrame = 1;
        this.player.frameOffsetX = 1865;
        this.player.frameOffsetY = 35;
        this.player.width = 118;
        this.player.height = 60;
        this.player.frameX = 0;
        this.player.y = 380;
        this.player.weight = 1.5;
    }
    handleInput(input){
        if (!input.includes("ArrowDown") && !this.player.offGround()){
            this.player.setState(states.RUNNING);
        }
    } 
}

export class Loss extends State{
    constructor(player){
        super("LOSS");
        this.player = player;
    }
    enter(){
        this.player.frameY = 0;
        this.player.maxFrame = 0;
        this.player.frameOffsetX = 1779;
        this.player.frameOffsetY = 0;
        this.player.width = 89;
        this.player.height = 97;
        this.player.frameX = 0;
        this.player.y = 350.5;
        this.player.weight = 1.5;
    }
    handleInput(input){
        this.player.setState(states.LOSS);
    } 
}