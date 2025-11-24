# Outline
### Javascript
 * Phạm vi của biến
 * Advance condition: if...else, if...else if, switch...case
 * == and !=
 * Advance loops
 * Array helper functions
 * String helper functions
 * Functions advance
### Phạm vi của biến
* var: Global
  <br> function f() {
         <br>  if (true) {
              <br>   var $bien_two = 0
              <br>   //in ra 0
              <br>   console.log($bien_two);
          <br>   }
            // nó in ra dc vì khai báo var là biến global
          <br>   console.log($bien_two);
     <br>}
    <br>f();
* let: private:
      <br>For example 
                  <br>   function f() {
                        if (true) {
                        let $bien_two = 0
                        //in ra 0
                        console.log($bien_two);
                    }
                    // nó đưa ra lỗi vì biến $bien+two được định nghĩa trong khối if 
                    console.log($bien_two);
        }
        f();1


### 2. JavaScript
* if .. else
* if .. else if ...if
* switch .. case
* for..in: duyệt qua các phần tử trong mảng/object và trả về index của phần tử
  <br> const object = { a: 1, b: 2, c: 3 };
   <br> for (const property in object) {
  <br>  console.log(`${property}: ${object[property]}`);    }
 <br>Expected output:
    <br>"a: 1"
    <br> "b: 2"
    <br> "c: 3"

* forEach: à duyệt qua các phần tử trong mảng theo và trả về value của phần tử
   <br> Example1: Arrary:  arrA=[1,2,3,4]
     <br>arrA.forEach((number) => { 
    <br> console.log(number);})
    <br>Example 2: Object in array
    <br> const staffsDetails = [
   <br> { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
   <br> { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
   <br> { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" }];
  <br> staffsDetails.forEach((staffDetail) => {
  <br>  let sentence = `I am ${staffDetail.name}, age 
  ${staffDetail.age} and a staff of Royal.`;
   <br> console.log(sentence);
}); 
expected: <br> I am Jam Josh, age 44 and a staff of Royal.
<br>I am Justina Kap, age 34 and a staff of Royal.
 <br>I am Chris Colt, age 37 and a staff of Royal.

* for ...of: Duyệt từng element trong mảng và in ra từng phần tử
    <br>-const array = ["a", "b", "c"];
     <br>for (const element of array) {
        <br>console.log(element);} 

#### JavaScript String Reference
* Name         &ensp;&ensp;Description
<br >at();&ensp; Returns an indexed character from a string
<br>endsWith() 	&ensp;Returns if a string ends with a specified value
<br>includes() 	&ensp;Returns if a string contains a specified value
<br>indexOf() 	&ensp;Returns the index (position) of the first occurrence of a value in a string
<br>lastIndexOf() 	&ensp;Returns the index (position) of the last occurrence of a value in a string
<br>length 	&ensp;Returns the length of a string
<br>replace() 	&ensp;Searches a string for a pattern, and returns a string where the first match is replaced
<br>replaceAll() 	&ensp;Searches a string for a pattern and returns a new string where all matches are replaced
<br>search() 	&ensp;Searches a string for a value, or regular expression, and returns the index (position) of the match
<br>slice() 	&ensp;Extracts a part of a string and returns a new string
<br>split() 	&ensp;Splits a string into an array of substrings
<br>startsWith() 	&ensp;Checks whether a string begins with specified characters
<br>substr() 	&ensp;Deprecated. Use substring() or slice() instead.
<br>substring() 	&ensp;Extracts characters from a string, between two specified 
<br>toLowerCase() 	&ensp;Returns a string converted to lowercase letters
<br>toString() 	&ensp;Returns a string or a string object as a string
<br>toUpperCase() 	&ensp;Returns a string converted to uppercase letters
<br>trim() 	&ensp; a string with removed whitespaces
<br>trimEnd() 	&ensp;Returns a string with removed whitespaces from the end (arr=arr.trimEnd(","))
<br>trimStart() &ensp;Returns a string with removed whitespaces from the start

### Array utils function
#### Array.map : trả về 1 mảng mới vs kết quả là điều kiện ở trong function
<br>exam1: array =[1,2,3,4] ; newArr=array.map(num => num *2)
<br>expected: newArr =[2,4,6,8]
<br> exam2
    array =[1,2,3,4] ; newArr=array.map((num) =>{ 
        if (num %2 ==0){
            return num*2}
        else{
            return num
        }.
    }) console.log (newArr)==>expected (1,2,3,8)

#### Array.reduce : Rút gọn các giá trị của một mảng thành một giá trị duy nhất (theo hướng từ trái sang phải)."
 <br> exam :    
  <br>array1 =[1,2,3,4] ; newArr1=array1.reduce((currVal,accumval) => currVal+accumval)
  <br>  console.log(newArr1) ==> Expected =10
  <br> const staffsDetails1 = [
  <br>  { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
   <br> { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
   <br> { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" }];
 <br> const newSumArr=staffsDetails1.reduce((sum, item) => sum + item.age,0 )
 <br> console.log(newSumArr)  => expected 44+34+37=115

#### Array.find : trả ra phần tử đầu tiên thỏa mãn điều kiện
  <br> array1 =[1,6,3,4] ; newArr1=array1.find((num) => num %3 ===0)
  <br>console.log (newArr1) ==> expected 6
 <br> example2: object in arr
   <br> const staffsDetails = [
  <br>  { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
   <br> { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
   <br> { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" }];
   <br>newstaff =staffsDetails.find((item) =>item.age=44)
    <br>console.log(newstaff.name)

#### Array.every : trả ra true/false nếu các phần tử thỏa mãn điều kiện
 <br>array1 =[1,6,3,4] ; newArr1=array1.every((num) => num %3 ===0)
  <br>console.log (newArr1) ==> expected false
 <br> example 2:  staffsDetails=[ 
   <br>  { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
   <br> { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
   <br> { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" }];
   <br>newstaff =staffsDetails.every((item) =>item.age !=40)
    <br>console.log(newstaff) ==> return  true

 #### Array.filter : trả ra các phần tử thỏa mãn điều kiện
   <br> example 1: array1 =[1,6,3,4] ; newArr1=array1.filler((num) => num %3 ===0)
   <br>console.log (newArr1) ==> [6,3]
   <br> example 2:  staffsDetails=[ 
   <br>  { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
   <br> { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
   <br> { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" }];
   <br>newstaff =staffsDetails.filter((item) =>item.age <=40)
    <br>console.log(newstaff) 
    <br>for (let i=0; i <newstaff4.length; i ++){
    console.log(newstaff4[i].name) } ==> expected Justina Kap,Chris Colt

#### Array.some: trả về true/false nếu trong mảng tồn tại phần tử thỏa mãn điều kiện
<br> ex: const numbers = [65, 44, 12, 4];
 <br>console.log (numbers.some(num => num % 2 ==0)) => expected: true