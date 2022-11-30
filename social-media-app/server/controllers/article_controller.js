const { Follow, Article, Favorite } = require("../models/model");
const formidable = require("formidable");
const fs = require("fs");
const { isReadable } = require("stream");

// 게시물 등록
exports.create = async (req, res, next) => {
    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
        try {
            const loginUser = req.user;

            if (err) {
                return next(err);
            }

            const images = files.images instanceof Array ? files.images : new Array(files.images);

            // 이미지가 업로드 되지 않았을 때
            if (!images[0].originalFilename){
                const err = new Error("image must be specified");
                err.status = 400;
                return next(err);
            }

            // 이미지를 data/articles 경로에 저장한다.
            const photos = images.map(photo => {
                const oldPath = photo.filepath;
                const ext = photo.originalFilename.split(".")[1]
                const newName = photo.newFilename + "." + ext;
                // __dir 변수는 현재의 위치를 return 해주는 변수
                const newPath = `${__dirname}/../data/articles/${newName}`;
                fs.renameSync(oldPath, newPath);

                return newName;
            })

            // 데이터베이스 쿼리
            const article = new Article({
                description : fields.description,
                photos,
                user: loginUser._id
            })
            await article.save();

            res.json(article);

        } catch (error) {
            next(error)
        }
    })
}

exports.article_list = async (req, res, next)=>{
    try{

        // 데이터베이스 쿼리
        const articles = await Article.find()
        .sort([["created","descending"]])       // 순서 : 작성일 기준으로 내림차순
        .populate("user")   // 쿼리를 다시 전달할 필요 없이 user의 데이터를 얻을 수 있다.
        .skip(req.query.skip)
        .limit(req.query.limit);

        res.json(articles);

    }catch(error){
        next(error)
    }
}