# GIT

## Merge

1. Khái niệm: merge code là gộp code từ nhánh A vào nhánh B
2. Merge strategy

- Fast-forward merge: Khi merge ko tạo ra commit merge, xảy ra khi không có thay đổi trên nhánh chính kể từ lúc tạo nhánh khác
- Three way merge: Khi merge có tạo ra commit merge, xảy ra khi merge branch khác vào branch chính, mà lịch sử 2 branch này khác nhau

## Conflict

- Là xung đột.Xảy ra khi 2 người cùng sửa 1 file, sau đó merge vào với nhau.
- Phần nằm giữa <<< HEAD và ==== là các nội dung đang ở nhánh của mình. Phần nằm giữa ==== và >>>> (< branch_name >) là nội dung của nhánh muốn merge vào
- Xử lý conflict: Xóa các phần đánh dấu conflict(<<< HEAD, ====, >>>> ), còn lại là phần mình muốn xóa hoặc giữ các phần code tương ứng

## Rebase
- lấy các commit trong một nhánh và "đặt lại" chúng dựa trên một nhánh khác như thể chúng được tạo từ đó ngay từ đầu, làm cho lịch sử commit của bạn gọn gàng hơn, tuyến tính hơn.
- Câu lệnh: git rebase < ten nhanh >

## Squash
- hành động gộp nhiều commit lại thành một commit duy nhất. Điều này thường được thực hiện để dọn dẹp lịch sử commit
- Câu lệnh: git rebase -i HEAD~3 (gộp 3 commit gần nhất)
 # CSS Selector
- Cú pháp đơn giản, ngắn gọn hơn
- Không sử dụng được cho các case phức tạp
- Note: Chỉ sử dụng đi xuôi (từ node trên xuống dưới), không đi ngược lên được

# Playwright Selector
- Nhược điểm: Khó có thể biết được rằng câu lệnh của mình có work đúng hay không do ko thể tìm kiếm thẻ bằng Playwright Selector trên web
- Câu lệnh thường dùng:

        page.getByRole()
        page.getByText()
        page.getByLabel()
        page.getByPlaceholder()
        page.getByAltText()
        page.getByTitle()
        page.getByTestId()