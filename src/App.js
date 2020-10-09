import React from 'react';
import './App.css';
import Nav from './components/Nav';
// import Landing from './components/Landing';
import Register from './components/Register'
// import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Landing /> */}
      <Register />
      {/* <Login /> */}
    </div>
  );
}

export default App;
