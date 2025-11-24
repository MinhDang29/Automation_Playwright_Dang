const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Engineer"
};
/*1. Cho đối tượng person trên.
Sử dụng Object Destructuring để trích xuất các thuộc tính firstName, lastNa
và age vào các biến riêng biệt.
Hiển thị các giá trị của biến vừa khai báo trên console.
*/
const { firstName, lastName, age } = person;
console.log(firstName, lastName, age);

/*
2. Cho một object car với các thuộc tính brand, model, year, color. Hãy sử dụng
object destructuring để lấy ra 4 thuộc tính này và in ra console.
*/
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "White",
};

const { brand, model, year, color } = car;
console.log(brand, model, year, color);

/*
3. Cho một object user với thuộc tính name. Hãy sử dụng object destructuring để
lấy ra thuộc tính name và đặt giá trị mặc định là "Guest" nếu thuộc tính name
không tồn tại. In ra console giá trị của name.
*/
const user = {
}

const { name = 'YahSure' } = user;
console.log(name);
/*
4. Cho một object product với thuộc tính price. Hãy sử dụng object destructuring để
lấy ra thuộc tính price và đặt giá trị mặc định là 0 nếu thuộc tính price không tồn
tại. In ra console giá trị của price
*/
const product = {
    // ...
};

const { price = 0 } = user;
console.log(price);
/*
5. Cho một object book với thuộc tính title. Hãy sử dụng object destructuring để lấy
ra thuộc tính title và đặt alias là bookTitle. In ra console giá trị của bookTitle.
*/
const book = {
    title: 'Mắc Biếc'
}

const { title: bookTitle } = book;
console.log(bookTitle);

/*
6. Cho một object movie với thuộc tính director. Hãy sử dụng object destructuring
để lấy ra thuộc tính director và đặt alias là filmDirector.In ra console giá trị c
filmDirect
*/
const movie = {
    director: 'Lý Hải'
}

const { director: filmDirector } = movie;
console.log(filmDirector);

/*
7. Cho một object person với thuộc tính address là một object chứa các thuộc tính
street, city, country. Hãy sử dụng object destructuring để lấy ra thuộc tính street
nằm sâu trong object address. In ra console giá trị của street
*/
const person2 = {
    address: {
        street: 'Lê Lợi',
        city: 'HCM',
        country: 'VN'
    }
}

const { address: { street } } = person2;
console.log(street);

/*
8. Cho một object product với thuộc tính details là một object chứa các thuộc tính
brand, model, color. Hãy sử dụng object destructuring để lấy ra thuộc tính model
nằm sâu trong object details. In ra console giá trị của model
*/

const product2 = {
    details: {
        brand1: 'Samsung',
        model1: 'Galaxy S25 Ultra',
        color1: 'Titanium'
    }
}

const { details: { brand1, model1, color1 } } = product2;
console.log(brand1, model1, color1);