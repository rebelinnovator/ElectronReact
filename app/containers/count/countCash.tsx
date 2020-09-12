import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { getLang , getLangVal , setLang  } from '../../features/langReducer/reducer';

import { Divider} from '@material-ui/core';
import routes from '../../constants/routes.json';
import classes from '../index.css';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../components/CustomButtons/Button';
import CoinValue from './coinValue';
import DetectIdle from '../../constants/detectIdle';

const tmpData=[
  { coin: "10c" , value: 49 , img: '../../assets/Images/10c.png', coinImg: '../../assets/Images/goldCoin.png' },
  { coin: "20c" , value: 39 , img: '../../assets/Images/20c.png' ,  coinImg: '../../assets/Images/goldCoin.png' },
  { coin: "50c" , value: 34 , img: '../../assets/Images/50c.png' ,  coinImg: '../../assets/Images/goldCoin.png' },
  { coin: "1HKD" , value: 36 , img: '../../assets/Images/1HKD.png', coinImg: '../../assets/Images/whiteCoin.png' },
  { coin: "2HKD" , value: 32 , img: '../../assets/Images/2HKD.png', coinImg: '../../assets/Images/whiteCoin.png' },
  { coin: "5HKD" , value: 32 , img: '../../assets/Images/5HKD.png', coinImg: '../../assets/Images/whiteCoin.png' },
  { coin: "10HKD" , value: 31 , img: '../../assets/Images/10HKD.png' , coinImg: '../../assets/Images/mixedCoin.png' },
];

const betweenImg=85;
const height= 420;

export default function CountMain(): JSX.Element{

  const [data,setData]=useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch= useDispatch();
  const langVal= useSelector(getLangVal);
  const lang = useSelector(getLang);

  const langMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const langMenuClose = (changeLang) => {
    setAnchorEl(null);
    if(changeLang && changeLang!=lang){
      dispatch(setLang(changeLang));
    }
  };

  useEffect(()=>{
    // fetch(`https://api.github.com/repos/${owner}/${repository}/contributors`)
    //     .then(response => response.json())
    //     .then((data) => {
    //       const slice = data.slice(0, 8);
    //       console.log('start');
    //       setData(slice);
    //     })
    //     .catch(() => {console.log('end')});
    setData(tmpData);
  },[tmpData])

  return(
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

        <div className={` text-white text-center pl-3 pr-3 ${classes.content}`}>
          <div className="row">
            <div className="col-8">
              <div className="mt-1">
                <svg width={600} height={height}>
                    {tmpData.map((item,idx)=><text key={item.coin} x={17+idx*betweenImg} y={40} className={`${classes.coinImg} ${classes.font40} font-weight-bold`} >{item.value}</text>)}
                  <g transform="translate(0,0)">
                    {tmpData.map((item,idx)=> <CoinValue item={item} key={item.coin} idx={idx} betweenImg={betweenImg} y={height}/> )}
                  </g>
                </svg>
              </div>
              <Divider className={classes.bgWhite}/>
              <div className="mt-1">
                <svg width={600} height={80}>
                  <g transform="translate(0,0)">
                    {tmpData.map((item,idx)=><image key={item.coin} xlinkHref={item.img} width={80} height={80} transform={`translate(${idx*betweenImg},0)`}></image>)}
                  </g>
                </svg>
              </div>
            </div>
            <div className="col-4">
              <div className={`${classes.pt100}  ${classes.font24}`}>
                <div className="row">
                  <div className="col-6"> {langVal.coin[lang]} </div>
                  <div className="col-6"> $ 0.0</div>
                </div>
                <div className="row">
                  <div className="col-6"> {langVal.rate[lang]} </div>
                  <div className="col-6"> 90% </div>
                </div>
              </div>
              <Divider className={classes.bgWhite}/>
              <h1 className="text-uppercase" > {langVal.countLoading[lang]} </h1>

              <div><Button color="success" href={`#${routes.TNGScan}`} className={`${classes.font24} mr-3`} >TNG</Button></div>
              <div> <Button color="primary" href={`#${routes.OctopusScan}`} className={`${classes.font24} mr-3`} >Octopus</Button></div>
              <div> <Button color="rose" href={`#${routes.Checkout}`} className={`${classes.font24} mr-3`} >Bank or Other</Button></div>
            </div>
          </div>
        </div>

        <div className={`text-uppercase d-flex justify-content-between align-items-center ${classes.footer}`}>
          <Link to={routes.HOME} className="ml-3">
            <img src='../../assets/Images/ICON-HOME.png' className={classes.barImg}></img>
          </Link>
          <div>
            <Button color="primary" href={`#${routes.instruct}`} className={`${classes.font24} mr-3`} > {langVal.countAddMore[lang]} </Button>
            <Button color="success" href={`#${routes.countCash}`} className={`${classes.font24} mr-3`} > {langVal.continue[lang]} </Button>
          </div>
        </div>
      </div>
    </DetectIdle>
  )
}
