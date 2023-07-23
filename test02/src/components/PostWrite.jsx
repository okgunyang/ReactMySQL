import axios from 'axios';
import React, { useState } from 'react'
import {Row, Col, Table, Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const PostWrite = () => {
    const navigator = useNavigate();
    const [form, setForm] = useState({
        title:'',
        body:'',
        writer:'kim'
    });
    const {title, body, writer} = form;
    const onChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const onInsert = async() => {
        if(title===''){
            alert('제목을 입력하세요~!');
        } else if(body===''){
            alert('내용을 입력하세요~!');
        } else {
            await axios.post('/posts/insert', form);
            alert("새로운 글이 등록되었습니다.");
            navigator('/posts');
        }
    }
    return (
        <div className="container">
            <Row>
                <Col className="py-5">
                    <h1 className="my-5 text-center">게시글 등록</h1>
                    <Form>
                        <Form.Control name="title" value={title} className="my-4" onChange={onChangeForm} placeholder="제목을 입력하세요" />
                        <Form.Control name="body" value={body} as='textarea' rows='10' onChange={onChangeForm} placeholder="내용을 입력하세요"/>
                        <div>
                            <Button onClick={()=>onInsert()} className="my-4 me-2">등록</Button>
                            <Button className="my-4 me-2" variant='secondary'>취소</Button>
                        </div>
                    </Form>
                    
                </Col>
            </Row>
        </div>
    )
}

export default PostWrite