import React from 'react'

const Products = ({products, del}) => {
    return (
        <div>
            <h2>상품목록</h2>
            <table>
                <thead>
                    <tr>
                        <td>상품코드</td>
                        <td>상품이름</td>
                        <td>상품가격</td>
                        <td>상품삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p, index)=>
                        <tr key={index}>
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