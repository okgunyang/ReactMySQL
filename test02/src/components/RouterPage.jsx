import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Postlist from './Postlist';
import PostWrite from './PostWrite';
import PostRead from './PostRead';
import PostUpdate from './PostUpdate';

const RouterPage = () => {
  return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="/">React</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/posts">게시글 목록</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<Homepage/>} />
                <Route path='/posts' element={<Postlist/>} />
                <Route path='/posts/write' element={<PostWrite/>} />
                <Route path='/posts/:id' element={<PostRead/>} />
                <Route path='/posts/update/:id' element={<PostUpdate/>} />
            </Routes>
        </>    
  )
}

export default RouterPage