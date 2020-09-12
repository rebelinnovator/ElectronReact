import React from 'react';
import {Link} from 'react-router-dom';
import routes from '../../constants/routes.json';

import {Divider} from '@material-ui/core';

import Bin from '../../components/admin/Bin';
import DetectIdle from '../../constants/detectIdle';

import classes from '../index.css';

export default function BinPage(): JSX.Element{
    return (
      <DetectIdle>
        <div className={`bg-secondary`}>
            <div className={`d-flex justify-content-between align-items-center ${classes.topBar}`}>
              <img src='../../assets/Images/LOGO-CD-161px.png' className={`${classes.barImg} ml-3`}></img>

              <Link to={routes.HOME} className="mr-3">
                  <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
              </Link>
            </div>

            <div className={`${classes.content} p-3`}>
              <div className="row">
                  <div className="col-6 pl-5">
                      <Bin pos="left"  ID="B20181127-5014"  weight={2.66} count={307} volumn={708} gauge={1.5} value={738.8} />
                  </div>
                  <div className="col-6 pr-5">
                      <Bin pos="right" ID="B20171231-5007"  weight={2.66} count={307} volumn={708} gauge={1.5} value={738.8} />
                  </div>
              </div>
            </div>
            <div className={`d-flex text-white justify-content-around align-items-center ${classes.footer} ${classes.bgBlack} ${classes.font20}`}>
              <div>Max Count: 1000</div>
              <Divider orientation="vertical" flexItem className="bg-white" />
              <div>Max Weight: 1000kg</div>
              <Divider orientation="vertical" flexItem className="bg-white" />
              <div>Max Volumn: 47580cm3</div>
              <Divider orientation="vertical" flexItem className="bg-white" />
              <div className={`${classes.bgYellow} ${classes.black} ${classes.borderRadius} p-1`}>Pickup Alert: 30%</div>
              <div className={`${classes.bgRed} ${classes.borderRadius} p-1`}>Safety Level: 70%</div>
            </div>
        </div>
      </DetectIdle>
    );
}
