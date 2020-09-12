import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { getLang , setLang , getLangVal } from '../../features/langReducer/reducer';
import routes from '../../constants/routes.json';
import classes from '../index.css';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../components/CustomButtons/Button';
import DetectIdle from '../../constants/detectIdle';

export default function TNGPoll(): JSX.Element{

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

        <div className={`text-white pl-3 pr-3 m-auto`}>
          <div className={`${classes.content} ${classes.overflow} p-3`}>
            <div className={`border border-white p-3`}>
              <div> {langVal.guideStep1[lang]} </div>
              <div className="row text-center mt-2">
                <div className="col-3">
                  <div>{langVal.charity[lang]} </div>
                </div>
                <div className="col-3">
                  <div>{langVal.octopus[lang]} </div>
                </div>
                <div className="col-3">
                  <div>{langVal.tng[lang]} </div>
                </div>
                <div className="col-3">
                  <div>{langVal.bank[lang]} </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <img src="../../assets/Images/BADGE-Donation.jpg" className="w-100"></img>
                </div>
                <div className="col-3">
                  <img src="../../assets/Images/BADGE-Octopus.jpg" className="w-100"></img>
                </div>
                <div className="col-3">
                  <img src="../../assets/Images/BADGE-TNG.jpg" className="w-100"></img>
                </div>
                <div className="col-3">
                  <img src="../../assets/Images/BADGE-Bank.jpg" className="w-100"></img>
                </div>
              </div>
            </div>
            <div className={`border border-white p-3 mt-2`}>
              <div>{langVal.guideStep2[lang]}  </div>
            </div>
            <div className={`border border-white p-3 mt-2`}>
              <div>{langVal.guideStep3[lang]} </div>
              <div className="row text-center mt-2">
                <div className="col-4">{langVal.instrStep1[lang]} </div>
                <div className="col-4">{langVal.instrStep2[lang]} </div>
                <div className="col-4">{langVal.instrStep3[lang]} </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <img src="../../assets/Images/POPOUT-LOADING4C.jpg" className="w-100"></img>
                </div>
              </div>
            </div>
            <div className={`border border-white p-3 mt-2`}>
              <div>{langVal.guideStep4[lang]} </div>
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
