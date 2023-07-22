import React from 'react'

const Product = (props) => {
  return (
        <tr>
            <td>{props.pro.no}</td>
            <td>{props.pro.name}</td>
            <td>{props.pro.price}</td>
        </tr>
  )
}

export default Product