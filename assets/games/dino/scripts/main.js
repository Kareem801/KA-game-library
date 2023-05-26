import { Game } from "./game";
    
window.addEventListener("load", function(){
        const canvas = document.getElementById("canvas1");

        if (canvas) {
            const ctx = canvas.getContext("2d");

            console.log('ctx', ctx)
            
            canvas.width = 1000;
            canvas.height = 500;
        
            if(localStorage.getItem('highScore') == null) {
                localStorage.setItem("highScore", 0); 
            }

            const game = new Game(canvas.width, canvas.height, canvas);
            let lastTime = 0;
            
            function animate(timeStamp){
                const deltaTime = timeStamp - lastTime;
                lastTime = timeStamp;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                game.update(deltaTime);
                game.draw(ctx);
                requestAnimationFrame(animate);
            }

            animate(0);
        }
    })
