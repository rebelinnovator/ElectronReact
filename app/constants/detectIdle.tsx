import React , {useState , useEffect} from 'react';
import { Redirect , useLocation } from 'react-router-dom';

import routes from './routes.json';

const limit= 1000000;

export default (props): JSX.Element=>{

  const [timer,setTimer]= useState(null);
  const [redirect, setRedirect]= useState(false);

  const location= useLocation();

  useEffect(()=>{
    setTimer(timer=>{
      return setTimeout(()=>{
          setRedirect(true);
        },limit);
      }
    );
    return ()=>{
      clearTimeout(timer);
    }
  },[1]);

  const clearTimer=()=>{

    setTimer(timer=>{
      clearTimeout(timer);
      return setTimeout(()=>{
        setRedirect(true);
      },limit);
    })
  };
  return(
    <div onClick={clearTimer}>
      { redirect? <Redirect to={{pathname: routes.Idle , state: { from : location.pathname} }}/> : null }
      {props.children}
    </div>
  )
}
