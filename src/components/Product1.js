import React from "react";

export default function Product1(props) {
  return (
    <>
      <div className="eachrow">
        <span className="containerCreatedIssue">{props.index+1}.{props.product.name}</span>
        <span class="badge bg-danger pricebutton1">
     ₹{props.product.price}
        </span>
        <span
          class="btn-group buttons1 "
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger" onClick={()=>{props.decrement(props.index)}}>
            -
          </button>
          <button type="button" class="btn btn-light ">
            {props.product.quantity}
          </button>
          <button type="button" class="btn btn-danger" onClick={()=>props.increment(props.index)}>
            +
          </button>
        </span>
        <span className="priceItem1"> ₹{props.product.price*props.product.quantity}</span>
      </div>
    </>
  );
}
