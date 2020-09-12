import React from 'react';

import {  useSelector } from 'react-redux';
import { getLang , getLangVal } from '../../features/langReducer/reducer';

import classes from '../index.css';
import Button from '../../components/CustomButtons/Button';
import routes from '../../constants/routes.json';
import DetectIdle from '../../constants/detectIdle';

export default function Warn(): JSX.Element{

  const langVal= useSelector(getLangVal);
  const lang = useSelector( getLang);

  return(
    <DetectIdle>
      <div className="m-auto p-5 text-center">

        <h1> {langVal.warnDepositTitle[lang]} </h1>

        <div className="border border-dark">
          <img src={`../../assets/Images/${langVal.warnDepositImg[lang]}`} className="w-100"/>
        </div>
        <h3 className="mt-4"> {langVal.warnDepositMsg[lang]} </h3>
        <Button color="success" href={`#${routes.instruct}`} className={`${classes.font24} mt-4`}> {langVal.warnDepositBtn[lang]} </Button>
      </div>
    </DetectIdle>
  )
}
