/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';

import HomePage from './containers/HomePage';

import Help from './containers/Help/Help';
import Guide from './containers/Help/Guide';
import Contact from './containers/Help/Contact';
import FAQ from './containers/Help/FAQ';
import Octopus from './containers/Help/Octopus';
import PIN from './containers/Help/PIN';
import Policy from './containers/Help/Policy';

import BankTerms from './containers/terms/bankTerms';
import HCTerms from './containers/terms/HCTerms';
import JousunTerms from './containers/terms/JousunTerms';
import TNGTerms from './containers/terms/TNGTerms';
import CharityTerms from './containers/terms/charityTerms';
import OctopusTerms from './containers/terms/octopusTerms';

import BankOpt from './containers/opt/BankOpt';
import CharityOpt from './containers/opt/CharityOpt';
import HCOpt from './containers/opt/HCOpt';
import JousunOpt from './containers/opt/JousunOpt';
import TNGOpt from './containers/opt/TNGOpt';
import OctopusOpt from './containers/opt/OctopusOpt';

import BankPoll from './containers/poll/BankPoll';
import HCPoll from './containers/poll/HCPoll';
import JousunPoll from './containers/poll/JousunPoll';
import OctopusPoll from './containers/poll/OctopusPoll';
import TNGPoll from './containers/poll/TNGPoll';

import Warn from './containers/count/warn';
import Instruct from './containers/count/instruct';
import CountMain from './containers/count/countMain';
import CountCash from './containers/count/countCash';
import RetryCoin from './containers/count/retryCoin';

import TNGScan from './containers/checkout/TNGScan';
import OctopusScan from './containers/checkout/OctopusScan';
import Checkout from './containers/checkout/Checkout';

import AdminAccess from './containers/admin/AdminAccess';
import AdminPage from './containers/admin/AdminPage';
import BinPage from './containers/admin/BinPage';
import LoadingPage from './containers/admin/LoadingPage';

import Maintenance from './containers/admin/Maintenance';
import Idle from './containers/admin/Idle';
import MachineFull from './containers/admin/machineFull';
import TuningPage from './containers/admin/TuningPage';

export default function Routes() {
  return (
    <App>
      <Switch>

        <Route path={routes.BankTerms} component={BankTerms} />
        <Route path={routes.CharityTerms} component={CharityTerms} />
        <Route path={routes.HCTerms} component={HCTerms} />
        <Route path={routes.JousunTerms} component={JousunTerms} />
        <Route path={routes.OctopusTerms} component={OctopusTerms} />
        <Route path={routes.TNGTerms} component={TNGTerms} />

        <Route path={routes.BankOpt} component={BankOpt} />
        <Route path={routes.CharityOpt} component={CharityOpt} />
        <Route path={routes.HCOpt} component={HCOpt} />
        <Route path={routes.JousunOpt} component={JousunOpt} />
        <Route path={routes.OctopusOpt} component={OctopusOpt} />
        <Route path={routes.TNGOpt} component={TNGOpt} />

        <Route path={`${routes.BankPoll}/:id`} component={BankPoll} />
        <Route path={routes.HCPoll} component={HCPoll} />
        <Route path={routes.JousunPoll} component={JousunPoll} />
        <Route path={routes.OctopusPoll} component={OctopusPoll} />
        <Route path={routes.TNGPoll} component={TNGPoll} />

        <Route path={routes.warn} component={Warn} />
        <Route path={routes.instruct} component={Instruct} />
        <Route path={routes.countMain} component={CountMain} />
        <Route path={routes.countCash} component={CountCash} />
        <Route path={routes.retryCoin} component={RetryCoin} />

        <Route path={routes.TNGScan} component={TNGScan} />
        <Route path={routes.OctopusScan} component={OctopusScan} />
        <Route path={routes.Checkout} component={Checkout} />

        <Route path={routes.adminAccess} component={AdminAccess} />
        <Route path={routes.adminPage} component={AdminPage} />
        <Route path={routes.binPage} component={BinPage} />
        <Route path={routes.loading} component={LoadingPage} />
        <Route path={routes.Idle} component={Idle} />
        <Route path={routes.machineFull} component={MachineFull} />
        <Route path={routes.maintenance} component={Maintenance} />
        <Route path={routes.tunning} component={TuningPage} />

        <Route path={routes.help} component={Help} />
        <Route path={routes.Guide} component={Guide} />
        <Route path={routes.Contact} component={Contact} />
        <Route path={routes.FAQ} component={FAQ} />
        <Route path={routes.PIN} component={PIN} />
        <Route path={routes.Policy} component={Policy} />
        <Route path={routes.Octopus} component={Octopus} />

        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
