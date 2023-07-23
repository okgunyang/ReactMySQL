import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Table, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Postlist = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [last, setLast] = useState(1);
    const callAPI = async() => {
        setLoading(true);
        const result = await axios(`/posts?page=${page}`)
        console.log(result.data);
        setPosts(result.data);

        const result1 = await axios.get('/posts/total');
        setLast(Math.ceil(result1.data.total/5));
        setLoading(false);
    }
    useEffect(()=>{
        callAPI();
    }, [page]);
    if(loading) return <h1 className="my-5 text-center">로딩 중 입니다....</h1>
    return (
        <div className="container">
            <Row className="my-5">
                <Col>
                    <h1 className="text-center">게시글 목록</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Title</td>
                                <td>Writer</td>
                                <td>Result</td>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(post=>
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td><Link to={`/posts/${post.id}`}>{post.title}</Link></td>
                                    <td>{post.body}</td>
                                    <td>{post.wdate}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    <div className="text-center mt-5">
                        <Button disabled={page===1 && true} onClick={()=>setPage(page-1)}>이전</Button>
                        <span className="mx-3">{page} / {last}</span>
                        <Button onClick={()=>setPage(page+1)}>다음</Button>
                    </div>
                    <div className='text-end mt-5'>
                        <Link to='/post/write'>
                            <Button className='px-5 btn-info'>글쓰기</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Postlist