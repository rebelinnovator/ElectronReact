import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { getLang , setLang  } from '../../features/langReducer/reducer';

import routes from '../../constants/routes.json';
import classes from '../index.css';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../components/CustomButtons/Button';

import readAsset from '../../constants/readAsset';
import DetectIdle from '../../constants/detectIdle';

export default function BankOpt(): JSX.Element{
  const [opts,setOpts]= useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch= useDispatch();
  const lang = useSelector( getLang);

  const langMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const langMenuClose = (changeLang) => {
    setAnchorEl(null);
    if(changeLang && changeLang!=lang){
      dispatch(setLang(changeLang));
      readAsset(`./assets/Htmls/${langVal.bankTerm[changeLang]}`,(result) => {
        setContent(result);
      });
    }
  };

  useEffect(()=>{
    let going=true;
    readAsset('./assets/json/BankOptions.json',(result) => {
      if(going) setOpts(JSON.parse(result).bankOpts);
    });
    return ()=>(going=false);
  },[readAsset]);

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

        <div className="pl-2 pr-2">
          <div className={`pl-3 pr-3 ${classes.content} ${classes.overflow}`}>
            <div className={`row`}>
              {
                opts.map((item,idx,arr)=>(
                  <div key={idx} className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 mt-3`}>
                    <div className={`p-xl-4 p-lg-4 p-md-3 p-sm-2 p-2 h-100 ${classes.bgWhite}`}>
                      <Link to={`${routes.BankPoll}/${idx}`}> <img src={`../../assets/${item.image}`} className={`w-100 ${classes.optImg}`} /> </Link>
                    </div>
                  </div>
                ))
              }
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
  )
}
