import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Screens/Login';
import Select from './Screens/Select';

import { Store } from './Store/Store';
import CreateDocument from './Screens/CreateDocument';
import PreviousDocuments from './Screens/PreviousDocuments';
import EditDocument from './Screens/EditDocument';
import Registrations from './Screens/Registrations';

const RouterHub = () => {
  const [state] = React.useContext(Store);
  const { logged } = state;
  return (
    <React.Fragment>
      <Route exact path='/'>
        <Login />
      </Route>
      {logged ? (
        <Switch>
          <Route path='/select'>
            <Select />
          </Route>
          <Route path='/createDocument'>
            <CreateDocument />
          </Route>
          <Route path='/previousDocuments'>
            <PreviousDocuments />
          </Route>
          <Route path='/editDocument'>
            <EditDocument />
          </Route>
          <Route path='/registrations'>
            <Registrations />
          </Route>
        </Switch>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};
export default RouterHub;
