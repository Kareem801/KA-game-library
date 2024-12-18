export default class InputHandler{
    constructor(game, canvas){
        this.game = game;
        this.keys = [];
        
        window.addEventListener("keydown", e => {

            if ((e.key === "ArrowDown" ||
                 e.key === "ArrowUp" ||
                 e.key === "ArrowLeft" || 
                 e.key === "ArrowRight" ||
                 e.key === "Enter"
                 ) && this.keys.indexOf(e.key) === -1){
                this.keys.push(e.key), console.log(e.key);
            }
        });
        window.addEventListener("keyup", e => {
            if (e.key === "ArrowDown" || 
                 e.key === "ArrowUp" ||
                 e.key === "ArrowLeft" ||
                 e.key === "ArrowRight" ||
                 e.key === "Enter"){
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });    
    }
}