import React from 'react';
import {Link} from 'react-router-dom';
import routes from '../../constants/routes.json';

import classes from '../index.css';

import Button from '../../components/CustomButtons/Button';

export default function TuningPage(): JSX.Element{
    return (
        <div className={`${classes.bgGrey} text-center `}>
            <div className={`d-flex justify-content-between align-items-center ${classes.topBar}`}>

                  <img src='../../assets/Images/LOGO-CD-161px.png' className={`${classes.barImg} ml-3`}></img>

              <Button color="success" className={`${classes.font20}`} >Open Port</Button>
              <Button color="rose" className={`${classes.font20}`} >Close Port</Button>
              <Button color="info" className={`${classes.font20}`} >Clear Error</Button>
              <Link to={routes.HOME} className="mr-3">
                  <img src='../../assets/Images/ICON-HOME-Trans.png' className={classes.barImg}></img>
              </Link>
            </div>
            <div className={`${classes.adminContent} pt-3 pl-5 pr-5 `}>
              <div className="d-flex justify-content-between pl-5 pr-5 align-items-center">
                <div className={`font-weight-bold ml-5 ${classes.font36}`}> 0 </div>
                <div className={`font-weight-bold ${classes.font36}`}> Tune Sorter </div>
                <Button color="warning" className={`${classes.font20}`} >Start</Button>
                <Button color="rose" className={`${classes.font20} mr-5`} >Stop</Button>
              </div>
              <div className={`${classes.font24} border border-dark p-2 mt-3`}>   TuneoutBuffer    </div>

              <div className={`d-flex justify-content-end align-items-center mt-3`}>
                <div className={`${classes.tuneImg} d-flex align-items-center`} >
                  <img src='../../assets/Images/tuningImg.png' ></img>
                  <div className={`${classes.tuneVal} ${classes.font60}`}>0</div>
                </div>
                <img src='../../assets/Images/ArrowRight.png' className="mr-5" ></img>
                <div className={`${classes.font60} mr-5 font-weight-bold`} >200</div>
              </div>

              <div className={`d-flex justify-content-end align-items-center`}>
                <div className={`${classes.tuneImg} d-flex align-items-center`} >
                  <img src='../../assets/Images/tuningImg.png' ></img>
                  <div className={`${classes.tuneVal} ${classes.font60}`}>0</div>
                </div>
                <img src='../../assets/Images/ArrowRight.png' className="mr-5" ></img>
                <div className={`${classes.font60} mr-5 font-weight-bold`} >200</div>
              </div>

              <div className={`d-flex justify-content-end align-items-center`}>
                <div className={`${classes.tuneImg} d-flex align-items-center`} >
                  <img src='../../assets/Images/tuningImg.png' ></img>
                  <div className={`${classes.tuneVal} ${classes.font60}`}>0</div>
                </div>
                <img src='../../assets/Images/ArrowRight.png' className="mr-5" ></img>
                <div className={`${classes.font60} mr-5 font-weight-bold`} >200</div>
              </div>
            </div>
        </div>
    );
}
