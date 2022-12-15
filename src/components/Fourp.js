import React from 'react'

export default function Fourp(props) {
  return (
    <>
      <div className="foureachrow row">
        <span className="containerCreatedIssue4 col-6">{props.index+1}.{props.product.name}</span>
        <span class="badge bg-danger pricebutton4 col-2">
   <span className="itext">₹{props.product.price}</span>
        </span>
        <span
          class="btn-group buttons4 col-2"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger" onClick={()=>{props.decrement(props.index)}}>
            -
          </button>
          <button type="button" class="btn btn-light ">
            {props.product.quantity}
          </button>
          <button type="button" class="btn btn-danger" onClick={()=>{props.increment(props.index)}}>
            +
          </button>
        </span>
        <span className="priceItem4 col-2"> <span class="itext"> ₹{props.product.price*props.product.quantity}</span></span>
      </div>
    </>
  )
}
