import React, { useState } from 'react'

const Comp05 = () => {
  //let count = 0;
  const [count, setCount] = useState(100);
  const onIncrease = () => {
    setCount(count+1);
  }
  const onDecrease = () => {
    setCount(count-1);
  }
  return (
    <>
        <h1>state 변수란?</h1>
        <h2>카운트 : {count}</h2>
        <div>
            <button onClick={onDecrease}>감소</button>
            <button onClick={onIncrease}>증가</button>
        </div>
    </>
  )
}

export default Comp05