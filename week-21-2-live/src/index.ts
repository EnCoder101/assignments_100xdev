import { gameManager } from "./store";
import { startLogger } from "./logger";

// state managerment in BE

// export const gameManager = new GameManager();

startLogger()

setInterval(()=>{
    // games.push({
    //     id : Math.random().toString(),
    //     whitePlayer: "Alice",
    //     blackPlayer: "Bob",
    //     moves: []
    // })
    gameManager.addGame(Math.random().toString());
},5000)