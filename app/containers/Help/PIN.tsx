import React , { useState , useRef, MouseEvent , ChangeEvent} from 'react';
import {Link} from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { getLang , setLang , getLangVal } from '../../features/langReducer/reducer';
import routes from '../../constants/routes.json';
import classes from '../index.css';

import Button from '../../components/CustomButtons/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CustomInput from '../../components/CustomInput/CustomInput';

import KeyboardWrapper from '../../constants/keyboardWrapper';
import DetectIdle from '../../constants/detectIdle';

export default function PIN(): JSX.Element{

  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');
  const [which,setWhich]=useState('username');

  const keyboard = useRef();

  const onChangeInput=(evt : ChangeEvent<{value: unknown}>)=>{
    let inputVal=evt.target.value;
    if(which=='username'){
      setUsername(inputVal);
    }else{
      setPassword(inputVal);
    }
    keyboard.current.setInput(inputVal);
  }

  const clearInput=(evt: MouseEvent)=>{
    if(which=='username'){
      setUsername('');
    }else{
      setPassword('');
    }
    keyboard.current.setInput('');
  }

  const onChangeAll=(inputs)=>{
    if(inputs.username) setUsername(inputs.username);
    if(inputs.password) setPassword(inputs.password);
  }
  const onFocusInput=(evt:MouseEvent)=>{
    setWhich(evt.target.id);
  }

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

  return (
    <DetectIdle>
      <div className={`${classes.bgBlack}`}>
        <div className={`d-flex justify-content-between align-items-center ${classes.topBar}`}>
          <div>
            <img src='../../assets/Images/LOGO-CD-161px.png' className={`${classes.barImg} ml-3`}></img>
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

        <div className={`${classes.content} pl-3 pr-3 m-auto`}>
          <div className={`border border-white pl-2 pr-2 ${classes.font20}`}>
            <div className={`bg-danger text-center text-white`}> {langVal.retrievePinTitle[lang]} </div>
            <div className={`text-white pr-2 pl-2 ${classes.justLabel2}`}>
              {langVal.retrivePinContent && langVal.retrivePinContent[lang] ? langVal.retrivePinContent[lang].join('\n'): ""}
            </div>
            <div className="row pr-2 pl-2">
              <div className="col-6 ">
                  <CustomInput
                    labelText={langVal.username[lang]}
                    formControlProps={{
                      fullWidth: true,
                      className: classes.bgWhite+" pl-3 pr-3 mt-0"
                    }}
                    labelProps={{
                      className: "ml-3"
                    }}
                    inputProps={{
                      value: username,
                      id: 'username',
                      onFocus: onFocusInput,
                      onChange: onChangeInput
                    }}
                  />
              </div>
              <div className="col-6">
                <CustomInput
                  labelText={langVal.password[lang]}
                  formControlProps={{
                    fullWidth: true,
                    className: classes.bgWhite+" pl-3 pr-3 mt-0"
                  }}
                  labelProps={{
                    className: "ml-3"
                  }}
                  inputProps={{
                    value: password,
                    id: 'password',
                    onFocus: onFocusInput,
                    onChange: onChangeInput
                  }}
                />
              </div>
            </div>
            <div className="d-flex justify-content-around align-items-center mt-1 pr-2 pl-2">
              <Button color='success' className={`${classes.font20} w-25`}> {langVal.save[lang]} </Button>
              <Button color='rose' className={`${classes.font20} w-25`} onClick={clearInput} > {langVal.clear[lang]} </Button>
            </div>
            <div className="pl-2 pr-2">
              <KeyboardWrapper keyboardRef={keyboard} onChangeAll={onChangeAll} inputName={which} />
            </div>
          </div>
        </div>

        <div className={`text-uppercase ${classes.footer}`}>
          <Link to={routes.HOME} className="ml-3">
            <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
          </Link>
          <Link to={routes.help} className="ml-3">
              <img src='../../assets/Images/icon-back-white.png' className={classes.barImg}></img>
          </Link>
        </div>
      </div>
    </DetectIdle>
  )
}
