import React, { useRef, useState } from 'react'
import Products from './Products'

const Comp09 = () => {
    const [products, setProducts] = useState([
        {code: 1, name:'오브제 냉장고', price:350},
        {code: 2, name:'삼성세탁기', price:250},
        {code: 3, name:'오브제 스타일러', price:150}
    ]);

    const onInsert = (product) => {
        setProducts(products.concat(product));
        if(window.confirm(`${code}:${name}:${price} 저장하실래요?`)){
            setForm({
                ...form,
                code: code+1,
                name: name,
                price: price
            });
            ref_name.current.focus();
        }
    }
    
    const onDelete = (code)=> {
        if(window.confirm(code + '번 상품을 삭제하실래요?')) {
            setProducts(products.filter(p=>p.code !== code))
        }
    }
    const ref_name = useRef(null);

    const [form, setForm] = useState({
        code: 4,
        name: '냉장고',
        price: 250
    });

    const {code, name, price} = form;

    const onChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(window.confirm(`${code}:${name}:${price} 저장하실래요?`)){

            setForm({
                ...form,
                code: code+1,
                name: '',
                price: 200
            });
            ref_name.current.focus();
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
            <button onClick={onInsert}>입력</button>
            <hr />
            <fieldset>
                <legend>등록된 정보</legend>
                <Products products={products} del={onDelete} />
            </fieldset>
        </form>
    )
}

export default Comp09