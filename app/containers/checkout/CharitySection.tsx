import React from 'react';

export default (props):JSX.Element=>{
  return(
    <div className="row mt-3">
      <div className="col-6">
        <div>Prev. Credit</div>
        <div>Donate Amount</div>
        <div>Full Name</div>
        <div>Email</div>
      </div>
      <div className="col-6">
        <div>LastTxCredit</div>
        <div>CustomerNet</div>
        <div>DonorName</div>
        <div>DonorEmail</div>
      </div>
    </div>
  )
}
