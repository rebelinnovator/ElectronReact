import React from 'react';
import Button from '../../components/CustomButtons/Button';

import classes from '../../containers/index.css';


export default function Bin(props:{pos: string , ID: string, weight: number, count: number, volumn: number , gauge : number , value: number}): JSX.Element{

    const {pos, ID, weight, count, volumn, gauge, value}= props;
    return(
        <div className={`text-white ${classes.font20}`}>

            <div className={`d-flex text-center ${props.pos=="left"? "justify-content-start" : "justify-content-end"}`}>
              <div className={`bg-success p-1 ${classes.black} `}>ACTIVE_FILL</div>
            </div>
            <div className={`${classes.bgBlack} p-3`}>

                <div className={`row`}>
                    <div className='col-5'>ID:</div>
                    <div className="col-7"> {ID}</div>
                </div>
                <div className={`row`}>
                    <div className='col-5'> Weight (kg):</div>
                    <div className="col-7"> {weight} </div>
                </div>
                <div className={`row`}>
                    <div className='col-5'>Count:</div>
                    <div className="col-7"> {count} </div>
                </div>
                <div className={`row`}>
                    <div className='col-5'>Volumn (cm3):</div>
                    <div className="col-7"> {volumn} </div>
                </div>
                <div className={`row`}>
                    <div className='col-5'>Gauge:</div>
                    <div className="col-7"> {gauge} %</div>
                </div>
                <div className={`row mt-5`}>
                    <div className='col-5'>Value:</div>
                    <div className="col-7"> {value} </div>
                </div>
            </div>
            <div className="d-flex justify-content-between mt-5">
              <Button color="danger" className={`${classes.font20} text-capitalize`} >Remove {pos} Bin</Button>
              <Button color="success" className={`${classes.font20} text-capitalize`} >Insert  {pos} Bin</Button>
            </div>
        </div>
    )
}
