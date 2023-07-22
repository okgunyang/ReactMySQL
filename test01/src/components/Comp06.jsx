import React, { useState } from 'react'

const Comp06 = () => {
  const [color, setColor] = useState('#999');
  return (
    <div>
        <h1 style={{background:color, color:'#fff'}}>안녕하세요!</h1>
        <div>
            <button onClick={()=>setColor('blue')}>파랑</button>
            <button onClick={()=>setColor('red')}>빨강</button>
            <button onClick={()=>setColor('green')}>초록</button>
        </div>
    </div>
  )
}

export default Comp06