class Team {
    name: string;
    players;

    constructor(name) {
        this.name = name;
        this.players = [];
    };

    addPlayer(playerName) {
        this.players.push(playerName)
    };

    listPlayers() {
        console.log(`Danh sách các cầu thủ của team ${this.name} là: ${this.players}`)
    };
}

const team1 = new Team("Young Generation");
team1.addPlayer("Nhung");
team1.addPlayer("Nhi");
team1.addPlayer("Uyen");
team1.addPlayer("Hong");
team1.listPlayers();


