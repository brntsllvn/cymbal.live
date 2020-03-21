import React from 'react';
import './App.css';
import NowPlaying from './components/NowPlaying.js'

function App() {
  return (
    <div>
      <div>
        cymbal.live
      </div>
      <div>
        <NowPlaying name="Brent"/>
      </div>
    </div>
  );
}

export default App;
