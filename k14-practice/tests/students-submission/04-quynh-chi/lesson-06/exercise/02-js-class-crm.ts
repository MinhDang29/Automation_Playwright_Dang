class Customer {
  id: number;
  name: string;
  email: string;
  phone: string;

  constructor(id: number, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  displayInfo() {
    console.log(
      `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`
    );
  }

  updateEmail(newEmail: string) {
    this.email = newEmail;
  }
}

let customerInfor = new Customer(
  1,
  "Quỳnh Chi",
  "quynhchi@prepedu.com",
  "0382909397"
);
customerInfor.displayInfo();
customerInfor.updateEmail("chinguyen@prepedu.vn");
customerInfor.displayInfo();
