import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { getLang , getLangVal , setLang  } from '../../features/langReducer/reducer';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Divider } from '@material-ui/core';

import routes from '../../constants/routes.json';
import classes from '../index.css';

import Button from '../../components/CustomButtons/Button';
import DetectIdle from '../../constants/detectIdle';

export default function TNGScan(): JSX.Element{

  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch= useDispatch();
  const langVal= useSelector(getLangVal);
  const lang = useSelector( getLang);

  const langMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const langMenuClose = (changeLang) => {
    setAnchorEl(null);
    if(changeLang && changeLang!=lang){
      dispatch(setLang(changeLang));
    }
  };

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
            <div>
              <Button className={`mr-3 font-weight-bold ${classes.font24} ${classes.black}  ${classes.width100} `}  onClick={langMenuClick} color='white'> {lang} </Button>
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

        <div className={`${classes.content} ${classes.font24} p-3  text-center`}>
          <div className={`row`}>
            <div className={`col-5 text-white`}>
              <div className={`row`}>
                <div className={'col-8'}>
                  {langVal.coin[lang]}
                </div>
                <div className={'col-4'}>
                  $ 0.0
                </div>
              </div>
              <div className={`row`}>
                <div className={'col-8'}>
                  {langVal.rate[lang]}
                </div>
                <div className={'col-4'}>
                    90%
                </div>
              </div>

              <div className={'row'}>
                <div className={"col-12"}>
                  <Divider variant="middle" className={classes.bgWhite}/>
                  <div className={`${classes.font36} mt-5`}> {langVal.tngValue[lang]} </div>
                  <div className={`${classes.font36} font-weight-bolder`}>$ 0.0</div>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className={classes.chartreuse}>
                {langVal.OpenTNGApp[lang]} - {langVal.topup[lang]} - Coin Dragon
              </div>
              <div className="p-3">
                <div className={`${classes.TNGQR} ${classes.bgWhite}`}>
                  <div> {langVal.TNGConnecting[lang]} </div>
                  <Button color="success" href={`#${routes.Checkout}`} className={`${classes.font24} ${classes.black} mr-3`}> {langVal.TNGSuccess[lang]} </Button>
                  <Button color="primary" className={`${classes.font24} ${classes.black} mr-3`}> {langVal.TNGQRFail[lang]} </Button>
                </div>
              </div>
              <div className={classes.chartreuse}>
                {langVal.TngQr[lang]}
              </div>
            </div>
          </div>
        </div>

        <div className={`text-uppercase d-flex justify-content-between align-items-center ${classes.footer}`}>
          <Link to={routes.HOME} className="ml-3">
            <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
          </Link>
          <Button color="success" href={`#${routes.TNGScan}`} className={`${classes.font24} ${classes.black} mr-3`}> {langVal.continue[lang]} </Button>
        </div>
      </div>
    </DetectIdle>
  )
}
