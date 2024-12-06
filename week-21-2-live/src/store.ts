interface Game {
  id: string;
  whitePlayer: string;
  blackPlayer: string;
  moves: string[];
}

// export const games: Game[] = [];

// creating an singlton instance and using singleton pattern 

class GameManager {
  games: Game[] = [];
  private static instance: GameManager;
  private constructor() {
    this.games = [];
  }

  static getInstance() {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }

  addMove(gamesId: string, move: string) {
    const game = this.games.find((game) => game.id === gamesId);
    game?.moves.push(move);
  }

  addGame(gamesId: string) {
    const game: Game = {
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

export const gameManager = GameManager.getInstance();
