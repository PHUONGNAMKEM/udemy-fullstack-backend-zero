require('dotenv').config();
const express = require('express') //import module vào dự án
const path = require('path') 
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

// console.log(">>> check env:", process.env);
// console.log(process.env.PORT);
// console.log(process.env.HOST_NAME);

const app = express() //khởi tạo một ứng dụng express
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;


configViewEngine(app);
// Khai báo route -- tất cả các route của chúng ta sẽ được thêm vào trước nó tiền tố '/'
// tiền tố đó chính là tham số đầu tiên của .use để có thể tạo ra sự khác biệt giữa các route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})