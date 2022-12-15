import React from 'react'
import Product2 from './Product2.js'
export default function ProductList2(props) {
  return (
    props.productList2.map((product,i)=>{
        return <Product2 product={product} key={i} index={i} increment2={props.increment2} 
          decrement2={props.decrement2}/>
    })
  )
}
