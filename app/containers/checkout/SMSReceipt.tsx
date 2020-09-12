import React, { useState , useRef , useEffect } from 'react';

import { useSelector } from 'react-redux';
import { getLang , getLangVal } from '../../features/langReducer/reducer';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import classes from '../index.css';
import Button from '../../components/CustomButtons/Button';
import CustomInput from '../../components/CustomInput/CustomInput';

import NumberKeyboardWrapper from '../../constants/numberKeyboard';

export default function SMSReceipt(props) {

  const [SMS,setSMS]=useState('');

  const keyboard = useRef(null);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    setSMS(input);
    keyboard.current.setInput(input);
  };

  const initSMS=(val)=>{
    setSMS(val);
  }
  const langVal= useSelector(getLangVal);
  const lang = useSelector( getLang);

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.close}
        fullWidth={true}
        maxWidth="xl"
      >
        <DialogContent>
          <div className="text-center">
            <h3> {langVal.smsReceipt[lang]} </h3>
            <div className="row align-items-baseline">
              <div className="col-6">
                <div className="row align-items-baseline">
                  <div className="col-4 text-right">
                    +852
                  </div>
                  <div className="col-8">
                    <CustomInput
                      labelText="SMS"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: SMS
                      }}
                    />
                  </div>
                </div>
                <Button color="info" className={`${classes.font20} ${classes.black} text-uppercase`}> {langVal.send[lang]} SMS </Button>
              </div>
              <div className="col-6">
                <NumberKeyboardWrapper keyboardRef={keyboard} onChange={setSMS} init={initSMS} />
              </div>
            </div>

          </div>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}
