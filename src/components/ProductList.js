import React from 'react'
import Product1 from './Product1.js'
export default function ProductList(props) {
  return (
    props.productList1.map((product,i)=>{
        return <Product1 product={product} key={i} index={i}
        increment={props.increment}
        decrement={props.decrement}/>
    })
  )
}
