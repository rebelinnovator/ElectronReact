import React from 'react';

export default (props):JSX.Element=>{
  return(
    <div className="row mt-3">
      <div className="col-6">
        <div>Prev. Credit</div>
        <div>Coin Dragon Service Fee</div>
        <div>TNG Top-Up Value</div>
        <div>Donate Amount</div>
        <div>Add Value</div>
        <div>TNG Reference No.</div>
      </div>
      <div className="col-6">
        <div>LastTxCredit</div>
        <div>ServiceFee</div>
        <div>CustomerNet</div>
        <div>DonationPool</div>
        <div>TNGRefNo</div>
      </div>
    </div>
  )
}
