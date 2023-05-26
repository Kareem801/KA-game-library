class Layer{
    constructor(game, width, height, image){
        this.game = game;
        this.width = width;
        this.height = height;
        this.image = image;
        this.x = 0;
        this.y = this.game.groundHeight - this.height;
    }
    update(){
        if (this.x < -this.width) this.x = this.x+this.width;
        else this.x -= this.game.speed;
    }
    draw(context){
        context.drawImage(this.image, 0, 104, this.width, this.height, this.x, this.y, this.width, this.height)
        context.drawImage(this.image, 0, 104, this.width, this.height, this.x+this.width, this.y, this.width, this.height)
    }
}

export default class Background {
    constructor(game){
        this.game = game;
        this.width = 2404;
        this.height = 26;
        this.image = document.getElementById("sprites")
        this.layer1 = new Layer(this.game, this.width, this.height, this.image)
        this.backgroundLayers = [this.layer1];
    }
    update(){
        this.backgroundLayers.forEach(layer => {
            layer.update();
        })
    }
    draw(context){
        this.backgroundLayers.forEach(layer =>{
            layer.draw(context);
        })
    }
}