import React, { useEffect, useState } from 'react'

const Comp09 = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const callAPI = () => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setPosts(json);
            setLoading(false);
        });
    }
    //useEffect - 렌더링이 될 때마다 바뀌는 것이 아니라 처음 한 번만 실행하는 훅(hook)
    useEffect(()=>{
        callAPI();
    },[]);
    if(loading) return <h1>로딩중입니다.....</h1>
    return (
        <div>
            <h1>게시글 목록</h1> 
            {posts.map(p=>
                <div key={p.id}>
                    <h5>{p.id}</h5>
                    <p>{p.title}</p>
                </div>    
            )}   
        </div>
    )
}

export default Comp09