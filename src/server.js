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


configViewEngine(app);
// Khai báo route -- tất cả các route của chúng ta sẽ được thêm vào trước nó tiền tố '/'
// tiền tố đó chính là tham số đầu tiên của .use để có thể tạo ra sự khác biệt giữa các route
app.use('/', webRoutes);


// test connection


// simple query
connection.query(
  'SELECT * FROM Users',
  function (err, results, fields) {
    console.log(">>> results= ", results); // results contains rows returned by server
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})