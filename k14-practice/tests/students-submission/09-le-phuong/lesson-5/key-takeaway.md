# Outline
### Javascript continue
 * Anonymous functions: hàm ẩn danh, ko có tên, không gọi lại bao giờ, chỉ sử dụng 1 lần duy nhất
 example : let mul = function(a,b){return a*b}
* Lamda function: cú pháp viết gọn function, cũng là 1 hàm anonymous.chỉ sử dụng 1 lần không cần xài lại.
 sử dụng => thay vì function
        examle: let mul (a,b)=>{return a * b }
        cons mulValue=mul(5,5)
        neu chi co 1 tham so
        let dup =x =>{return x*2} // x ko cần bỏ vào ngoặc tròn
        hàm chỉ 1 biểu thức
        let dup =x => x*2 ==> viet gon ko can return
        hàm ko có tham số
        () => {
            console.log("")
        }
 ### Automation
#### DOM (Document object model) :chứa tài liệu /thành phần của trang web (F12 element tab)
* How to view DOM : On web page, F12 to view source code, at elememt tab, we can see the tructure of web page
list of HTML
* We can using mindmup  để vẽ  cây DOM 
* Selector: xác định phần tử muốn tương tác
* xpath: có 2 cách lấy: tương đối/tuyệt đối how to get xpath
## Playwright  syntax
Khởi tạo:
 <br>    import{ test } from '@playwright/test'
<br> Khai báo test case:  {page dùng để định nghĩa trình duyệt,default trình duyệt config ở file config}
<br> >test("tên test case", async ({page}) => {
  <br>   await test.step('tên step1',async () =>{
      <br>   await page.goto(""); //navigate
    <br>    //click, bỏ phần tử vào locator
      <br>   await page.locator(selector).click() // có thể double click .doubleclick, nếu muốn click 4-5 lần click({clickout :5,button:"right},modifiers: ["Control","Alt"]); 
    });
});
<br> note :chỉ cần kiếm tra thì ko cần await. chỉ cần page.locator thôi, ischeck là 1 hàm
có promise (auto thêm promise)
<br>select option syntax
await page.locator("").selectOption("nhập vào value của option")
<br>upload file lên trang web
await page.locator('').setInputfile()  //nhập đường dẫn của file muốn upload lên setinputfile, file phải để vào repo, copy cai relative path vào