import React , { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';

import {  useSelector } from 'react-redux';
import { getLang , getLangVal } from '../../features/langReducer/reducer';
import {FormControlLabel,Checkbox } from '@material-ui/core';
import {green} from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

import {ReactVideoPlay, VideoSourceType} from 'react-video-play';

import classes from '../index.css';
import Button from '../../components/CustomButtons/Button';
import routes from '../../constants/routes.json';

import DetectIdle from '../../constants/detectIdle';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Instruct(): JSX.Element{

  const langVal= useSelector(getLangVal);
  const lang = useSelector( getLang);

  const [stepOne,setStepOne]=useState(true);
  const [stepTwo,setStepTwo]=useState(true);
  const [stepThree,setStepThree]=useState(true);
  const [showBtn, setShowBtn]=useState(false);
  const [count, setCount]= useState(0);


  useEffect(()=>{
    const timer =setInterval(()=>{
      setCount(count=>{
        if(count>3){
          setShowBtn(true);
        }
        return count+1;
      })
    },1000);
    return function cleanup() {
      clearInterval(timer);
    };
  },[1]);

  return(
    <DetectIdle>
      <div className="m-auto pl-3 pr-3 text-center">
        <div className={`row ${classes.height50}`}>
          <div className="col-4">
            {count>0? <FormControlLabel
              control={<GreenCheckbox checked={stepOne} onChange={()=>{setStepOne(!stepOne)}} name="stepOne" />}
              label={langVal.instrStep1[lang]}
            /> : null}
          </div>
          <div className="col-4">
            { count>1? <FormControlLabel
              control={<GreenCheckbox checked={stepTwo} onChange={()=>{setStepTwo(!stepTwo)}} name="stepTwo" />}
              label={langVal.instrStep2[lang]}
            />: null }
          </div>
          <div className="col-4">
            {count>2? <FormControlLabel
              control={<GreenCheckbox checked={stepThree} onChange={()=>{setStepThree(!stepThree)}} name="stepThree" />}
              label={langVal.instrStep3[lang]}
            />: null}
          </div>
        </div>
        <div className="">
          <ReactVideoPlay
            sources={[{name: "me",source:[{ source: "../../assets/Videos/CDLidVideo.mp4", type: VideoSourceType.video_mp4}]}]}
            enableSlider={false}
            autoplay={true}
            muted={false}
            controls={false}
          />
        </div>
        {
          showBtn? <div className={`${classes.bgSteelBlue} ${classes.borderBlack5} d-flex justify-content-between align-items-center mt-3`}>
              <Link to={routes.HOME}>
                <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
              </Link>
              <h3>{langVal.instrStep4[lang]} </h3>
              <Button color="success" href={`#${routes.countMain}`} className={`${classes.font24} mr-3`}> {langVal.instrBtn[lang]} </Button>
            </div> : null
        }
      </div>
    </DetectIdle>
  )
}
