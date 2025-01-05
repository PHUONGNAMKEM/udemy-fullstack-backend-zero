const connection = require('../config/database');
const {getAllUsers} = require('../services/CRUDService'); 

// const getHomepage = (req, res) => {
//     let users = [];
//     // simple query
//     connection.query(
//     'SELECT * FROM Persons',
//     function (err, results, fields) {
//         users = results;
//         console.log(">>> results= ", results); // results contains rows returned by server

//         console.log('>>> check users:', users);
//         res.send(JSON.stringify(users)); //response cho trình duyệt - stringify chuyển từ JavaScript thành JSON (parse ngược lại - chuyển từ JSON thành JavaScript)
//     });
// }

const getHomepage = async (req, res) => {
    console.log('check rows: ', results);
    let results = getAllUsers(); 
    return res.render('home.ejs', { listUsers: results });
}

const getABC = (req, res) => {
    let persons = [];
    connection.query(
        'SELECT * FROM Users',
        function(err, results, fields) {
            persons = results;
            res.send(JSON.stringify(persons)); 
        }
    )
    // res.send('ABC nè') //response cho trình duyệt
}

// const getABC = (req, res) => {  
//     connection.query('SELECT * FROM Persons', function(err, results, fields) {  
//         if (err) {  
//             return res.status(500).send('Có lỗi trong quá trình truy vấn.');  
//         }  

//         const persons = results;  
//         return res.send({  
//             message: 'ABC nè',  
//             data: persons  
//         });  
//     });  
// }

const getiFanIT = (req, res) => {
    // res.send('<h1>I\'m a iFanIT</h1>') //response cho trình duyệt
    res.render('sample.ejs') // render là để tạo ra view ĐỘNG
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    
    // let {email, name, city} = req.body; cách 2
    console.log(">>> check email = ", email, ' name =', name, ' city =', city);

    // connection.query(
    //     `INSERT INTO Users (email, name, city) 
    //     VALUES (?, ?, ?);`, [email, name, city],
    //     function(err, results) {
    //         res.send('Create user succeed');
    //     }
    //   );

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`, [email, name, city]
    );

    console.log(">>> check results= ", results);
    res.send('Create user succeed');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

// export ra nhiều biến thì dùng object
module.exports = {
    getHomepage, getABC, getiFanIT, postCreateUser, getCreatePage
}