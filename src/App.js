import React, { Component } from 'react';

import Home from './Screens/Home';
import Courses from './Screens/Courses';

import OverView from './Screens/OverView';
import YoutubeEmb from './Components/YoutubeEmb';

import { Store } from './Store/Store';

class App extends Component {
  static contextType = Store;

  state = { loaded: false };
  courseOffestRef = React.createRef();

  render() {
    const [state] = this.context;
    return (
      <React.Fragment>
        {state.lightBox ? <YoutubeEmb /> : ''}

        <Home />
        <br></br>
        <h2
          style={{
            textAlign: 'center',
            color: '#0D1228',
            padding: 10,
          }}
        >
          WHAT IS MESHTRONICS ?
        </h2>
        <OverView />
        <br></br>
        <hr
          style={{ height: '1px', backgroundColor: '#F39522', border: 'none' }}
        ></hr>
        <h2 style={{ textAlign: 'center', color: '#0D1228', padding: 10 }}>
          Courses We Offer
        </h2>

        <br></br>
        <div id='course_body'>
          <Courses />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
