import React  from 'react';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { getLang , getLangVal , setLang  } from '../features/langReducer/reducer';

import routes from '../constants/routes.json';

import {remote} from 'electron';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../components/CustomButtons/Button';
import classes from './index.css';
import edge from 'electron-edge-js';

var hello = edge.func(function () {/*
  async (input) => {
      return "CSharp welcomes " + input.ToString();
  }
*/});

hello('', function (error, result) {
  if (error) throw error;
  alert(111);
  alert(result);
});
export default function HomePage(): JSX.Element {

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

  const onExit = (event: React.ChangeEvent<{ value: unknown }>) => {
    remote.getCurrentWindow().close();
  };

  return (
    <div>
      <div className={`d-flex justify-content-between align-items-center ${classes.bgBlack} ${classes.topBar}`}>
        <div>
          <Link to={routes.adminAccess} className="ml-3">
              <img src='../../assets/Images/LOGO-CD-161px.png' className={classes.barImg}></img>
          </Link>
          <Link to={routes.help} className="ml-2">
              <img src='../../assets/Images/ICON-FAQ.png' className={classes.barImg}></img>
          </Link>
        </div>
        <div className="d-flex align-items-center ">
          <Button className={ `mr-3 font-weight-bold ${classes.font24} `} onClick={onExit} color='danger' >Exit Player</Button>
          <div>
            <Button className={`mr-3 font-weight-bold ${classes.font24} ${classes.black} ${classes.width100} `}  onClick={langMenuClick} color='white'> {lang} </Button>
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

      <div className={`text-center ${classes.bgBlack} ${classes.content} p-5`}>
        <div className={`text-uppercase text-white ${classes.font36}`}> {langVal && langVal.homeSelect? langVal.homeSelect[lang] : ""} </div>
        <div className="row mt-2">
          <div className="col-4">
            <Link to={routes.CharityTerms}> <img src="../../assets/Images/BADGE-Donation.jpg" className="w-100"></img> </Link>
          </div>
          <div className="col-4">
            <Link to={routes.BankTerms}> <img src="../../assets/Images/BADGE-Bank.jpg" className="w-100"></img></Link>
          </div>
          <div className="col-4">
            <Link to={routes.OctopusTerms}> <img src="../../assets/Images/BADGE-Octopus.jpg" className="w-100"></img> </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4">
            <Link to={routes.TNGTerms}> <img src="../../assets/Images/BADGE-TNG.jpg" className="w-100"></img> </Link>
          </div>
          <div className="col-4">
            <Link to={routes.JousunTerms}> <img src="../../assets/Images/BADGE-Jousun.jpg" className="w-100"></img></Link>
          </div>
          <div className="col-4">
            <Link to={routes.HCTerms}> <img src="../../assets/Images/BADGE-Heycoins-ENG.PNG" className="w-100"></img> </Link>
          </div>
        </div>
      </div>

      <div className={`${classes.bgYellow} ${classes.footer} font-weight-bolder text-center d-flex align-items-center`}>
        <img src="../../assets/Images/warningSign.png" className={`${classes.barImg} ml-3`}></img>
        <div className={`${classes.cashNoteBanner} ${classes.font24}`}> {langVal && langVal.homeWarn? langVal.homeWarn[lang] : ""} </div>
      </div>

    </div>
  );
}
