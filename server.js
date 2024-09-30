// const http = require('http');
const { createServer } = require('http');

const hostname = 'localhost'; //bang voi localhost == 127.0.0.1
const port = 3000; // có thể lên tới 65535

//tạo ra một HTTP Server
// const server = http.createServer();
const server = createServer((req, res) => {
  res.statusCode = 200; //yêu cầu đã được xử lý thành công
  res.setHeader('Content-Type', 'text/plain'); //thiết lập các header
  res.end('Hello World \n Uoc gi lam duoc cai web kiem tien tram trieu'); //kết thúc phản hồi và gửi dl về cho trình duyệt
});

//lắng nghe yêu cầu ở một cổng và một địa chỉ IP cụ thể
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
