## Đặc tính
1. Trong phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu .)
2. Đứng ngoài phương thức, this tham chiếu tới đối tượng global (Obj window)

## Lưu ý

. this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
. this trong một hàm là undefined khi ở strict mode
. Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác