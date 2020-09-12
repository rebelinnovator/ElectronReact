import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import routes from '../../constants/routes.json';
import classes from '../index.css';
import { useDispatch , useSelector } from 'react-redux';
import { getLang , getLangVal , setLang  } from '../../features/langReducer/reducer';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../components/CustomButtons/Button';
import {Divider} from '@material-ui/core';

import BankSection from './BankSection';
import CharitySection from './CharitySection';
import HCSection from './HCSection';
import MerchantSection from './MerchantSection';
import OctopusSection from './OctopusSection';
import SaveSection from './SaveSection';
import TNGSection from './TNGSection';

import EmailReceipt from './EmailReceipt';
import SMSReceipt from './SMSReceipt';
import DetectIdle from '../../constants/detectIdle';

export default function Checkout(): JSX.Element{

  const [openEmail, setEmail]=useState(false);
  const [openSMS, setSMS]=useState(false);

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

  useEffect(()=>{

  });

  const closeEmail=(result)=>{
    setEmail(false);
  }
  const onClickEmail=()=>{
    setEmail(true);
  }
  const closeSMS=(result)=>{
    setSMS(false);
  }
  const onClickSMS=()=>{
    setSMS(true);
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

        <div className={`p-3 ${classes.checkout}`}>
          <div className="row">
            <div className="col-6 pl-5 pr-5">

              <div className={`p-4 mr-1`}>
                <div className={`small text-center pl-3 pr-3 ${classes.bgWhite} ${classes.checkoutContent}`}>
                  <div className={``}>
                    <img src='../../assets/Images/LOGO-CD-161px.png' className={classes.checkoutLogo}></img>
                  </div>
                  <div className="row mt-1 ">
                    <div className="col-5">
                      <div>Date/Time</div>
                      <div>Octopus No.</div>
                      <div>Receipt No.</div>
                      <div>Device No.</div>
                      <div>Machine No.</div>
                    </div>
                    <div className="col-7">
                      <div>2020-08-04 14:32</div>
                      <div>oct.12345678</div>
                      <div>dbs.12345678</div>
                      <div>device.12345678</div>
                      <div>Losangels.12345678</div>
                    </div>
                  </div>
                  <div className="row mt-1 ">
                    <div className="col-4">
                      <div>Coin Type</div>
                    </div>
                    <div className="col-4">
                      <div>#</div>
                    </div>
                    <div className="col-4">
                      <div>Coin Value</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <Divider variant="middle"/>
                    </div>
                  </div>
                  <div className="row mt-1 ">
                    <div className="col-4">

                      <div>10c</div>
                      <div>20c</div>
                      <div>50c</div>
                      <div>1</div>
                      <div>2</div>
                      <div>5</div>
                      <div>10</div>
                    </div>
                    <div className="col-4">

                      <div>1</div>
                      <div>0</div>
                      <div>0</div>
                      <div>0</div>
                      <div>0</div>
                      <div>0</div>
                      <div>0</div>
                    </div>
                    <div className="col-4">

                      <div>0.1</div>
                      <div>0</div>
                      <div>0</div>
                      <div>0</div>
                      <div>0</div>
                      <div>0</div>
                      <div>0</div>
                    </div>
                    <div className="col-12">
                      <Divider variant="middle"/>
                    </div>
                    <div className="col-8">Coin Value Received</div>
                    <div className="col-4">$ 0</div>
                    <div className="col-12">
                      <Divider variant="middle"/>
                    </div>
                  </div>
                  <OctopusSection />
                </div>
              </div>
              <img src="../../assets/Images/ReceiptFrame.png" className={`${classes.width400} ${classes.height579} ${classes.checkoutFrame} `} />
            </div>
            <div className={`col-6 text-white text-center ${classes.font24}`}>
              <div className="mt-3"> {langVal.thank[lang]} </div>
              <div className="mt-3"> {langVal.saveReceipt[lang]} </div>
              <div>
                <Button color="success" className="w-75" href={`#${routes.loading}`}>
                  <div>
                    <div className={`${classes.font24}`}> {langVal.skip[lang]} </div>
                    <div> {langVal.processSpillOver[lang]} </div>
                  </div>
                </Button>
              </div>
              <div>
                <Button color="info" className={`${classes.font24} w-75`} onClick={onClickEmail} > {langVal.emailReceipt[lang]} </Button>
              </div>
              <div>
                <Button color="danger" className={`${classes.font24} w-75`} onClick={onClickSMS} > {langVal.smsReceipt[lang]} </Button>
              </div>
              <div className="mt-3">This is a (green) paper-free machine</div>
            </div>
          </div>
        </div>
        <EmailReceipt open={openEmail} close={closeEmail} />
        <SMSReceipt open={openSMS} close={closeSMS} />
      </div>
    </DetectIdle>
  )
}
