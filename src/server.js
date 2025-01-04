require('dotenv').config(); // dòng này là để ta có thể sử dụng process.env.variables 
const express = require('express') //import module vào dự án
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

// console.log(">>> check env:", process.env);
// console.log(process.env.PORT);
// console.log(process.env.HOST_NAME);

const app = express() //khởi tạo một ứng dụng express
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// Mặc định thì express không xử lý nội dung của body trong các yêu cầu HTTP, express không biết cách phân tích dữ liệu đến từ body của yêu cầu => req.body sẽ luôn là undefined khi không có middleware phù hợp để xử lý body.

// express.json(): xử lý dữ liệu JSON từ body của yêu cầu HTTP, khi client gửi dữ liệu tới Content-Type: application/json thì nó sẽ phân tích nội dung JSON đó và biến nó thành một đối tượng JavaScript và gán nó vào req.body

// express.urlencoded(): xử lý dữ liệu được mã hóa URL (x-www-form-urlencoded) từ body của yêu cầu HTTP. Dữ liệu này thường được gửi từ các form HTML mặc định, NÓ CŨNG SẼ giải mã dữ liệu và biến nó thành một đối tượng JavaScript, sau đó gán nó vào req.body

// Nếu body của yêu cầu là một chuỗi JSON hợp lệ ({ "key": "value" }) và bạn sử dụng express.json(), req.body sẽ là: { key: "value" }

// Nếu body là dữ liệu được mã hóa URL (key=value) và bạn sử dụng express.urlencoded(), req.body sẽ là: { key: "value" }

// config request.body 
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

configViewEngine(app);
// Khai báo route -- tất cả các route của chúng ta sẽ được thêm vào trước nó tiền tố '/'
// tiền tố đó chính là tham số đầu tiên của .use để có thể tạo ra sự khác biệt giữa các route
app.use('/', webRoutes);


// test connection

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})