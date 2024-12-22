
const getHomepage = (req, res) => {
    res.send('Hello World! nè doraemon nè') //response cho trình duyệt
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