import React from 'react';

import Button from '../../components/CustomButtons/Button';

import classes from '../../containers/index.css';

export default function Modes(): JSX.Element {

    return (
        <div className="pb-2">
          <div className={`text-warning mt-2 ${classes.font20}`}>MODES</div>
          <div className="d-flex align-items-center justify-content-around mt-2">
            <div>
              <div>Camera ID:</div>
              <div><Button type="text" color="success" className={`${classes.adminBtn} ${classes.width100} ${classes.font16}`}>0</Button></div>
            </div>
            <div>
              <div>Device Check:</div>
              <div><Button type="text" color="success" className={`${classes.adminBtn} ${classes.width100} ${classes.font16}`}>GO</Button></div>
            </div>
          </div>
          <div>
            <div>Lid Control:</div>
            <div><Button type="text" color="success" className={`  ${classes.font16}`}>4: KTT LID</Button></div>
          </div>
          <div className="d-flex align-items-center justify-content-around">
            <div>
              <div>Environment:</div>
              <div><Button type="text" color="success" className={`${classes.adminBtn} ${classes.width70} ${classes.font16}`}>PROD</Button></div>
            </div>
            <div>
              <div>Cleaning:</div>
              <div><Button type="text" color="success" className={`${classes.adminBtn} ${classes.width70} ${classes.font16}`}>ON</Button></div>
            </div>
            <div>
              <div>Interest:</div>
              <div><Button type="text" color="success" className={`${classes.adminBtn} ${classes.width70} ${classes.font16}`}>OFF</Button></div>
            </div>
          </div>

        </div>
    );
}
