import React,{useState, useEffect , MouseEvent} from 'react';
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

export default function Scan(): JSX.Element{

  const [err,setErr]=useState(true);
  const [open, setOpen]= useState(false);

  useEffect(()=>{

  });

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

  const success=(evt: MouseEvent)=>{
    setOpen(true);
  }

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

        <div className={`${classes.content} ${classes.font24} p-3 text-center`}>
          <div className={`row`}>
            <div className={`col-6 text-white`}>
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
                    $ 0.0
                </div>
              </div>

              <div className={'row'}>
                <div className={"col-12"}>
                  <Divider variant="middle" className={classes.bgWhite}/>
                  <div className={`${classes.font36} mt-5 text-uppercase`}> {langVal.octopusValue[lang]} </div>
                  <div className={`${classes.font36} font-weight-bolder`}>$ 0.0</div>
                </div>
              </div>
            </div>
            <div className="col-6">
              { open ?
              <div className={`${classes.bgYellow} ${classes.octopusOpen}  pt-5 pb-5 text-uppercase`}>
                <h3> {langVal.octopusRemain[lang]} </h3>
                <h1 className="mt-5">$ 00.00</h1>
              </div> :
              <div>
                <div className={`row text-center ${classes.optopusError}`}>
                  <div className={`col-12 text-white ${classes.optopusMsg} ${classes.overflow}`}>
                    {err? `Show Error` : null}
                  </div>
                  {err?
                  <div className="col-12 d-flex align-items-center justify-content-around">
                    <Button color='rose' className={`text-uppercase ${classes.font20} `}> {langVal.changeOption[lang]} </Button>
                    <Button color='danger' className={`text-uppercase ${classes.font24}`}> {langVal.retry[lang]} </Button>
                  </div> : null}
                </div>
                <a onClick={success} className={classes.pointer}> <img src={`../../assets/Images/${langVal.octopusCheckImg[lang]}`}></img> </a>
              </div>}
            </div>
          </div>
        </div>

        <div className={`text-uppercase d-flex justify-content-between align-items-center ${classes.footer}`}>
          <Link to={routes.HOME} className="ml-3">
            <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
          </Link>
          { open? <Button color='success' href={`#${routes.Checkout}`} className={`text-uppercase mr-3 ${classes.font24}`}> {langVal.continue[lang]} </Button> : null }
        </div>
      </div>
    </DetectIdle>
  )
}
