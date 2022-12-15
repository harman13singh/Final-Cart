import React from 'react'
import Fourp from './Fourp.js'
export default function Four(props) {
  return (
   props.productList1.map((product,i)=>{
        return <Fourp product={product} key={i} index={i} increment={props.increment} 
          decrement={props.decrement}/>
    })
  )
}
