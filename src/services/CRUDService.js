const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query('Select * from Users');
    // nếu không có keyword await thì connection.query("select * from Users") nó sẽ trả về một Promise { <pending> } có nghĩa là đang chờ mà (mà promise đại diện cho 1 giá trị chưa xác định)
    // let [results, fields] = Promise { <pending> } => Promise ở đây chưa xác định mà cố truy cập vào bằng cách gán results, fields => ko có giá trị để gán => undefined

    // console.log(">>> check data: ", connection.query('select * from Users')); 
    return results;
}

module.exports = {
    getAllUsers
}