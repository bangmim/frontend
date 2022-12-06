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
const account_controller = require('../controllers/account_controller');
const article_controller = require('../controllers/article_controller');
const comment_controller = require('../controllers/comment_controller');

// # AUTH
router.get('/user', auth, auth_controller.user);

// ACCOUNTS (계정)
// 인증이 필요한 부분은 auth가 필요하다.
router.post('/accounts/login', account_controller.login);
router.post('/accounts/register', account_controller.register);
router.post('/accounts/edit', auth, account_controller.edit);
router.post('/accounts/edit/image', auth, account_controller.upload_image);
router.delete('/accounts/edit/image', auth, account_controller.delete_image);

// ARTICLES (게시물)
router.post('/articles', auth, article_controller.create);
router.get('/articles',auth, article_controller.article_list);
router.get('/articles/:id', auth, article_controller.article); 
router.delete('/articles/:id', auth, article_controller.delete);
router.post('/articles/:id/favorite', auth, article_controller.favorite);
router.delete('/articles/:id/favorite', auth, article_controller.unfavorite);
router.get('/feed', auth, article_controller.feed);

// COMMENTS (댓글)
router.post('/articles/:id/comments', auth, comment_controller.create);

module.exports = router;