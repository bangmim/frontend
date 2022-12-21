import {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArticleTemplate from "./ArticleTemplate";
import fetchData from "../utils/fetchData";

export default function ArticleView(){
    const {articleId} = useParams();  // url로 전달된, 파라미터로 전달된 id를 변수에 담은 것
    const [error, setError] = useState(null);
    const [article, setArticle] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate(); // 페이지 이동에 필요한 훅

    // 게시물 가져오기 요청
    useEffect(()=>{
        fetchData(`${process.env.REACT_APP_SERVER}/articles/${articleId}`)
        .then(data=>{
            setArticle(data);
        })
        .catch(error=>{
            console.log(error)
            setError(error)
        })
        .finally(()=>setIsLoaded(true))
    },[])

    // 좋아요
    function favorite(articleID){};

    // 좋아요 취소
    function unfavorite(articleId){};

    // 게시글 삭제
    function deleteArticle(articleId){};

    if(error){
        return <p>failed to fetch article</p>
    }
    if(!isLoaded){
        return <p>fetching article ...</p>
    }

    return(     // ArticleTemplate에 props를 전달 >> ArticleTemplate에서 state를 작성하여 DOM을 처리한다
        <ArticleTemplate
            article={article}
            favorite={favorite}
            unfavorite={unfavorite}
            deleteArticle={deleteArticle}
        />
    )

};