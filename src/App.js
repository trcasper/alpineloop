import React from 'react';
import './App.css';
// import Nav from './Components/Nav';
import Landing from './Components/Landing';
import {HashRouter} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Landing/>
    </div>
    </HashRouter>
  );
}

export default App;
