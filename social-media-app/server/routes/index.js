// # routes/
// 라우트 처리를 하는 파일들을 보관한다.
// 라우트(router) : 요청받은 url은 컨트롤러(로직처리)에 연결하는 역할을 한다.

const express = require('express')
const router = express.Router();
const passport = require("passport");
const auth = passport.authenticate("jwt", { session: false });
require("../auth/passportJwt");

// # HTTP 요청 메서드(.HttpRequestMethod)
// GET: read data
// POST: create data
// PUT: update data
// DELETE: delete data

// router.HttpRequestMethod(endPoint, controller(callback))
router.get('/', (req, res) => {
  res.json({ message: "hello express" })
})

//controller import(가져오기)
const auth_controller = require('../controllers/auth_controller');
const account_controller = require('../controllers/account_controller')

// # AUTH
router.get('/user', auth, auth_controller.user);

// ACCOUNTS (계정)
router.post('/accounts/login', account_controller.login);
router.post('/accounts/register', account_controller.register)

module.exports = router;