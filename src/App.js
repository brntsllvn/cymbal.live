import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import ShowContainer from './components/ShowContainer'

function App() {
  const trackingId = "UA-161532154-1";
  ReactGA.initialize(trackingId);
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div>
      <div>
        <h1>cymbal.live</h1>
      </div>
      <div>
        say hello
      </div>
      <div>
        request feature
      </div>
      <div>
        support
      </div>
      <div>
        <ShowContainer />
      </div>
    </div>
  );
}

export default App;
