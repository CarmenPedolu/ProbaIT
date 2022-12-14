import logo from './logo.svg';
import './App.css';
import Navbarfunc from "./components/Navbar.js";
import ModalLogin from './components/ModalLogin';
import Layout from './components/LandingPage';
import React from 'react';

function App() {
  return (
    <div className="App">
    <React.Fragment>
      <Navbarfunc></Navbarfunc>
      <Layout></Layout>
    </React.Fragment>
    </div>
  );
}

export default App;
