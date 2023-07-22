import React from 'react'
import Product from './Product'

const Comp04 = () => {
    const products=[
        {no: '1', name:'새우깡', price:500},
        {no: '2', name:'꿀꽈배기', price:800},
        {no: '3', name:'문어깡', price:700}
    ]
  return (
    <div>
        <h1>상품 목록</h1>
        <table>
          <thead>
            <tr>
              <th>번호</th><th>상품명</th><th>가격</th>
            </tr>
          </thead>
          <tbody>
              {products.map(s=>
                  <Product key={s.no} pro={s} />
              )}
          </tbody>
        </table>
    </div>
  )
}

export default Comp04