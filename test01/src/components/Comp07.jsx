import React, { useState, useRef } from 'react'
//이벤트 - onClick(), onChange(), onKeyPress()
const Comp07 = () => {
    const [name, setName] = useState("김기태");
    const [address, setAddress] = useState("서울시 금천구 가산동");
    const [sel, setSel] = useState("서울");
    const ref_name = useRef(null);

    const onClick = ()=> {
        alert('이름:' + name + "\n주소:" + address);
        setName('');
        setAddress('');
        ref_name.current.focus();
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            onClick();
        }
    }
  return (
    <div>
         <input placeholder='이름을 입력하세요!'
                value={name}
                ref={ref_name}
                onChange={(e)=>setName(e.target.value)} />
            <hr/>
            <input placeholder='주소를 입력하세요!' 
                value={address}
                onKeyPress={onKeyPress}
                onChange={(e)=>setAddress(e.target.value)} />
            <hr/>

            <select onChange={(e)=>setSel(e.target.value)}>
                <option value="서울">서울</option>
                <option value="경기">경기</option>
                <option value="강원">강원</option>
            </select>
            
            <hr />

            <h2>입력된 정보</h2>
            <ul>
                <li><span>{name}</span> </li>
                <li><span>{address}</span></li>
                <li><span>{sel}</span></li>
            </ul>

            <button onClick={ onClick }>확인</button>
    </div>
  )
}

export default Comp07