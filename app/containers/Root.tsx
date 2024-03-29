import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { Store } from '../store';
import Routes from '../Routes';

import { getLangAsync } from '../features/langReducer/reducer';

type Props = {
  store: Store;
  history: History;
};

//Store.dispatch(getLangAsync());

const Root = ({ store, history }: Props) => {
  store.dispatch(getLangAsync());
  return (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
)};

export default hot(Root);
