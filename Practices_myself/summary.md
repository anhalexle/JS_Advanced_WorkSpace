## Tóm tắt luồng dữ liệu

1. Là từ file script.js 
2. Sang hàm attach được gọi từ store.js
3. và hàm attach lại là hàm được import từ createStore của hàm core.js
4. Với tham số truyền vào là function reducer trong file reducer.js
5. Khi nhảy vào createStore trong core.js ta lấy được giá trị khởi tạo lần dây cho state thông qua việc gọi hàm reducer nên bây giờ state = init và tạo ra 1 biến roots để xử lý việc render ra view
6. nhảy vào hàm attach() với hai tham số là component và root ta lần lượt gán vào là component = App và root là document.getElementById('root') và gọi ra hàm render
7. Hàm render ta sử dụng hàm for of và destructuring để lần lượt gán biến root và component trùng với thành phần ban đầu
và root.innerHTML = component() nghĩa là hàm App()
8. Ta nhảy vào hàm App trong component của file App.js
9. Trong file App này đã tạo được connection giữa storage và view thông qua expression function connector = connect() và hàm connect() cũng được tạo như hàm attach nên cũng nhảy ngược vào hàm createStore để gọi hàm connect hàm connect cho phép gửi dữ liệu từ storage ra view bằng cách là tạo tham số là 1 expression function nhận state trong storage và trả về mặc định là state hiện tại
10. và bên trong hàm connect sẽ return ngược lại 1 hàm với tham số là component và bên trong lại return 1 hàm và truyền thêm các thông số như props và dùng rest để truyền vào những thông số còn lại
11. và bên trong hàm đó ta return lại 1 obj mới bằng cách merge những tham số như props, ...args, selector(state) (callback lại function để được truyền vào làm tham số) vào 1 obj rỗng và trả về lại cho cái component được gọi tới
12. Như ở trên ở đầu component lại chính là thằng App nên tham số của App ta lại dùng destructuring để lấy ra được giá trị bên trong của Init thông qua key 'cars' và dùng hàm html của core.js và export ra màn hình
13. và trường hợp ta nhấn nút add thì sẽ thực hiện việc dispatch lại nhảy tiếp tục vào hàm createStore để thực thi hàm và bên trong lại gọi lại hàm reducer thông qua action được truyền vào là add ta dùng destructuring để lấy ra phần tử được truyền qua toán tử ...args và sau đó return lại trạng thái cũ của state qua toán tử spread ...state và gắn thêm toán tử mới vào bằng cars = [...state.cars, newCar] sẽ tạo ra 1 mảng mới và lưu ngược lại vào state của createStore và render lại view