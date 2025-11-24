class Customer {
    id: string;
    name: string;
    email: string;
    phone: number;

    constructor(id: string, name: string, email: string, phone: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    displayInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
    }

    updateEmail(newEmail: string): void {
        this.email = newEmail;
    }
}

// In ra thong tin khach hang luc chua cap nhat email
const customerInfo = new Customer("A123", "Andy", "test@gmail.com", 1234567890);
console.log("Customer Information before updating email:");
customerInfo.displayInfo();

// In ra thong tin khach hang sau khi cap nhat email
customerInfo.updateEmail("test1@gmail.com");
console.log("Customer Information after updated email:");
customerInfo.displayInfo();
