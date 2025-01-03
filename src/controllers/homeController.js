const connection = require('../config/database');

const getHomepage = (req, res) => {
    let users = [];
    // simple query
    connection.query(
    'SELECT * FROM Users',
    function (err, results, fields) {
        users = results;
        console.log(">>> results= ", results); // results contains rows returned by server

        console.log('>>> check users:', users);
        res.send(JSON.stringify(users)); //response cho trình duyệt - stringify chuyển từ JavaScript sang JSON (parse ngược lại - chuyển từ JSON sang JavaScript)
    });
}

const getABC = (req, res) => {
    res.send('ABC nè') //response cho trình duyệt
}

const getiFanIT = (req, res) => {
    // res.send('<h1>I\'m a iFanIT</h1>') //response cho trình duyệt
    res.render('sample.ejs') // render là để tạo ra view ĐỘNG
}

// export ra nhiều biến thì dùng object
module.exports = {
    getHomepage, getABC, getiFanIT
}