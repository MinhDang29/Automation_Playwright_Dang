/*Mô tả: Bạn đang phát triển một ứng dụng quản lý đội bóng. Hãy tạo một class để lưu trữ
thông tin cầu thủ và các phương thức để thao tác với dữ liệu này.
Yêu cầu:
- Tạo một class team chứa các thuộc tính: name, players (mảng các cầu thủ).
- Tạo một phương thức addPlayer để thêm cầu thủ vào đội.
- Tạo một phương thức listPlayers để liệt kê tất cả các cầu thủ trong đội.*/
// class Player {
//     playerName;
//     number;
//     constructor(playerName, number) {
//         this.playerName = playerName;
//         this.number = number;
//     }
//}
// class Team {
//     name;
//     players;
//     constructor(name) {
//         this.name = name;
//         this.players = [];
//     }

//     addPlayer(player) {
//         this.players.push(player);
//     }

//     listPlayers() {
//         console.log(this.players);
//     }
// }
class Player {
    playerName: string;
    number: number;
    constructor(playerName: string, number: number) {
        this.playerName = playerName;
        this.number = number;
    }
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

    listPlayers(): void {
        console.log(this.players);
    }
}
const football = new Team("Quang");
football.addPlayer(new Player("Phương", 10));
football.addPlayer(new Player("Hùng", 98));
football.listPlayers();