"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
// state managerment in BE
// export const gameManager = new GameManager();
(0, logger_1.startLogger)();
setInterval(() => {
    // games.push({
    //     id : Math.random().toString(),
    //     whitePlayer: "Alice",
    //     blackPlayer: "Bob",
    //     moves: []
    // })
    store_1.gameManager.addGame(Math.random().toString());
}, 5000);
