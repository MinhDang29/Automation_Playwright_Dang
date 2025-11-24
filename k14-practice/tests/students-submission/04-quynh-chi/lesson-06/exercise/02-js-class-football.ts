interface Player {
  name: string;
  age: number;
}
class Team {
  name: string;
  players: Player[];

  constructor(name: string, players: Player[]) {
    this.name = name;
    this.players = players;
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  listPlayers() {
    for (let player of this.players) {
      console.log(player);
    }
  }
}

let team = new Team("FC Quỳnh Chi", [
  { name: "Player 1", age: 18 },
  { name: "Player 2", age: 20 },
]);
team.addPlayer({ name: "Play 3", age: 22 });
team.listPlayers();
