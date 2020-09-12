import React from 'react';

export default (props):JSX.Element=>{
  return(
    <div className="row mt-3">
      <div className="col-6">
        <div>Prev. Credit</div>
        <div>x Rate 90% = Net Value</div>
        <div>Donate Amount</div>
        <div>Bank Transfer Amount</div>
      </div>
      <div className="col-6">
        <div>LastTxCredit</div>
        <div>GrossTxValue</div>
        <div>DonationPool</div>
        <div>CustomerNet</div>
      </div>
      <div className="col-12 mt-2">
        Deposited within 3 working days.
      </div>
    </div>
  )
}
