import React,{useEffect ,useState , useRef ,  ChangeEvent , MouseEvent} from 'react';
import {Link , useParams } from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { getLang , getLangVal , setLang  } from '../../features/langReducer/reducer';

import routes from '../../constants/routes.json';
import classes from '../index.css';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../components/CustomButtons/Button';
import CustomInput from '../../components/CustomInput/CustomInput';
import Snackbar from "../../components/Snackbar/Snackbar";
import AddAlert from "@material-ui/icons/AddAlert";

import readAsset from '../../constants/readAsset';
import NumberKeyboard from '../../constants/numberKeyboard';
import DetectIdle from '../../constants/detectIdle';

export default function BankPoll() : JSX.Element{

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

  let {id}=useParams();

  const [credential,setCredential]=useState('');
  const [confirm,setConfirm]=useState('');
  const [which,setWhich]=useState('credential');
  const [notify,setNotify]=useState(false);
  const [msg,setMsg]=useState('');
  const [status,setStatus]=useState(false);

  const keyboard = useRef();

  const [opt,setOpt]=useState({ image: "" , name: "" , prefer : [] });

  useEffect(()=>{
    let going=true;
    readAsset('./assets/json/BankOptions.json',(result) => {
      if(going) setOpt(JSON.parse(result).bankOpts[id]);
    });

    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  },[readAsset]);

  const onChangeInput=(evt: ChangeEvent<{value: unknown }> )=>{
    let inputVal=evt.target.value as string;
    if(which=='credential'){
      setCredential(inputVal);
    }else{
      setConfirm(inputVal);
    }
    keyboard.current.setInput(inputVal);
  }

  const clearInput=(evt: MouseEvent)=>{
    if(which=='credential'){
      setCredential('');
    }else{
      setConfirm('');
    }
    keyboard.current.setInput('');
  }

  const onChangeAll=(inputs)=>{
    if(inputs.credential) setCredential(inputs.credential);
    if(inputs.confirm) setConfirm(inputs.confirm);
  }

  const onFocusInput=(evt:MouseEvent)=>{
    setWhich(evt.target.id);
  }

  const onAccept=(evt: React.ChangeEvent<{value: unknown}>)=>{
    if(!credential || !confirm){
      setMsg(langVal.bankWarn[lang]);
      setNotify(true);
      setTimeout(function() {
        setNotify(false);
      }, 6000);
      setStatus(false);
    }else if(credential==confirm){
      setMsg(langVal.success[lang]);
      setNotify(true);
      setTimeout(()=>{ setNotify(false); }, 6000);
      setStatus(true);
    }else{
      setMsg(langVal.failure[lang]);
      setNotify(true);
      setTimeout(()=>{ setNotify(false); }, 6000);
      setStatus(false);
    }
  }

  return(
    <DetectIdle>
      <div className={classes.bgBlack}>
        <div className={`d-flex justify-content-between align-items-center ${classes.topBar}`}>
          <div>
            <img src='../../assets/Images/LOGO-CD-161px.png' className={`${classes.barImg} ml-3`}></img>
            <Link to={routes.help} className="ml-3">
                <img src='../../assets/Images/ICON-FAQ.png' className={classes.barImg}></img>
            </Link>
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

        <div className={`text-white ${classes.content}`}>
          <div className={`m-auto ${classes.wrapper}`}>
            <div className={`row pl-5`}>
              <span className={`p-3 ${classes.bgWhite}`}>
                <img src={(opt && opt.image)? `../../assets/${opt.image}` : ''} className={`${classes.optImg}`}></img>
              </span>
              <div className={`ml-5 ${classes.font24}`}>
                <div> {langVal.name[lang]}: {opt.name} </div>
                <div> {langVal.prefer[lang]} : {opt.prefix} </div>
              </div>
            </div>
            <div className='row'>
              <div className="col-6 pl-5 pr-5 pt-3">
                <div className={`${classes.font24}`}> {langVal.enterBankAccount[lang]}</div>
                <div className='row'>
                  <div className={`col-3 text-center ${classes.bgGrey} ${classes.black} ${classes.font36}`}>
                    <div className="mt-4">YYYY</div>
                  </div>
                  <div className={`col-9 ${classes.bgWhite}`}>
                    <CustomInput
                      labelText={langVal.bankAccount[lang]}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      labelProps={{
                        className: classes.black
                      }}
                      inputProps={{
                        id: "credential",
                        value: credential,
                        className: classes.font24,
                        onFocus: onFocusInput,
                        onChange: onChangeInput
                      }}
                    />
                  </div>
                </div>
                <div className={`${classes.pt50} ${classes.font24}`}> {langVal.confirmBankAccount[lang]}</div>
                <div className='row'>
                  <div className={`col-3 text-center ${classes.bgGrey} ${classes.black} ${classes.font36}`}>
                    <div className="mt-4">YYYY</div>
                  </div>
                  <div className={`col-9 ${classes.bgWhite}`}>

                    <CustomInput
                      labelText={langVal.bankAccount[lang]}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      labelProps={{
                        className: classes.black
                      }}
                      inputProps={{
                        id: 'confirm',
                        value: confirm,
                        className: classes.font24,
                        onFocus: onFocusInput,
                        onChange: onChangeInput
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={`col-6 pl-5 pr-5`}>
                <div className="">
                    <Button color="white" className={`w-100 ${classes.font24} ${classes.black}`} onClick={clearInput} >{langVal.clear[lang]}</Button>
                </div>
                <div className={classes.black}> <NumberKeyboard keyboardRef={keyboard} onChangeAll={onChangeAll} inputName={which} /> </div>
                <div className="">
                      <Button color="white" className={`w-100 text-uppercase ${classes.font24} ${classes.black}`} onClick={onAccept}>{langVal.confirm[lang]}</Button>
                </div>
              </div>
            </div>
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

        <div className={`text-uppercase d-flex justify-content-between align-items-center ${classes.bgBlack} ${classes.footer}`}>
          <div>
            <Link to={routes.HOME} className="ml-3">
              <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
            </Link>
            <Button color="warning" className={`ml-3 ${classes.font24}`} > {langVal.retry[lang]} </Button>
          </div>
          { status? <Button color="success" href={`#${routes.warn}`} className={`mr-3 ${classes.font24}`} > {langVal.continue[lang]} </Button> : null }
        </div>
      </div>
    </DetectIdle>
  );
};
