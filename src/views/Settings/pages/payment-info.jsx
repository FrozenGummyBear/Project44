import React from 'react'

const PaymentInfo=()=>{
    return (<>
    <h1  >Payment Information</h1>
    <div className="row-user">
        <span className="field-name">Paypal</span>
        <span className="field-value">*************</span>
        <span className="edit-link">Edit</span>
      </div>
      <div className="row-user">
        <span className="field-name">Venmo</span>
        <span className="field-value">*************</span>
        <span className="edit-link">Edit</span>
      </div>
    </>)
}
export default PaymentInfo;