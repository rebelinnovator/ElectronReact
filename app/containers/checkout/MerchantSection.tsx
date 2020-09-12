import React from 'react';

export default (props):JSX.Element=>{
  return(
    <div className="row mt-3">
      <div className="col-6">
        <div>Prev. Credit</div>
        <div>E-Coupon Value (95%)</div>
        <div>Email</div>
      </div>
      <div className="col-6">
        <div>LastTxCredit</div>
        <div>CustomerNet</div>
        <div>DonorEmail</div>
      </div>
      <div className="col-12 mt-3">
        <div>Within 3 business days</div>
        <div>Email sent within 1 business day</div>
      </div>
    </div>
  )
}
