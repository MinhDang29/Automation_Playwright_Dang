## 
- test group/ test suit: về mặt ý nghĩa nhóm những testcase cùng module
trong playwright
test.describe(<tên suit>, async () =>
{
    test ('test1', async({page}) => {
        //code ...
    })
})

- test hook: 
+ thời điểm chạy test: trước (pre-condion) - trong - sau (clear data or tear down)
    ex: --> testcase tập trung kiểm tra login failed - forcus nhập những thông tin invalid
+ có 4 loại hook:
1/ beforeAll
2/ beforeEach
3/ afterEach
4/ afterAll

ex: beforeAll --> beforeEach --> testcase_01 --> afterEach --> beforeEach --> testcase_02
--> afterEach --> afterAll

- assertion:
+ không dùng web-first assertion (chờ cứng thời gian 5s)
    ex: expect().toEqual();
+ dùng web-first assertion (chờ flexible, tối đa 5s)

NOTE: không phải testsuit nào cũng cần đầy đủ test hook

- trong testcase: mỗi step nên có expect viết assetion tương ứng
- khi xpath xuất nhiều quá ở teststep thì nên định nghĩa trước
    + ex: const invalidUserCredential ={userName: "Hong Trinh", password: "wrong password"}
    + ví dụ có thể khai báo xpath trước: const xpathBtnLogIn = "//input[@id='aaaaaaa']"