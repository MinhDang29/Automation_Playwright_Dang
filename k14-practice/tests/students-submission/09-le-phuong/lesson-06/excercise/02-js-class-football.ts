class Team {
    name: string;
    players: string[];

    constructor(name: string) {
        this.name = name;
        this.players = [];
    }

    addPlayer(playerName: string) {
        this.players.push(playerName);
    }

    listPlayers(teamname: string) {
        if (teamname ===this.name){
         console.log(`Danh sách cầu thủ của đội ${this.name}:`);
        for (let playername of this.players){
            console.log(playername)
        }
       }else{
        console.log("Invalid teamname")
       }
    }
}
// Sử dụng class Team
let teamName= "Việt Nam"
const team = new Team(teamName);
team.addPlayer("Hiếu");
team.addPlayer("Dũng");
team.listPlayers(teamName);
