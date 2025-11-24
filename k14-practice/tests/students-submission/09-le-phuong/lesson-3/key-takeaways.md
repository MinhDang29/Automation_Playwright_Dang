# Outline
### Git
 * Undo action
 * Branching model
 * Git Ignore
### Javascript basic
* Logical operator
* Object and Array
* Function

### 1. Git
* Change commit message  
`git commit --ammend` 
 <br>`type i -> go to insert mode `
 <br>`type esc to out insert mode`
 <br>`type ":wq" -> to write and quit`
 <br> `git commit --ammend -m"message"`
    * Restore from staging back to working directtory  `git restore --staged <file>`
    * Restore from repository(comit) back to working directory (uncommit) `git reset HEAD~1 (undo 1 commit)`
* Git Branch
  <br> Purpose: use a branch to create a new working area without affecting the stable working area 
    * Create Branch
    <br>`git branch <ten_branch>`
    <br>`git checkout <ten_branch>`
    <br>`git checkout -b <ten_branch>`

<br>Note: Always create a new branch before executing a copy command from the internet.
* Git Ignore
 <br> Purpose: Used to ignore files that don't need to be tracked by Git.
    <br>`Ignore file <file_name>`
    <br>`Ignore folder <folder-name>/`

### 2. JavaScript
* Conventions
    * snake_case_now_now (rarely use)
    * kebab-case-now-now (file name)
    * camelCaseNowNow (agurment name)
    * PascalCaseNowNow (class name)

* Console.log: how to print out the result
    * console.log(‘Toi la Nga’);
    * console.log(“Toi la Phong”);
    * console.log(`${variable_name}`)
    * let name = “Nga”; console.log(`Toi la ${name}`);
    * console.log(“Toi ten la” + name+ “”)
        
* Object
<br>Used to store a collection of values in a single variable or constant.
 <br>Declare
    * let/const <ten_object> = {<thuoc_tinh>: <gia_tri>,...}
    * let user = {“name”: “Alex”, “age”: 10,    “email”: “alex@gmail.com”}
    <br> const product = {
    “name”: “Laptop”,
    “price”: 500,
    “isWindow”: true,
    “manufacturer”: {
    “name”: “Acer”,
    “year”: 2024
        }

    <br>Use 
    * console.log("name = " + user.name);
    *  console.log("manufacturer name = " +product.manufacturer.name);
    * console.log(“price = “,product[“price”]);
* Logical operator
    * && :both sides of the expression must be true
    * ||: at least one side of the expression must be true
    * !: negates (reverses) the value of the expression
* Array
    * Create array
         * Declare
        * Use
    * Accessing arrays
        * Array length: length
        * Accessing elements by index: [0], [1], [2]
* Function
<br> A function is a named block of code that can be reused and executed
    * Declare
        <br>`function <nameFunction>() {// code}`
    * Parameter
    * Return value
