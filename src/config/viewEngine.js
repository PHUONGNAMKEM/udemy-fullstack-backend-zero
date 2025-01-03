const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    console.log(">>> check __dirname:", path.join("./src", "views"));
    console.log(">>> check __dirname:", path.join("/src", "views"));
    console.log(">>> check __dirname:", __dirname);
    console.log(path.join(__dirname, "/views"));
    console.log(path.join(__dirname, "./views"));
    console.log(path.join(__dirname, "../views"));
    
    // config template engine - khai báo trước khi khai báo route
    // path.join để tạo ra một đường dẫn chính xác tới thư mục views (tham số views thứ 2) - nó là tên thư mục - còn views (1) là chỉ để báo cho express biết là sẽ làm việc với template view thôi
    // __dirname là chứa đường dẫn đến thư mục hiện tại của file đang chạy (server.js) là ./src/
    app.set('views', path.join("./src", 'views'));
    //app.set('views', path.join(__dirname, "../views")); // cách 2
    app.set('view engine', 'ejs');

    // config static files
    // app.use(express.static(path.join("./src", '../public'))); // cách 2
    app.use(express.static(path.join(__dirname, '../public')));
};

module.exports = configViewEngine;