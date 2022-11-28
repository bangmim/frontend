const { User } = require("../models/model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");
const fs = require("fs");


// 로그인
exports.login = async(req, res, next)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            const err = new Error("User not found");
            err.status = 401;
            return next(err);
        }

        // 클라이언트로부터 전달받은 비밀번호를 
        // 유저의 salt로 암호화한다.
        const hashedPassword = crypto
        .pbkdf2Sync(password, user.salt, 310000, 32, "sha256")
        .toString("hex")

        if(user.password !== hashedPassword){
            const err = new Error("Password not match");
            err.status = 401;
            return next(err);
        }

        // # 토큰을 발급한다.
        // 토큰에 username을 저장한다.
        // Secret key를 가지고 토큰을 암호화한다.
        const token = jwt.sign({username : user.username}, process.env.SECRET);

        res.json({user, token})     

    } catch(error){
        next(error)
    }
}

// 회원가입 로직
exports.register = [

    // callback 1 : 유저 데이터 유효성 검사
    async (req, res, next) => {
        //클라이언트의 데이터는 req.body에 담긴다
        const { username, email, password } = req.body;

        // validate username (유저 네임 중복 검사)
        {
            // 데이터베이스에 쿼리(query)를 전송한다.
            const user = await User.findOne({ username })

            // # custom error
            if(user){
                const err = new Error("이미 가입된 유저입니다");
                err.status=400;
                return next(err);
            }

        }
        // validate email (유저 이메일 중복 검사)
        {
            const user = await User.findOne({email});

            if(user){
                const err = new Error("이미 가입된 이메일 입니다.");
                err.status= 400;
                return next(err);
            }
        }

        // 다음 callback으로 이동한다.
        next();
    },

    // callback 2 : 유저 데이터 저장
    async (req, res, next) => {
        try{
            const {username, email, password} = req.body;

            // # 비밀번호를 암호화 
            // salt : 
            // - 유저 데이터와 함께 저장되는 유니크한 값이다
            // - 비밀번호 암호화와 복호화에 사용된다.
            const salt = crypto.randomBytes(16).toString("hex");

            // 암호화된 비밀번호 (salt 이용)
            const hashedPassword = crypto
            .pbkdf2Sync(password, salt, 310000, 32, "sha256")
            .toString("hex")

            // # 유저 데이터를 DB에 저장한다
            const user= new User({
                username,
                email,
                password:hashedPassword,
                salt    //: salt생략 가능 (key와 name 일치)
            })
            await user.save();

            // 클라이언트에게 user 데이터를 전송한다
            res.json(user)

        }catch(error){
            next(error)
        }
    },
]