import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {Card, Col, Row, Button} from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom';

const PostRead = () => {
    const navigator = useNavigate();
    const {id}=useParams();
    const [post, setPost] = useState({
        id:'',
        title:'',
        body:'',
        writer:'',
        wdate:''
    });
    const {title, body, writer, wdate} = post;
    const callAPI = async() => { 
        const result = await axios.get(`/posts/read/${id}`);
        console.log(result.data);
        setPost(result.data);
    }
    useEffect(()=>{
        callAPI();
    }, [post]);


    const onDelete = async() => {
        if(window.confirm(`${id}번 게시글을 삭제하실래요?`)) {
            await axios.post(`/posts/delete/${id}`);
            navigator('/posts');
        }
    }

    return (
        <Row className="my-5">
            <Col className="p-5">
                <h1 className='text-center mb-5'>게시글 상세보기</h1>
                {writer === 'kim' && 
                    <div className='text-end mb-2'>
                        <Link to={`/posts/update/${id}`}>
                            <Button className='btn-sm me-2'>수정</Button>
                        </Link>    
                        <Button variant='danger btn-sm'>삭제</Button>
                    </div>
                }
                <Card>
                    <Card.Header>
                        [{id}] {title}
                    </Card.Header>
                    <Card.Body>
                        {body}
                    </Card.Body>
                    <Card.Footer>
                        Created on {wdate} by {writer}
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default PostRead