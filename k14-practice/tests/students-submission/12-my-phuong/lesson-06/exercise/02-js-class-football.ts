interface Player {
    namePlayer: string;
    position: string;
    jerseyNumber: number;
}

class Team {
    name: string;
    players: Player[];
    constructor(name: string) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    listPlayer(): void {
        console.log("List player: ");
        for (let i = 0; i < this.players.length; i++) {
            console.log(`Player name: ${this.players[i].namePlayer}, Position: ${this.players[i].position}, Jersey Number: ${this.players[i].jerseyNumber}`);
        }
    }
}

const teamInfo = new Team("America football team");

// Them cac cau thu vao doi bong
teamInfo.addPlayer({ namePlayer: "Andy", position: "Goal Keeper", jerseyNumber: 1 });
teamInfo.addPlayer({ namePlayer: "Bobby", position: "Midfielder", jerseyNumber: 10 });
teamInfo.addPlayer({ namePlayer: "Marry", position: "Defender", jerseyNumber: 6 });
teamInfo.addPlayer({ namePlayer: "Kelvin", position: "Midfielder", jerseyNumber: 8 });
teamInfo.addPlayer({ namePlayer: "David", position: "Forward", jerseyNumber: 9 });

// In ra danh sach cac cau thu
teamInfo.listPlayer();