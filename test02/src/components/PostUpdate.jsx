import React, { useState, useEffect } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const PostUpdate = () => {
    const [loading, setLoading] = useState(false);
    const navigator = useNavigate();
    const {id}=useParams();
    const [form, setForm] = useState({
        id:'',
        title:'',
        body:''
    });

    const {title, body} = form;

    const callAPI = async() => { 
        setLoading(true);
        const result = await axios.get(`/posts/read/${id}`);
        console.log(result.data);
        setForm(result.data);
        setLoading(false);
    }

    useEffect(()=>{
        callAPI();
    }, []);

    const onChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const onUpdate = async() => {
        if(title===''){
            alert('제목을 입력하세요~!');
        } else if(body===''){
            alert('내용을 입력하세요~!');
        } else {
            await axios.post('/posts/update', form);
            alert("글이 수정되었습니다.");
            navigator(-1);
        }
    }

    const onUpdate2 = async() => {
        if(window.confirm(`${id} 번 게시글을 수정하실래요?`)){
            await axios.post('/posts/update', form);
            navigator(-1);
        }
    }

    if(loading) return <h1 className='my-5 text-center'>로딩 중입니다.......</h1>
    return (
        <div className="container">
            <Row className="my-5">
                <Col className3="p-5">
                    <h1 className="text-center">게시글 수정</h1>
                    <hr />
                    <Form>
                        <Form.Control name="title" value={title} className="my-4" onChange={onChangeForm} placeholder="제목을 입력하세요" />
                        <Form.Control name="body" value={body} as='textarea' rows={10} onChange={onChangeForm} placeholder="내용을 입력하세요"/>
                        <div>
                            <Button onClick={()=>onUpdate()} className="my-4 me-2">수정</Button>
                            <Button onClick={callAPI} className="my-4 me-2" variant='secondary'>취소</Button>
                        </div>
                    </Form>
                </Col>
            </Row> 
        </div>    
    )
}


export default PostUpdate