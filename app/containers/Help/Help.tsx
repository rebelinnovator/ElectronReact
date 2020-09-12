import React from 'react';
import {Link} from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { getLang , setLang , getLangVal } from '../../features/langReducer/reducer';
import routes from '../../constants/routes.json';
import classes from '../index.css';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../components/CustomButtons/Button';

import DetectIdle from '../../constants/detectIdle';

export default function Help(): JSX.Element{

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
            <Button className={`ml-3 font-wight-bold ${classes.font20} ${classes.black}`} color='rose' href={`#${routes.maintenance}`}>maintenance </Button>
            <Button className={`ml-3 font-wight-bold ${classes.font24} ${classes.black}`} color='rose' href={`#${routes.machineFull}`}>machine full </Button>
            <Button className={`ml-3 font-wight-bold ${classes.font24} ${classes.black}`} color='rose' href={`#${routes.Idle}`}>idle </Button>
            <Button className={`ml-3 font-wight-bold ${classes.font24} ${classes.black}`} color='rose' href={`#${routes.tunning}`}>Tuning </Button>
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

        <div className={`${classes.content} pl-3 pr-3`}>
          <div className={`m-auto w-75 text-uppercase text-center text-white ${classes.font24}`}>
            <img src='../../assets/Images/LOGO-CD-161px.png' className={classes.staticLogo}></img>
            <h1>help menu</h1>
            <div className="row mt-3">
              <div className="col-4">
                <Button href={`#${routes.Guide}`} color="transparent" className={`${classes.borderWhite5} ${classes.borderRadius} ${classes.height130} ${classes.font20} w-100 text-white text-decoration-none`}>
                  {langVal.guide[lang]}
                </Button>
              </div>
              <div className="col-4">
                <Button href={`#${routes.FAQ}`} color="transparent" className={`${classes.borderWhite5} ${classes.borderRadius} ${classes.height130} ${classes.font20} w-100 text-white text-decoration-none`}>
                  {langVal.faq[lang]}
                </Button>
              </div>
              <div className="col-4">
                <Button href={`#${routes.Policy}`} color="transparent" className={`${classes.borderWhite5} ${classes.borderRadius} ${classes.height130} ${classes.font20} w-100 text-white text-decoration-none`}>
                  {langVal.policy[lang]}
                </Button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-4">
                <Button className={`${classes.borderWhite5} ${classes.borderRadius} ${classes.height130} ${classes.font24} w-100 text-white text-decoration-none`}
                  href={`#${routes.Octopus}`} color="transparent" muiClasses={{label: classes.justLabel1}}>
                  {langVal.retrieveByOctopus[lang]}
                </Button>
              </div>
              <div className="col-4">
                <Button className={`${classes.borderWhite5} ${classes.borderRadius} ${classes.height130} ${classes.font24} w-100 text-white text-decoration-none`}
                  href={`#${routes.PIN}`} color="transparent" muiClasses={{label: classes.justLabel1}}>
                  {langVal.retrieveByPin[lang]}
                </Button>
              </div>
              <div className="col-4">
                <Button href={`#${routes.Contact}`} color="transparent" className={`${classes.borderWhite5} ${classes.borderRadius} ${classes.height130} ${classes.font24} w-100 text-white text-decoration-none`}>
                  {langVal.contact[lang]}
                </Button>
              </div>
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
