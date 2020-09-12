import React from 'react';
import {Link} from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { getLang , getLangVal , setLang  } from '../../features/langReducer/reducer';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import routes from '../../constants/routes.json';
import classes from '../index.css';

import Button from '../../components/CustomButtons/Button';
import DetectIdle from '../../constants/detectIdle';

export default function RetryCoin(): JSX.Element{

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

      <div className={`pl-3 pr-3 ${classes.content}`}>
        <div className={`text-center pb-2 ${classes.bgYellow}`}>
          <div className={`font-weight-bold ${classes.font36}`}> {langVal.NoCoinWarning[lang]} </div>
          <div className={`text-center row align-items-center pl-5 pr-5 mt-1`} >
            <div className={`${classes.font24} col-4 font-weight-bold`}> {langVal.instrStep1[lang]} </div>
            <div className={`${classes.font20} col-4 font-weight-bold`}> {langVal.instrStep2[lang]} </div>
            <div className={`${classes.font24} col-4 pr-5  font-weight-bold`}> {langVal.instrStep3[lang]} </div>
          </div>
          <img src="../../assets/Images/POPOUT-LOADING4.jpg" className="mt-1" />
          <div className={`${classes.bgRed} d-flex justify-content-between ml-3 mr-3 mt-1 align-items-center`}>
            <img src="../../assets/Images/step4.png" />
            <span className={`${classes.font36}`}> {langVal.instrStep4[lang]} </span>
            <Button color="success" href={`#${routes.countMain}`} className={`${classes.borderBlack5} ${classes.font24} mr-3`}> {langVal.instrBtn[lang]} </Button>
          </div>

        </div>
      </div>

      <div className={`text-uppercase d-flex justify-content-between align-items-center ${classes.footer}`}>
        <Link to={routes.HOME} className="ml-3">
          <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
        </Link>

      </div>
    </div>
  </DetectIdle>
  );
}
