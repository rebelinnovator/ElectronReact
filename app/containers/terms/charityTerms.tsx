import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { getLang , getLangVal , setLang  } from '../../features/langReducer/reducer';

import DetectIdle from '../../constants/detectIdle';

import routes from '../../constants/routes.json';
import classes from '../index.css';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../components/CustomButtons/Button';
import readAsset from '../../constants/readAsset';

export default function CharityTerms() : JSX.Element{
  const [content,setContent]= useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch= useDispatch();
  const langVal= useSelector(getLangVal);
  const lang = useSelector( getLang);

  const langMenuClick = (event: MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const langMenuClose = (changeLang) => {
    setAnchorEl(null);
    if(changeLang && changeLang!=lang){
      dispatch(setLang(changeLang));
      readAsset(`./assets/Htmls/${langVal.charityTerm[changeLang]}`,(result) => {
        setContent(result);
      });
    }
  };


  useEffect(()=>{
    let going=true;
    if(langVal && Object.keys(langVal).length>0){
      readAsset(`./assets/Htmls/${langVal.charityTerm[lang]}`,(result) => {
        if(going) setContent(result);
      });
    }
    return ()=>{
      going=false;
    };
  },[1]);

  return(
    <DetectIdle >
      <div className={classes.bgBlack}>
        <div className={`${classes.topBar} d-flex justify-content-between align-items-center`}>
          <div>
            <img src='../../assets/Images/LOGO-CD-161px.png' className={`${classes.barImg} ml-3`}></img>
            <Link to={routes.help} className="ml-3">
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

        <div className={`${classes.content} ${classes.wrapper} ${classes.bgBlack}`}>
          <div dangerouslySetInnerHTML={{__html: content}} className={`${classes.bgWhite} ${classes.htmlContent} ${classes.overflow} p-4`}></div>
        </div>
        <div className={`text-uppercase d-flex justify-content-between align-items-center ${classes.bgBlack} ${classes.footer}`}>
          <Link to={routes.HOME} className="ml-3">
            <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
          </Link>
          <div>
            <Button color="rose" className={`${classes.font24} mr-3`} href={`#${routes.HOME}`}> {langVal && langVal.decline? langVal.decline[lang] : ""}</Button>
            <Button color="success" className={`${classes.font24} mr-3`} href={`#${routes.CharityOpt}`} > {langVal && langVal.acceptTerm? langVal.acceptTerm[lang] : ""}</Button>
          </div>
        </div>
      </div>
    </DetectIdle>
  );
};
