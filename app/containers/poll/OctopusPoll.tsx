import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { getLang , getLangVal , setLang  } from '../../features/langReducer/reducer';

import routes from '../../constants/routes.json';
import classes from '../index.css';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../components/CustomButtons/Button';

import DetectIdle from '../../constants/detectIdle';

export default function OctopusPoll() : JSX.Element{

  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch= useDispatch();
  const langVal= useSelector(getLangVal);
  const lang = useSelector(getLang);

  const langMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const langMenuClose = (changeLang) => {
    setAnchorEl(null);
    if(changeLang && changeLang!=lang){
      dispatch(setLang(changeLang));
    }
  };

  return(
    <DetectIdle>
      <div className={classes.bgBlack}>
        <div className={`d-flex justify-content-between align-items-center ${classes.topBar}`}>
          <div>
            <Link to={routes.adminAccess} className="m-2">
                <img src='../../assets/Images/LOGO-CD-161px.png' className={classes.barImg}></img>
            </Link>
            <Link to={routes.help} className="m-2">
                <img src='../../assets/Images/ICON-FAQ.png' className={classes.barImg}></img>
            </Link>
          </div>
          <div className="d-flex align-items-center ">
            <div>
              <Button className={`mr-3 font-weight-bold ${classes.font24} ${classes.black} ${classes.width100} `}  onClick={langMenuClick} color='white'> {lang} </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={()=>langMenuClose(false)}
                >
                <MenuItem onClick={()=>langMenuClose('eng')}>Eng</MenuItem>
                <MenuItem onClick={()=>langMenuClose('cn')}>Chinese</MenuItem>
              </Menu>
            </div>
          </div>
        </div>

        <div className={`${classes.content}`}>
          <div className={`m-auto text-center ${classes.wrapper}`}>
            <div className={`text-uppercase p-2 ${classes.font36} ${classes.bgWhite}`}> {langVal.OctopusBalanceTitle[lang]} </div>
            <div className={`row text-uppercase text-white mt-5 ${classes.font36}`}>
              <div className="col-6"> {langVal.OctopusRemainingValue[lang]} </div>
              <div className="col-6">HKD XXX.XX</div>
            </div>
            <div className={`mt-5 text-white ${classes.font24}`}> {langVal.MaxStoredValueNote[lang]} </div>
            <div className={`text-uppercase mt-5 text-white font-weight-bold ${classes.font24}`}> {langVal.DepositAndTapAgain[lang]} </div>
          </div>
        </div>

        <div className={`text-uppercase d-flex justify-content-between align-items-center ${classes.bgBlack} ${classes.footer}`}>
          <div>
            <Link to={routes.HOME}>
              <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
            </Link>
            <Button type="button" color="warning" className={`ml-5 ${classes.font24}`} > {langVal.retry[lang]} </Button>
          </div>
          <Button type="button" color="success" className={`mr-5 ${classes.font24}`} href={`#${routes.warn}`} > {langVal.continue[lang]} </Button>
        </div>
      </div>
    </DetectIdle>
  );
};
