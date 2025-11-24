// Khai báo class LoginPage với method: fillLogin(username, password)
class Login {
    username;
    password;

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    fillLogin() {
        console.log(`${this.username} + ${this.password}`);
    }
}

const loginPage = new Login("Phuong", "1234");
loginPage.fillLogin();