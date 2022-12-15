import React from 'react'

export default function Thirdp(props) {
  return (
   <>
    <div className="ThirdRow row">
        
        <span className="containerCreatedIssue3 col-6">{props.index+13}. {props.product.name}</span>
        <div class="badge bg-danger col-2 pricebutton3"><span className="itext">₹{props.product.price}</span></div>
        <div
          class="btn-group col-2 buttons3"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger" onClick={()=>{props.decrement2(props.index)}}>
            -
          </button>
          <button type="button" class="btn btn-light itext">
            {props.product.quantity}
          </button>
          <button type="button" class="btn btn-danger" onClick={()=>{props.increment2(props.index)}}>
            +
          </button>
        </div>
        <span className=" priceItem3 col-2"><span class="itext"> ₹{props.product.price*props.product.quantity}</span></span>
    </div>
    </>
  )
}
