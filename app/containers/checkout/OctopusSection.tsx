import React from 'react';

export default (props):JSX.Element=>{
  return(
    <div className="row mt-3">
      <div className="col-6">
        <div>Next Tx. Credit</div>
        <div>Prev. Credit</div>
        <div>Coin Dragon Service Fee</div>
        <div>Donate Amount</div>
        <div>Add Value</div>
        <div>Remaining Value</div>
      </div>
      <div className="col-6">
        <div>NextTxCredit</div>
        <div>LastTxCredit</div>
        <div>ServiceFee</div>
        <div>DonationPool</div>
        <div>CustomerNet</div>
        <div>OctopusRemains</div>
      </div>
    </div>
  )
}
