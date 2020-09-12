import React from 'react';

import Button from '../../components/CustomButtons/Button';
import classes from '../../containers/index.css';

export default function Hardware(): JSX.Element {
    return (
        <div className="pb-2">
          <div className={`text-warning mt-2 ${classes.font20}`}>TESTING</div>
          <div className="mt-2">
            <Button type="button" color="danger" className={`${classes.adminBtn} ${classes.width100}`} >PUNCH</Button>
            <Button type="button" color="info" className={`${classes.adminBtn} ${classes.width100}`}>VIB ON</Button>
            <Button type="button" color="warning" className={`${classes.adminBtn} ${classes.width100}`}>SCOOP</Button>
            <Button type="button" color="rose" className={`${classes.adminBtn} ${classes.width100}`}>LIGHT ON</Button>
          </div>
          <div>
            <Button type="button" color="white" className={`${classes.adminBtn} ${classes.width100}`}>What?</Button>
            <Button type="button" color="info" className={`${classes.adminBtn} ${classes.width100}`}>VIB OFF</Button>
            <Button type="button" color="warning" className={`${classes.adminBtn} ${classes.width100}`}>REVERSE</Button>
            <Button type="button" color="rose" className={`${classes.adminBtn} ${classes.width100}`}>LIGHT OFF</Button>
          </div>
          <div>
            <Button type="button" color="primary" className={`${classes.adminBtn} ${classes.width100}`}>Success Tone</Button>
            <Button type="button" color="danger" className={`${classes.adminBtn} ${classes.width100}`}>Fail Tone</Button>
            <Button type="button" color="success" className={`${classes.adminBtn} ${classes.width100}`}>Timeout Tone</Button>
            <Button type="button" color="danger" className={`${classes.adminBtn} ${classes.width100}`}>PlayE22</Button>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div className={`${classes.qrImg} bg-info`}>  QR SCAN </div>
            <div className="ml-3">
              <div className={`${classes.bgBlack} ${classes.width100} text-white`}>QR RESULT QR RESULT QR RESULT</div>
              <Button type="button" color="warning" className={`${classes.adminBtn} ${classes.width100}`}>QR SCAN</Button>
            </div>
          </div>
        </div>
    );
}
