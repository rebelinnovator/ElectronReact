import React from 'react';

import { useSelector } from 'react-redux';
import { getLang , getLangVal  } from '../../features/langReducer/reducer';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import classes from '../index.css';
import Button from '../../components/CustomButtons/Button';

export default function CharityPoll(props) {

  const lang = useSelector( getLang );
  const langVal= useSelector( getLangVal );

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={()=>{ props.close(false); }}
        fullWidth={true}
        maxWidth="xl"
      >
        <DialogContent>
          <div className={`row `}>
            <div className={`col-8`}>
              <div className={`p-4 border border-dark ${classes.charityPollContent} ${classes.overflow}`}>
                <h1>{props.opt.name}</h1>
                <h2>Year : {props.opt.year} </h2>
                <h3>
                  WebSite : {props.opt.website}
                </h3>
                <h4>
                  Email : {props.opt.email}
                </h4>
                <div className={`${classes.font24} mt-5`} dangerouslySetInnerHTML={{__html: props.opt[lang] && props.opt[lang].length? props.opt[lang].join('<br>'): ""}}>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6 text-center">
                  <Button onClick={()=>{props.close(false);}} color="primary" className={`${classes.font24}`}> {langVal.decline[lang]} </Button>
                </div>
                <div className="col-6 text-center">
                  <Button onClick={()=>{props.close(true);}} color="primary" className={`${classes.font24} `}>  {langVal.agree[lang]} </Button>
                </div>
              </div>
            </div>
            <div className={`col-4`}>
              <div className={`${classes.charityPollImg} ${classes.overflow} border border-dark p-3`}>
                <div className={`border border-secondary p-1`}>
                  <img src={`../../assets/${props.opt.image}`} className={`w-100`}></img>
                </div>
                <div className={`border border-secondary mt-3 p-1`}>
                  <img src={`../../assets/${props.opt.showcaseImage}`} className={`w-100`}></img>
                </div>
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
