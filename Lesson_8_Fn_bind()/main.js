// this.firstName = "Minh"
// this.lastName = "Thu"

// const teacher = {
//     firstName: "Minh",
//     lastName: "Thảo",
//     getFullName(data1, data2) {
//         console.log(data1, data2)
//         return `${this.firstName} ${this.lastName}`
//     }
// }
//Case 1:
// console.log(teacher.getFullName()) //"Minh Thảo"

//truy cập vào function
//function là 1 obj đặc biệt dạng reference

// const student = {
//     firstName: "Anh",
//     lastName: 'Le'
// }

// //Case 2:
// //ràng buộc teacher vs từ khóa this
// // const getTeacherName = teacher.getFullName.bind(teacher)
// //bind cũng có thể truyền argument vào hàm bind và hàm sẽ ưu tiên lấy đối số truyền trong bind
// // const getTeacherName = teacher.getFullName.bind(student, 'Test 3', 'Test 4')
// const getTeacherName = teacher.getFullName.bind(student)
// //nên khi có nhìu tham số lưu động không nên truyền vào bind mà truyền trực tiếp vào hàm như bth


// // console.log(getTeacherName === teacher.getFullName) 
// //nếu dùng bind thì sẽ tạo ra vùng nhớ mới địa chỉ mới nên sẽ trả về false
// //this trỏ ra window
// console.log(getTeacherName('Test 1', 'Test 2')) //"Minh Thu"

//VD1
// const teacher = {
//     firstName: "Minh",
//     lastName: "Thảo",
//     getFullName() {
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }

// const button = document.querySelector('button')

// //C1
// // button.onclick = function () {
// //     teacher.getFullName()
// // }

// //C2 
// //nếu ko có bind thì từ this sẽ hiểu là từ button mà button.firstName là undefined
// button.onclick = teacher.getFullName.bind(teacher)

//VD2

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
//mà trường hợp khai báo ko bind nó mặc định trỏ ra window
//ăn lỗi do $ đây nó bị lố ra window mà window ko có heading
// console.log($('#heading').innerText)

const app = (() => {
    const cars = ['BMW']
    const root =$('#root')
    const input =$('#input')
    const submit =$('#submit')
    return {
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index, 1)
        },
        render() {
            const html = cars.map((car,index) => `
                <li>
                    ${car}
                    <span class="delete" data-index="${index}">&times</span>
                </li>
            `).join('')
            root.innerHTML = html;
        }, 
        //target: con chuột nhấn vào đâu trả về cái đó
        handleDelete(e) {
            // console.log(e.target)
            //closest giúp kiểm tra chính cái element đó hoặc cha của nó có chứa class đó hay không
            const deleteBtn = e.target.closest('.delete')
            // console.log(deleteBtn)
            if(deleteBtn) {
                //lấy ra value từ data-index
                const index = deleteBtn.dataset.index;
                //this trong trường hợp này là ruler
                this.delete(index)
                this.render()
            }
        },
        init() {
            //Handle DOM events
            //nếu gọi function thông thường thì context lúc này là submit mà submit thì không có hàm add nên bị lỗi => arrow function
            //C1
            submit.onclick = () => {
                const car = input.value
                this.add(car)
                this.render()
                input.value = null;
                //để dấu nháy vào lại vị trí
                input.focus()
            }
            //this ở đây là app
            root.onclick = this.handleDelete.bind(this);

            this.render() //this = app (do context là 1 arrow function đấy nó sẽ thoát ra khỏi function tìm context ở ngoài là app )
            //C2
            // const _this = this;
            // submit.onclick = function () {
            //     const car = input.value;
            //     _this.add(car);
            //     _this.render()
            // }
            // this.render()


        }
    }
}) ();

app.init()

//Delegate pattern