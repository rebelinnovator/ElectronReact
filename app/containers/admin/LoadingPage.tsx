import React,{useState, useEffect } from 'react';
import {Link , useHistory} from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getLang , getLangVal } from '../../features/langReducer/reducer';

import {Fade} from '@material-ui/core';
import routes from '../../constants/routes.json';
import classes from '../index.css';

import Button from '../../components/CustomButtons/Button';


export default function LoadingPage(): JSX.Element{
  const [fade, setFade] = useState(true);
  const [count, setCount] =useState(0);

  const langVal= useSelector(getLangVal);
  const lang = useSelector( getLang);

  let history=useHistory();

  useEffect(()=>{
    const timer=window.setInterval(()=>{
      setCount(count=>{
        if(count>10){
          history.push(routes.HOME);
          return 0;
        }else{
          return count+1;
        }
      });
      setFade(fade=>!fade);
    },500);
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      clearInterval(timer);
    };
  },[1]);

  return (
    <div className={`${classes.bgBlack}`}>
      <div className={`d-flex justify-content-between align-items-center ${classes.topBar}`}>
        <div>

              <img src='../../assets/Images/LOGO-CD-161px.png' className={`${classes.barImg} ml-3`}></img>

        </div>
        <div className="d-flex align-items-center ">
        </div>
      </div>

      <div className={`${classes.content}`}>
        <Fade in={fade}>
          <div className={`text-white text-center pt-5 ${classes.font36}`}>
            {langVal.systemLoad[lang]}
          </div>
        </Fade>
      </div>

      <div className={`text-uppercase d-flex justify-content-between align-items-center ${classes.footer}`}>
        <Link to={routes.HOME} className="ml-3">
          <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
        </Link>
      </div>
    </div>
  )
}
