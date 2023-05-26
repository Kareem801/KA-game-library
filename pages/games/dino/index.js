import dinoStyles from "../../../assets/games/dino/styles/styles.module.css"
import styles from "../../../styles/Home.module.css"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Navbar } from "../../../src";

// Load in game scripts
import "../../../assets/games/dino/scripts/background";
import "../../../assets/games/dino/scripts/enemy";
import "../../../assets/games/dino/scripts/input";
import "../../../assets/games/dino/scripts/player";
import "../../../assets/games/dino/scripts/playerStates";
import "../../../assets/games/dino/scripts/text";
import { Game } from "../../../assets/games/dino/scripts/game";



const Canvas = props => {
    const canvasRef = useRef()

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        console.log('ctx', ctx)
        
        canvas.width = 1000;
        canvas.height = 500;
    
        if(localStorage.getItem('highScore') == null) {
            localStorage.setItem("highScore", 0); 
        }

        const game = new Game(canvas.width, canvas.height);
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
    }, [])


    return (
        <div>
            <Navbar></Navbar>
            <canvas className={ dinoStyles.canvas1 } id="canvas1" ref={canvasRef}/>
            <img className={ dinoStyles.sprites } id="sprites" src="/sprites.png" alt="sprites"/>
            <canvas className={ dinoStyles.restartbtn} id="restartbtn"></canvas>
        </div>
    )

}
export default Canvas