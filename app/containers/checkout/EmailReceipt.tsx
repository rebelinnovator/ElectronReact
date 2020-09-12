import React, { useState , useRef , useEffect } from 'react';

import { useSelector } from 'react-redux';
import { getLang , getLangVal } from '../../features/langReducer/reducer';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import classes from '../index.css';
import Button from '../../components/CustomButtons/Button';
import CustomInput from '../../components/CustomInput/CustomInput';

import KeyboardWrapper from '../../constants/keyboardWrapper';

export default function EmailReceipt(props) {

  const [email,setEmail]=useState('');

  const keyboard = useRef(null);

  const initEmail=(val)=>{
    setEmail(val);
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
            <h3> {langVal.emailReceipt[lang]} </h3>
            <div className="row align-items-baseline">
              <div className="col-4">
                <Button color="info" className={`${classes.font20} ${classes.black} `}> {langVal.send[lang]} {langVal.email[lang]} </Button>
              </div>
              <div className="col-8">
                <CustomInput
                  labelText={langVal.plzEnterEmail[lang]}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    value: email
                  }}
                />
              </div>
            </div>
            <KeyboardWrapper keyboardRef={keyboard} onChange={setEmail} init={initEmail} />

          </div>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}
