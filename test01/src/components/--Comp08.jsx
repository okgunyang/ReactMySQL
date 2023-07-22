import React, { useRef, useState } from 'react'

const Comp08 = ({onInsert}) => {
    const [form, setForm] = useState({
        code: 4,
        name: '냉장고',
        price: 250
    });

    const {code, name, price} = form;
    const ref_name = useRef(null);

    const onChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(window.confirm('저장하실래요?')){
            setForm({
                code: code+1,
                name: '',
                price: ''
            });
            ref_name.current.focus();
            onInsert(form);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input name='code' placeholder='상품코드'
                value={code} onChange={onChangeForm}/>
            <hr/>
            <input name='name' ref={ref_name} placeholder='상품이름'
                value={name} onChange={onChangeForm}/>
            <hr/>
            <input name='price' placeholder='상품가격'
                value={price} onChange={onChangeForm}/>
            <hr/>
            <button>입력</button>
            <hr />
            <fieldset>
                <legend>입력 정보</legend>
                <table>
                    <thead>
                        <tr>
                            <th>상품코드</th>
                            <th>상품이름</th>
                            <th>상품가격</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>{code}</span> </td>
                            <td><span>{name}</span></td>
                            <td><span>{price}</span></td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
            <fieldset>
                <legend>등록된 정보</legend>
                
            </fieldset>
        </form>
    )
}

export default Comp08