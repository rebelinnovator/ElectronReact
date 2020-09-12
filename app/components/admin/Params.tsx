import React from 'react';
import { FormControl , InputLabel, Select , MenuItem } from '@material-ui/core';

import Button from '../../components/CustomButtons/Button';

import classes from '../../containers/index.css';

export default function Params(): JSX.Element {

    const [donation, setDonation] = React.useState('');
    const [bank, setBank] = React.useState('');
    const [octopus, setOctopus] = React.useState('');
    const [jousun, setJousun] = React.useState('');
    const [TNG, setTNG] = React.useState('');
    const [heyCoins, setHeyCoins] = React.useState('');
    const [starbucks, setStarbucks] = React.useState('');
    const [cameraId, setCameraId] = React.useState('');

    const onChangeDonation = (event: React.ChangeEvent<{ value: unknown }>) => {
        setDonation(event.target.value as string);
    };
    const onChangeBank = (event: React.ChangeEvent<{ value: unknown }>) => {
        setBank(event.target.value as string);
    };
    const onChangeOctopus = (event: React.ChangeEvent<{ value: unknown }>) => {
        setOctopus(event.target.value as string);
    };
    const onChangeJousun = (event: React.ChangeEvent<{ value: unknown }>) => {
        setJousun(event.target.value as string);
    };
    const onChangeTNG = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTNG(event.target.value as string);
    };
    const onChangeHeyCoins = (event: React.ChangeEvent<{ value: unknown }>) => {
        setHeyCoins(event.target.value as string);
    };
    const onChangeStarbucks = (event: React.ChangeEvent<{ value: unknown }>) => {
        setStarbucks(event.target.value as string);
    };
    const onChangeCameraId = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCameraId(event.target.value as string);
    };

    return (
        <div >
          <div className={`text-warning mt-2 ${classes.font20}`}>FILTERS</div>
          <div className="mt-2">
            <span className="mr-2">Filter : </span>
            <Button type="text" color="success" className={`${classes.adminBtn} ${classes.width100} ${classes.font16}`}>NONE</Button>
          </div>
          <div className="d-flex align-items-center justify-content-around">
            <div>
              <div>Donation:</div>
              <div><Button type="text" color="success" className={`${classes.adminBtn} ${classes.width100} ${classes.font16}`}>ON</Button></div>
            </div>
            <div>
              <div>Bank:</div>
              <div><Button type="text" color="success" className={`${classes.adminBtn} ${classes.width100} ${classes.font16}`}>ON</Button></div>
            </div>
            <div>
              <div>Octopus:</div>
              <div><Button type="text" color="success" className={`${classes.adminBtn} ${classes.width100} ${classes.font16}`}>ON</Button></div>
            </div>
            <div>
              <div>O!ePay:</div>
              <div><Button type="text" color="success" className={`${classes.adminBtn} ${classes.width100} ${classes.font16}`}>ON</Button></div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-around">
            <div>
              <div>Jousun:</div>
              <div><Button type="text" color="success" className={`${classes.adminBtn} ${classes.width100} ${classes.font16}`}>ON</Button></div>
            </div>
            <div>
              <div>MobiJuce:</div>
              <div><Button type="text" color="success" className={`${classes.adminBtn} ${classes.width100} ${classes.font16}`}>ON</Button></div>
            </div>
            <div>
              <div>TNG:</div>
              <div><Button type="text" color="success" className={`${classes.adminBtn} ${classes.width100} ${classes.font16}`}>ON</Button></div>
            </div>
            <div>
              <div>Bonus:</div>
              <div><Button type="text" color="success" className={`${classes.adminBtn} ${classes.width100} ${classes.font16}`}>ON</Button></div>
            </div>
          </div>
        </div>
    );
}
