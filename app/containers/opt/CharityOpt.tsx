import React,{useState, useEffect, MouseEvent, useCallback} from 'react';
import {Link , useHistory} from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { getLang ,  setLang  } from '../../features/langReducer/reducer';

import routes from '../../constants/routes.json';
import classes from '../index.css';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../components/CustomButtons/Button';

import CharityPoll from '../poll/CharityPoll';

import readAsset from '../../constants/readAsset';
import DetectIdle from '../../constants/detectIdle';

export default function CharityOpt(): JSX.Element{

  let history=useHistory();

  const [opts,setOpts]= useState([]);
  const [openPoll,setOpenPoll]=useState(false);

  const [selectedOpt, selectOpt]= useState({});

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
    }
  };

  useEffect(()=>{
    let going=true;
    readAsset('./assets/json/CharityOptions.json',(result) => {
      if (going) setOpts(JSON.parse(result).charityOpts);
    });
    return ()=>(going=false);
  },[readAsset]);

  const onClickOpt=(item)=>{
    setOpenPoll(true);
    selectOpt(item);
  }

  const closePoll=(result)=>{
    setOpenPoll(false);
    if(result){
      history.push(routes.warn);
    }
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

        <div className="pl-2 pr-2">
          <div className={`${classes.content} ${classes.overflow} pl-3 pr-3`}>
            <div className={`row`}>
              {
                opts.map((item,idx,arr)=>(
                  <div key={idx} className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 mt-3`}>
                    <div className={`p-xl-4 p-lg-4 p-md-3 p-sm-2 p-2 h-100 ${classes.bgWhite} ${classes.pointer}`}>
                      <a onClick={()=>onClickOpt(item)} > <img src={`../../assets/${item.image}`} className={`w-100 ${classes.optImg}`} /> </a>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <CharityPoll open={openPoll} close={closePoll} opt={selectedOpt} />

        <div className={`text-uppercase d-flex justify-content-between align-items-center ${classes.footer}`}>
          <Link to={routes.HOME} className="ml-3">
            <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
          </Link>
        </div>
      </div>
    </DetectIdle>
  )
}
