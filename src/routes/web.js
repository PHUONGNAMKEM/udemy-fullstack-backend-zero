const express = require('express');
const {getHomepage, getABC, getiFanIT, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser} = require('../controllers/homeController');
const router = express.Router(); // import thư viện router của express vô để nó có thể hỗ trợ ta sử dụng route bên file sever

// router.Method('route', handler function)

// app.get() tạo một route trong express
// route: là đường dẫn mà server lắng nghe để xử lý các yêu cầu HTTP
router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/iFanIT', getiFanIT);

router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);


module.exports = router;