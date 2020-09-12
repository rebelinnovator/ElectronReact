import React from 'react';
import { Link } from 'react-router-dom';

import {remote} from 'electron';

import routes from '../../constants/routes.json';

import Button from '../../components/CustomButtons/Button';

import AVM from '../../components/admin/AVM';
import Hardware from '../../components/admin/Hardware';
import Ports from '../../components/admin/Ports';
import Limits from '../../components/admin/Limits';
import Params from '../../components/admin/Params';
import Modes from '../../components/admin/Modes';

import classes from '../index.css';
import DetectIdle from '../../constants/detectIdle';

export default function AdminMenuPage(): JSX.Element {

    const onExit = (event: React.ChangeEvent<{ value: unknown }>) => {
        remote.getCurrentWindow().close();
    };
  return (
    <DetectIdle>
        <div className={`d-flex justify-content-between align-items-center ${classes.topBar} ${classes.bgBlack}`}>
            <img src='../../assets/Images/LOGO-CD-161px.png' className={`${classes.barImg} ml-3`}></img>
            <Button type="button" color="info" className={classes.font20}>Bin Status</Button>
            <Button type="button" color="warning" className={classes.font20}>Tuning</Button>
            <Button type="button" color="primary" className={classes.font20}>Nightrun</Button>
            <div className={`text-center text-white`}>
                <div className={classes.topText}> ADMIN MENU</div>
                <div className={`${classes.topText1} mt-1`}> 1.0 </div>
            </div>
            <Button type="button" color="danger" onClick={onExit} className={classes.font20}>Exit Player</Button>
            <Link to={routes.HOME} className="mr-3">
                <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
            </Link>
        </div>
        <div className={`bg-secondary font-weight-bold text-center pl-3 pr-3 pt-1 ${classes.adminContent}`}>
          <div className="row">
            <div className={`${classes.adminItem1} ${classes.borderBlack5}`} >  <AVM />  </div>
            <div className={`${classes.adminItem2} ${classes.borderBlack5}`} > <Hardware/>  </div>
            <div className={`${classes.adminItem3} ${classes.borderBlack5}`} > <Ports/>  </div>
          </div>
          <div className="row">
            <div className={`${classes.adminItem1} ${classes.borderBlack5}`} ><Limits /> </div>
            <div className={`${classes.adminItem2} ${classes.borderBlack5}`} > <Params/>  </div>
            <div className={`${classes.adminItem3} ${classes.borderBlack5}`} > <Modes/>   </div>
          </div>
        </div>
    </DetectIdle>
  );
}
