import { useState } from "react";   // useState를 import 해야 사용할 수 있다
import { useNavigate } from "react-router-dom";

// 게시물을 작성하는 page
export default function ArticleCreate(){
    
    const navigate = useNavigate();
    const [files, setFiles]=useState({});
    const [text, setText]= useState("");

    function handleSubmit(e){}

    console.log(files)

    // Object.keys(object) : 인자에 있는 object의 key를 key로 하여 출력  
    const fileList = Object.keys(files).map(key => (
        <li key={key}> {files[key].name} </li>
    ))

    return(
        <form onSubmit={handleSubmit} className="px-2">
            <div className="mb-2">
                <label className="block">Photos</label>
                <input
                type="file"
                name="images"
                onChange={(e)=> setFiles(e.target.files)}
                multiple={true}     // multiple={true} : 파일을 여러개 선택할 수 있다
                accept="image/*"    // accept="image/*(img, jpg 등 이미지 속성이면 모두 업로드 가능하다)" : image 포맷의 파일만 accept 하겠다
                />
                <ul className="bg-gray-100">
                    {fileList}
                </ul>
            </div>

            <div className="mb-2">
                <label>Description</label>
                <textarea
                row="3"
                name="description"
                className="block w-full px-2 py-1 border"
                defaultValue={text}
                onChange={(e)=>setText(e.target.value)}
                />
            </div>

            <div>
                <button
                type="submit"
                className="px-2 border border-black disabled:opacity-[0.2]"
                disabled={fileList.length<1}
                >
                    Submit
                </button>
            </div>

        </form>
    )
};
