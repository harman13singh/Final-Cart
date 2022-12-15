import React from 'react'

export default function Footer(props) {
  return (
   <div className="row fixed-bottom">
      <button className="btn btn-danger col-6" onClick={()=>{props.resetData()}}><h3>Reset</h3></button>
      <div className="col-6 bg-light"><h3>Total Amount: ₹{props.totalAmount}</h3></div>
      

    </div>


  )
}
