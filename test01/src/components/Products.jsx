import React, { useState } from 'react'

const Products = ({pro, del}) => {
    console.log(pro);
  return (
    <div>
        <h1>상품목록</h1>
        <table>
            <thead>
                <tr>
                    <th width={100}>코드</th>
                    <th width={300}>상품명</th>
                    <th width={100}>가격</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {pro.map(p=>
                    <tr key={p.code}>
                        <td>{p.code}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td><button onClick={()=>del(p.code)}>삭제</button></td>
                    </tr>
                    )}
            </tbody>
        </table>
    </div>
  )
}

export default Products