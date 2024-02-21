const express= require('express');
const { signup,login} = require('../controller/controller');
const { signupvalidator } = require('../middleware/signupvalidator');
const router = express.Router();

router.post('/signup', signupvalidator, signup);
router.post('/login', loginvalidator, login);


module.exports=router;