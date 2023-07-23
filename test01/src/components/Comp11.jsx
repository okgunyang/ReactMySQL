import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Comp11 = () => {
    const location = useLocation();
    const search = new URLSearchParams(location.search);
    const parm_page=search.get('page');
    const [posts, setPosts] = useState([]);
    const [last, setLast] = useState(1);
    const page=parm_page===null ? 1 : parseInt(parm_page);
    
    const callAPI = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            const start = (page-1)*10 + 1;
            const end = (page * 10)
            setLast(Math.ceil(json.length / 10));
            setPosts(json.filter(post=>post.id>=start && post.id<=end));
        });
    }

    useEffect(()=>{

        callAPI();
    }, [page]);

    return (
        <div>
            <h1>게시글목록</h1>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post=>
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td><Link to={`/posts/${post.id}?page=${page}`}>{post.title}</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div>
                <Link to={`/posts?page=${page-1}`}>
                    <button disabled={page===1 && true}>이전</button>
                </Link>
                <span>{page} / {last}</span>
                <Link to={`/posts?page=${page+1}`}>
                    <button disabled={page===10 & true}>다음</button>
                </Link>
            </div>
        </div>
    )
}

export default Comp11