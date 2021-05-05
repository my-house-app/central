import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import About from '../Components/About/About';

function App() {
  return (
    <div className="App">
      <Route
        path="/"
        component={NavBar}
      />
      <Route
        path="/about"
        component={About}
      />
    </div>
  );
}

export default App;
