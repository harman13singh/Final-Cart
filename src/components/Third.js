
import React from 'react'
import Thirdp from './Thirdp.js'
export default function Third(props) {
  return (
    props.productList2.map((product,i)=>{
        return <Thirdp product={product} key={i} index={i} increment2={props.increment2} 
          decrement2={props.decrement2}/>
    })
  )
}

