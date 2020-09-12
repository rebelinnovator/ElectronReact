import React,{useState, useEffect , useRef , MouseEvent } from 'react';
import {Link , useHistory} from 'react-router-dom';

import routes from '../../constants/routes.json';
import classes from '../index.css';

import Button from '../../components/CustomButtons/Button';
import CustomInput from '../../components/CustomInput/CustomInput';
import Snackbar from "../../components/Snackbar/Snackbar";
import AddAlert from "@material-ui/icons/AddAlert";

import KeyboardWrapper from '../../constants/keyboardWrapper';
import DetectIdle from '../../constants/detectIdle';

export default function AdminAccess(): JSX.Element{

  const [code,setCode]=useState('');
  const keyboard = useRef(null);

  const [timeStr,setTimeStr]=useState("");
  const [pwd, setPwd] = useState("");
  const [notify,setNotify]=useState(false);
  const [msg,setMsg]=useState('');

  let history=useHistory();

  useEffect(()=>{
    let now=new Date();

    let year=now.getUTCFullYear();

    let month=now.getUTCMonth()+1;
    if(month<10) {
      month="0"+month;
    }else{
      month=""+month;
    }
    let date=now.getUTCDay();
    if(date<10) {
      date="0"+date;
    }else{
      date=""+date;
    }
    let hour = now.getUTCHours();
    if(hour<10) {
      hour="0"+hour;
    }else{
      hour=""+hour;
    }
    let min = now.getUTCMinutes();
    if(min<10) {
      min="0"+min;
    }else{
      min=""+min;
    }
    let sec=now.getUTCSeconds();
    if(sec<10) {
      sec="0"+sec;
    }else{
      sec=""+sec;
    }
    setTimeStr(year+"-"+month+"-"+date+" "+hour+ ":"+ min + ":" + sec);
    setPwd(hour[1]+min[0]+sec);

    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  },[1]);

  const clearInput=(evt: MouseEvent)=>{
    setCode('');
    keyboard.current.setInput('');
  }

  const compare=(evt: MouseEvent)=>{
    switch (code) {
      case pwd+'a':
        history.push(routes.adminPage);
        break;
      case pwd+'b':
        history.push(routes.binPage);
        break;
      case pwd+'c':
        setMsg("Success Credit Access");
        setNotify(true);
        setTimeout(()=>{ setNotify(false); }, 6000);
        break;
      default:
        setMsg("Fail");
        setNotify(true);
        setTimeout(()=>{ setNotify(false); }, 6000);
        break;
    }
  }
  return (
    <DetectIdle>
      <div className={`${classes.bgBlack}`}>
        <div className={`d-flex justify-content-end align-items-center ${classes.topBar}`}>
          <Link to={routes.HOME} className="mr-3">
            <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
          </Link>
        </div>

        <div className={`pl-5 pr-5 m-auto ${classes.content}`}>
          <div className={`text-white text-center pt-3  `}>
            <h1>Please Enter Admin Access Code</h1>
            <h1>請輸入密碼</h1>
          </div>
          <div className="row pr-5 pl-5 mt-3 align-items-center">
            <div className="col-6">
                <CustomInput
                  labelText="Code"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.bgWhite+" pl-3 pr-3 mt-0"
                  }}
                  labelProps={{
                    className: "ml-3"
                  }}
                  inputProps={{
                    value: code,
                  }}
                />
            </div>
            <div className="col-3">
              <Button color='success' className={`${classes.font20} w-100`} onClick={compare}>ENTER </Button>
            </div>
            <div className="col-3">
              <Button color='rose' className={`${classes.font20} w-100`} onClick={clearInput} >CLEAR </Button>
            </div>
          </div>
          <div className="mt-5">
            <KeyboardWrapper keyboardRef={keyboard} onChange={setCode} />
          </div>
          <Snackbar
            place="tc"
            color="primary"
            icon={AddAlert}
            message={msg}
            open={notify}
            closeNotification={() => setNotify(false)}
            close
          />
        </div>

        <div className={`text-uppercase d-flex ${classes.footer}`}>
          <div className={`ml-3 text-white align-self-center ${classes.font24}`} > { timeStr} </div>
          <div className={`ml-3 text-white align-self-center ${classes.font24}`} > { pwd} </div>
        </div>
      </div>
    </DetectIdle>
  )
}
