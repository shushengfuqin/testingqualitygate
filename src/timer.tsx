function timerGame(){
    console.log("Ready ... Go");
    setTimeout(() => {
        console.log("Time's up -- STOP!");
    }, 1000);
}

export {timerGame}