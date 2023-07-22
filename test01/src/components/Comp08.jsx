import React, { useRef, useState } from 'react'
import Products from './Products';

const Comp08 = () => {
    const ref_name = useRef(null);  //이름에 포커스
    const [products, setProducts] = useState([
        {code:1, name:'냉장고',price:300},
        {code:2, name:'세탁기',price:250},
        {code:3, name:'스타일러',price:150},
    ]);

  const onDelete = (code) => {
    if(window.confirm(`${code}번 상품을 삭제하실래요?`)){
      const newProducts = products.filter(p => p.code !== code);
      setProducts(newProducts);
    }
  }  

  const [form, setForm] = useState({
    'code':4,
    'name':'냉장고',
    'price':2500000
  });

  const onChangeForm = (e) => {
    setForm({
        ...form,
        [e.target.name]:e.target.value
    })
  }

  const {code, name, price} = form;

  const onSubmit = (e) => {
    e.preventDefault();
    if(window.confirm(`${code}:${name}:${price} 등록하실래요?`)){
        setProducts(products.concat(form));
        setForm({
            ...form,
            code: code+1,
            name:'',
            price:200
        });
        ref_name.current.focus();
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="code" 
            onChange={onChangeForm} readOnly
            type="text" placeholder="상품코드" value={code}/> {code}
        <hr />
        <input name="name" 
            onChange={onChangeForm} ref={ref_name} 
            type="text" placeholder="상품이름" value={name}/> {name}
        <hr />
        <input name="price" 
            onChange={onChangeForm}
            type="text" placeholder="상품가격" value={price}/> {price}
        <hr />
        <input type="submit" value="등록" />
        <input type="reset" value="취소" />
      </form>
      <hr />
      <Products pro={products} del={onDelete}/>
    </div>
  )
}

export default Comp08