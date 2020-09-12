import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import routes from '../../constants/routes.json';
import classes from '../index.css';

import Button from '../../components/CustomButtons/Button';

export default function Maintenance(): JSX.Element{

  useEffect(()=>{

  });

  return (
    <div className={`${classes.bgBlack}`}>
      <div className={`d-flex justify-content-between align-items-center ${classes.topBar}`}>
        <div>

              <img src='../../assets/Images/LOGO-CD-161px.png' className={`${classes.barImg} ml-3`}></img>

        </div>
        <div className="d-flex align-items-center ">
          <Button className={`mr-3 font-wight-bold ${classes.font24} ${classes.black}`} color='white'>Eng </Button>
        </div>
      </div>

      <div className={`${classes.content}`}>
        <div className={`text-white text-center pt-5 text-uppercase ${classes.font36}`}>
          <img src='../../assets/Images/LOGO-CD-161px.png'></img>
          <div>this coin dragon is under maintenance.</div>
          <div>6179-9335</div>
        </div>
      </div>

      <div className={`text-uppercase ${classes.footer}`}>
        <Link to={routes.HOME} className="ml-3">
          <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
        </Link>
      </div>
    </div>
  )
}
