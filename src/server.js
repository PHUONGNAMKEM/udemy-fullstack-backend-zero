// // const http = require('http');
// const { createServer } = require('http');

// const hostname = 'localhost'; //bang voi localhost == 127.0.0.1
// const port = 3000; // có thể lên tới 65535

// //tạo ra một HTTP Server
// // const server = http.createServer();
// const server = createServer((req, res) => {
//   res.statusCode = 200; //yêu cầu đã được xử lý thành công
//   res.setHeader('Content-Type', 'text/plain'); //thiết lập các header
//   res.end('Hello World \n Uoc gi lam duoc cai web kiem tien tram trieu'); //kết thúc phản hồi và gửi dl về cho trình duyệt
// });

// //lắng nghe yêu cầu ở một cổng và một địa chỉ IP cụ thể -> để server chạy
// server.listen(port, hostname, () => {
//   //đây là một hàm callback - đảm bảo server sau khi chạy thành công thì hàm callback sẽ được chạy
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express') //import module vào dự án
const path = require('path') 
require('dotenv').config();

console.log(">>> check env:", process.env);
console.log(process.env.PORT);
console.log(process.env.HOST_NAME);
const app = express() //khởi tạo một ứng dụng express
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;


// config template engine - khai báo trước khi khai báo route
// path.join để tạo ra một đường dẫn chính xác tới thư mục views (tham số views thứ 2) - nó là tên thư mục - còn views (1) là chỉ để báo cho express biết là sẽ làm việc với template view thôi
// __dirname là chứa đường dẫn đến thư mục hiện tại của file đang chạy (server.js) là ./src/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')



// app.get() tạo một route trong express
// route: là đường dẫn mà server lắng nghe để xử lý các yêu cầu HTTP
app.get('/', (req, res) => {
  res.send('Hello World! nè') //response cho trình duyệt
})

app.get('/abc', (req, res) => {
  res.send('ABC nè') //response cho trình duyệt
})

app.get('/iFanIT', (req, res) => {
  // res.send('<h1>I\'m a iFanIT</h1>') //response cho trình duyệt
  res.render('sample.ejs') // render là để tạo ra view ĐỘNG
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})