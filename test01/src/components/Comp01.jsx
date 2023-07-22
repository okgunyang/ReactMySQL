import React from 'react';

const Comp01 = () => {
    const style={
        color:'red',
        background:'#666',
        fontSize:'30px'
    }
    const name="김기태";
    const nickname="리액트신";
    const nick=""; 
    return (
        <div>
            <h1 style={style}>세 번째 스타일 적용하기</h1>
            <h2>나의 이름은 {name} 입니다.</h2>
            <p>{name === '김기태' ? <span>김기태</span> : <span>김기태가 아닙니다.</span>}</p>
            {nickname && <h2>김기태의 별명은 {nickname}</h2>}
            {nick || <h2>별명이 없습니다.</h2>}
        </div>
    );
}

export default Comp01