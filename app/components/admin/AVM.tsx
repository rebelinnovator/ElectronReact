import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classes from '../../containers/index.css';

export default function AVM(): JSX.Element {

    return (
        <div>
          <div className={`text-warning mt-2 ${classes.font20}`}>SETUP</div>

          <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="ml-2">Default Language:</div>
            <div className={`mr-2 text-white bg-success p-2 ${classes.font20}`}>TCH</div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-1">
            <div className="ml-2">Machine ID:</div>
            <div className={`mr-2 text-white bg-primary p-2 `}>DRAGON041</div>
          </div>
          <div className="d-flex justify-content-between align-items-center  mt-1">
            <div className="ml-2">Location ID:</div>
            <div className={`mr-2 text-white bg-primary p-2 `} >1038</div>
          </div>
          <div className={`ml-2 mr-2 text-white bg-primary p-2 `}>1038 (AEON Tai Chi Kok)</div>

          <div className="d-flex justify-content-between align-items-center  mt-1">
            <div className="ml-2">Model #:</div>
            <div className={`mr-2 text-white bg-primary p-2 `}>JH3800</div>
          </div>
        </div>
    );
}
