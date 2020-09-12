import React,{ useEffect} from 'react';
import {Link , useHistory , useLocation } from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { getLang , getLangVal , setLang  } from '../../features/langReducer/reducer';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import routes from '../../constants/routes.json';
import classes from '../index.css';

import Button from '../../components/CustomButtons/Button';

export default function MachineFull(): JSX.Element{

  const history=useHistory();
  const location = useLocation();

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

  const goPrevPage=()=>{
    history.push(location.state.from);
  }

  useEffect(()=>{

  });

  return (
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

      <div className={`m-auto w-75 ${classes.content}`}>
        <div className={`text-center pt-2 text-uppercase ${classes.font36} ${classes.height130}`}>
          <div className={`bg-white p-3`}>
            <div> {langVal.IdleMessage[lang]} </div>
            <div >09</div>
          </div>
          <div className="mt-5 d-flex justify-content-between">
            <Button className={`font-wight-bold ${classes.font24} ${classes.black}`} color='rose' href={`#${routes.HOME}`} > {langVal.decline[lang]} </Button>
            <Button className={`font-wight-bold ${classes.font24} ${classes.black}`} color='success' onClick={goPrevPage} > {langVal.continue[lang]} </Button>
          </div>
        </div>
      </div>

      <div className={`text-uppercase ${classes.footer}`}>
        <Link to={routes.HOME} className="ml-3">
          <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
        </Link>
      </div>
    </div>
  )
}
