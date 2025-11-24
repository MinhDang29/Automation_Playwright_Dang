class Customer {
    id: number;
    name: string;
    email: string;
    phone: number;

    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    };

    displayInfo() {
        console.log(`Customer id: ${this.id} \nName: ${this.name} \nEmail: ${this.email} \nPhone: ${this.phone}`);
    };

    updateEmail(newEmail) {
        console.log(`New customer email is ${newEmail}`);
    }
}

const customer1 = new Customer(1, "Nhung", "nhung@gmail.com", "012345");
customer1.displayInfo();
customer1.updateEmail("test@gmail.com");