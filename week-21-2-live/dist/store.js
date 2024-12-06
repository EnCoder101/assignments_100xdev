"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = void 0;
// export const games: Game[] = [];
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addMove(gamesId, move) {
        const game = this.games.find(game => game.id === gamesId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gamesId) {
        const game = {
            id: gamesId,
            whitePlayer: "Alice",
            blackPlayer: "Bob",
            moves: [],
        };
        this.games.push(game);
    }
    log() {
        return console.log(this.games);
    }
}
exports.gameManager = new GameManager();
