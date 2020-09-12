import React from 'react';
import classes from '../../containers/index.css';

export default function Limits(): JSX.Element {
    return (
      <div>
        <div className={`text-warning mt-2 ${classes.font20}`} >LIMITS</div>

        <div className="d-flex justify-content-between align-items-center  mt-2">
          <div className="ml-2">Customer Counter (Last):</div>
          <div className={`text-white bg-primary p-2 mr-2`}>003</div>
        </div>
        <div className="d-flex justify-content-between align-items-center  mt-1">
          <div className="ml-2">Bin Alerts:</div>
          <div className={`text-white bg-primary p-2 mr-2`}>BinAlert</div>
        </div>
        <div className="d-flex justify-content-between align-items-center  mt-1">
          <div className="ml-2">Octopus Quota:</div>
          <div className={`text-white bg-primary p-2 mr-2`}>0</div>
        </div>
        <div className="d-flex justify-content-between align-items-center  mt-1">
          <div className="ml-2">Pickup info:</div>
          <div className={`text-white bg-primary p-2 mr-2`}>pickupinfo</div>
        </div>
        <div className="d-flex justify-content-between align-items-center  mt-1">
          <div className="ml-2">Alert Sent:</div>
          <div className={`text-white bg-primary p-2 mr-2`}>FALSE</div>
        </div>
      </div>
    );
}
