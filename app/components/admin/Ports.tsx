import React from 'react';
import Button from '../../components/CustomButtons/Button';

import classes from '../../containers/index.css';

export default function Ports(): JSX.Element {
    return (
      <div >
          <div className={`text-warning mt-2 ${classes.font20}`}>PORTS</div>
          <div className="mt-2" > <Button type="button " color="rose" className={`${classes.adminBtn} ${classes.width100} ${classes.font16}`} >refresh</Button> </div>

          <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="ml-2">OCTOPUS:</div>
            <div className={`text-white bg-primary p-2 `}>COM3</div>
            <Button type="button" color="success" className={`mr-2 ${classes.adminBtn} ${classes.width100} ${classes.font16}`} >OPEN</Button>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="ml-2">SORTER:</div>
            <div className={`text-white bg-primary p-2 `}>COM4</div>
            <Button type="button" color="success" className={`mr-2 ${classes.adminBtn} ${classes.width100} ${classes.font16}`} >OPEN</Button>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="ml-2">CONTROL:</div>
            <div className={`text-white bg-primary p-2 `}>COM6</div>
            <Button type="button" color="success" className={`mr-2 ${classes.adminBtn} ${classes.width100} ${classes.font16}`} >OPEN</Button>
          </div>
      </div>
    );
}
