// 1. (Nên làm) Định nghĩa cấu trúc cho một cầu thủ
//    để TypeScript biết 'players' là mảng chứa cái gì.
type PlayerInfo = {
    ten: string;
    tuoi: number;
    vitri: string;
    quequan: string;
};

// 2. Tên Class nên viết hoa
class Team {
    // 3. Khai báo kiểu cho thuộc tính
    name: string;
    players: PlayerInfo[]; // 'players' là một mảng chứa các đối tượng PlayerInfo

    // 4. Khai báo kiểu cho tham số của constructor
    constructor(name: string) {
        this.name = name;
        this.players = []; // Khởi tạo mảng rỗng
    }

    // 5. Khai báo kiểu cho tất cả tham số của addPlayer phương thức
    addPlayer(ten: string, tuoi: number, vitri: string, quequan: string): void {
        
        // 6. Sửa lỗi cú pháp khi tạo object (dùng kiểu PlayerInfo)
        const newPlayer: PlayerInfo = {
            ten,
            tuoi,
            vitri,
            quequan
        };

        this.players.push(newPlayer);
    }

    // (Hàm này bạn đã viết đúng)
    listPlayer(): void {
        console.log(`Đội bóng ${this.name} gồm các thành viên:`);
        this.players.forEach((player, index) => {
        console.log(`${index + 1}. ${player.ten}  ${player.tuoi}  ${player.vitri}  ${player.quequan}`);
        });
    }
}

// ------------------------------------
// Cách sử dụng
// ------------------------------------
const cauthu = { ten: "Huệ", tuoi: 25, vitri: "tiền vệ", quequan: "hà nội" };

const doiBong = new Team("Đội bóng thiếu lâm");

// Dữ liệu 'tuoi' phải là number (số) vì ở trên ta khai báo 'tuoi: number'
doiBong.addPlayer("Mạnh sỹ", 24, "tiền đạo", "hà nội"); 
doiBong.addPlayer("Phương hiệp", 22, "tiền vệ", "hà nội");
doiBong.addPlayer(cauthu.ten, cauthu.tuoi, cauthu.vitri, cauthu.quequan);

doiBong.listPlayer();