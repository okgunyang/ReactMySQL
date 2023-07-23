import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Post = ({history}) => {
    const params= useParams();
    const navigator = useNavigate();
    const id=params.id;
    const [post, setPost] = useState('');
    const [loading, setLoading] = useState(false);

    const callAPI = () => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => response.json())
        .then(json => {
            //console.log(json)
            setPost(json);
            setLoading(false);
        });
    }

    useEffect(()=>{
        callAPI();
    }, []);

    if(loading) return <h1>로딩중...</h1>
    return (
        <div>
            <h1>게시글정보</h1>
            <h3>[{post.id}] {post.title}</h3>
            <hr/>
            <div>
                {post.body}
            </div>
            <button onClick={()=>navigator(-1)}>목록으로</button>
        </div>
    )
}

export default Post