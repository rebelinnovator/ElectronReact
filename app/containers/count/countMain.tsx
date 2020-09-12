import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { getLang , getLangVal , setLang  } from '../../features/langReducer/reducer';

import {Divider} from '@material-ui/core';
import routes from '../../constants/routes.json';
import classes from '../index.css';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../components/CustomButtons/Button';

const imgs=['10HKD','5HKD','2HKD','1HKD','50c','20c','10c'];

export default function CountMain(): JSX.Element{

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

  const [rad, setRad] = React.useState(0);
  const [posX, setPosX] = React.useState(0);
  const [which,setWhich]= React.useState(0);

  useEffect(()=>{
    const timeout= setInterval(()=>{
      setRad(rad=>rad+30);
      setPosX(posX=>{
        if(posX>530) {
          setWhich(which=>{
            if(which==6) return 0;
            return which+1;
          });
          return 0;
        }
        return posX+20;
      });
    },50);
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      clearInterval(timeout);
    };
  },[1]);

  return(
    <div className={`${classes.bgBlack}`}>
      <div className={`d-flex justify-content-between align-items-center ${classes.bgBlack} ${classes.topBar}`}>
        <div>

              <img src='../../assets/Images/LOGO-CD-161px.png' className={`${classes.barImg} ml-3`}></img>

          <Link to={routes.help} className="ml-2">
              <img src='../../assets/Images/ICON-FAQ.png' className={classes.barImg}></img>
          </Link>
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

      <div className={`text-white text-center p-3 ${classes.content}`}>
        <div className="row">
          <div className={`col-8 ${classes.countAnimate}`}>
            <img src="../../assets/Images/LOGO-CD-161px.png" className={classes.countLogo} style={{transform: `rotate(${-rad}deg)`}}/>


            <div className="text-left">
              <img src={`../../assets/Images/${imgs[which]}.png`} className={`${classes.barImg}`} style={{transform: `translateX(${posX}px) rotate(${rad}deg)`}}/>
            </div>
            <Divider className={`${classes.bgWhite} mt-3`}/>
            <div className="text-left mt-2">
              <img src={`../../assets/Images/10c.png`} className={`${classes.barImg} ml-2`}/>
              <img src={`../../assets/Images/20c.png`} className={`${classes.barImg} ml-2`}/>
              <img src={`../../assets/Images/50c.png`} className={`${classes.barImg} ml-2`}/>
              <img src={`../../assets/Images/1HKD.png`} className={`${classes.barImg} ml-2`}/>
              <img src={`../../assets/Images/2HKD.png`} className={`${classes.barImg} ml-2`}/>
              <img src={`../../assets/Images/5HKD.png`} className={`${classes.barImg} ml-2`}/>
              <img src={`../../assets/Images/10HKD.png`} className={`${classes.barImg} ml-2`}/>
            </div>
          </div>

          <div className="col-4">
            <div className={`${classes.pt100} ${classes.font24}`}>
              <div className="row">
                <div className="col-6"> {langVal.coin[lang]} </div>
                <div className="col-6"> $ 0.0</div>
              </div>
              <div className="row">
                <div className="col-6"> {langVal.rate[lang]} </div>
                <div className="col-6"> 90% </div>
              </div>
            </div>
            <Divider className={classes.bgWhite}/>
            <h1 className="text-uppercase" > 30.7 $</h1>
            <div><Button color="success" href={`#${routes.countCash}`} className={`${classes.font24}`} > {langVal.success[lang]} </Button></div>
            <div><Button color="rose" href={`#${routes.retryCoin}`} className={`${classes.font24}`} > {langVal.failure[lang]} </Button></div>
          </div>
        </div>

      </div>

      <div className={`text-uppercase d-flex  align-items-center ${classes.footer} bg-white`} >
        <Link to={routes.HOME} className={`ml-3 ${classes.disable} `} >
          <img src='../../assets/Images/ICON-HOME.png' className={`${classes.barImg} `}  ></img>
        </Link>
        <div className={`w-75 text-center font-weight-bold ${classes.font24}`} > {langVal.CountingNotice[lang]} </div>
      </div>
    </div>
  )
}
