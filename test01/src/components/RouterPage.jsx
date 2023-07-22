import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Comp01 from './Comp01';
import Comp02 from './Comp02';
import Comp03 from './Comp09';
import Post from './Comp08';

const RouterPage = () => {
  return (
    <div>
        <div>
            <ul>
              <li><Link to="/">홈</Link></li>
              <li><Link to="/todos">할일목록</Link></li>
              <li><Link to="/posts">게시글목록</Link></li>
            </ul>
        </div>
        <hr/>
        <Routes>
            <Route path="/" element={<Comp01 />}/>
            <Route path="/todos" element={<Comp02 />}/>
            <Route path="/posts" element={<Comp03 />}/>
            <Route path="/posts/:id" element={<Post />}/>
        </Routes>
    </div>
  )
}

export default RouterPage