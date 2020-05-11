import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import Nav from './Components/Nav';
import Instructor from './Screens/Instructor';
import Register from './Screens/Register';
import About from './Screens/About';
import Footer from './Components/Footer';
import { Store } from './Store/Store';
import Axios from 'axios';
const RoutesPages = () => {
  const [, dispatch] = React.useContext(Store);
  const _getData = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    Axios({
      url: '/getDocuments',
      method: 'GET',
    })
      .then((resp) => {
        dispatch({
          type: 'GET_DATA',
          payload: resp.data,
        });
        dispatch({
          type: 'GET_COURSE_OFFSET',
          payload: document.getElementById('course_body').offsetTop,
        });
      })
      .catch(console.error);
  };
  React.useEffect(_getData, []);
  return (
    <React.Fragment>
      <Nav />
      <Route exact path='/'>
        <App />
      </Route>
      <Switch>
        <Route path='/instructor'>
          <Instructor />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>

      <Footer />
    </React.Fragment>
  );
};

export default RoutesPages;
