# Version control system

- Local: lưu ở máy cá nhân
- Centralize: lưu ở một máy
chủ tập trung.
- Distributed: lưu ở nhiều
máy khác nhau

# Git

There are 3 states when we work with git
- 1/ Working directory: when you have new file or some change
- 2/ Staging area: thoes change files have to move the prepared area to ready for commit(create version)
- 2/ Repository: contain version of commit

**Note**: *when you move file from Staging Area to Repository --> this file didn't stay or apprear in the Staging Area anymore*

## Command line in git used to commit:
- git init
- configure git for the entire one : git config --global user.name "name", git config --global user.email "email"
- configure git for **only repo** : git config user.name "name",git config user.email "email"
- check history of commit: git log

## Commit convention:
- rule: "type": "short description"
- chore: small change, spelling, remove unsed file
- feat: new feater, new testcase
- fix: fix mistake beforehand

# Javascript

## Definition: 
a run -time language, need Node Js to run, need to browser engine support (Edge: Chake, Firefox: SpiderMonkey, Chrome: V8)

### Variable:
- use let or var --> var: global; let: in {} === ex: let name = "Trina"; console.log ("name is" + name);
- const: value not change always --> const name = value 
- comparision operator: So sánh hơn kém: >, <
○ So sánh bằng: ==, ===,!=, !==,>=, <=; tập trung dùng so sánh hơn
kém và một vài so sánh bằng (===,
!==, >=, <=)
- Unary operator: i++ equal to  i=i+1,i-- bằng với i=i-1
- Arithmetic operator: +, -, *, /
- Conditional: 
if (5 > 3) {
console.log("5 lớn hơn 3")
}
- Loops: for(<khởi tạo>; <điềukiện dừng>; <điều kiện tăng>) 
{
// code }

**Note**: Format code Mac: 
- Mac: Option + Shift + F
- Window: Alt + Shift + F