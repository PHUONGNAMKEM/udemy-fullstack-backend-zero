const mysql = require('mysql2');
require('dotenv').config();
// Create the connection to database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT, // default port: 3306
//     user: process.env.DB_USER, // default password: empty
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// const pool = mysql.createPool({  
//   host: 'localhost',  
//   user: 'root',  
//   database: 'test',  
//   waitForConnections: true, // Cho phép chờ khi không có kết nối nào khả dụng  
//   connectionLimit: 10, // Số lượng kết nối tối đa trong pool  
//   maxIdle: 10, // Số lượng kết nối tối đa có thể ở trạng thái idle  
//   idleTimeout: 60000, // Thời gian tối đa (ms) mà một kết nối có thể ở trạng thái idle trước khi bị đóng  
//   queueLimit: 0, // Số lượng yêu cầu tối đa được xếp hàng khi không còn kết nối nào khả dụng (0 có nghĩa là không giới hạn)  
//   enableKeepAlive: true, // Bật chế độ giữ kết nối sống để tránh việc đóng kết nối không cần thiết  
//   keepAliveInitialDelay: 0, // Thời gian trì hoãn ban đầu trước khi gửi gói keep-alive  
// });

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // default port: 3306
    user: process.env.DB_USER, // default password: empty
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true, // Cho phép chờ khi không có kết nối nào khả dụng  
    connectionLimit: 10, // Số lượng kết nối tối đa trong pool
    queueLimit: 0 // Số lượng yêu cầu tối đa được xếp hàng khi không còn kết nối nào khả dụng (0 có nghĩa là không giới hạn)  
});

module.exports = connection;