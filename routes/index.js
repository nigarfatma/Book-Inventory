var express = require('express');
var router = express.Router();
const authController=require("../controller/authController");
const userController=require("../controller/userController");
const storeController=require("../controller/storeController");
const bookController=require("../controller/bookController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// API OF LOGIN AND REGISTER OF USER
router.post('/book/signup',authController.signup);
router.post('/book/login',authController.login);

// API OF the USER
router.get('/book',userController.userList);
router.post('/book',userController.userAdd);
router.put('/book',userController.userUpdate);
router.delete('/book',userController.userDelete);


// API OF THE STORE
router.get('/book', storeController.storeList);
router.post('/book', storeController.storeAdd);


// API OF BOOK
router.get('/book',bookController.bookList);
 router.post('/book',bookController.bookAdd);
 router.put('/book',bookController.bookUpdate); 
 router.delete('/book',bookController.bookDelete);

module.exports = router;
