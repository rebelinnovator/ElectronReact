import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import routes from '../../constants/routes.json';
import classes from '../index.css';

import Button from '../../components/CustomButtons/Button';
import DetectIdle from '../../constants/detectIdle';

export default function TNGPoll(): JSX.Element{


  useEffect(()=>{

  });

  return (
    <DetectIdle>
      <div className={`${classes.bgBlack}`}>
        <div className={`d-flex justify-content-between align-items-center ${classes.topBar}`}>
          <div>
            <img src='../../assets/Images/LOGO-CD-161px.png' className={`${classes.barImg} ml-3`}></img>
          </div>
          <div className="d-flex align-items-center ">
            <Button className={`mr-3 font-wight-bold ${classes.font24} ${classes.black}`} color='white'>Eng </Button>
          </div>
        </div>

        <div className={`${classes.content} p-5`}>
          <div className={`${classes.borderWhite5} ${classes.borderRadius} w-75 m-auto p-5`}>
            <div>
              <img src="../../assets/Images/facebook.png" className={`${classes.barImg}`} />
              <span className={`${classes.font36} text-white ml-5`}>CoindragonHK</span>
            </div>
            <div className="mt-3">
              <img src="../../assets/Images/email_icon.png" className={`${classes.barImg}`} />
              <span className={`${classes.font36} text-white ml-5`}>info@coindragon.co</span>
            </div>
            <div className="mt-3">
              <img src="../../assets/Images/whatsapp.png" className={`${classes.barImg}`} />
              <span className={`${classes.font36} text-white ml-5`}>6179-9335 (Whatsapp)</span>
            </div>
          </div>
        </div>

        <div className={`text-uppercase ${classes.footer}`}>
          <Link to={routes.HOME} className="ml-3">
            <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
          </Link>
          <Link to={routes.help} className="ml-3">
              <img src='../../assets/Images/icon-back-white.png' className={classes.barImg}></img>
          </Link>
        </div>
      </div>
    </DetectIdle>
  )
}
