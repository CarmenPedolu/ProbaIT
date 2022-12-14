import React, { useRef, useState } from "react";
import Logo from "../poze/Logo.svg";
import "./Navbar.css";
import "./ModalLogin"
import "./ModalCreareCont"
import ModalLogin from "./ModalLogin";
import ModalCreareCont from "./ModalCreareCont";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap-modal';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbarfunc() {
  const [showLogare, setShowLogare] = useState(false)
  const [showCreareCont, setShowCreareCont] = useState(false)
  const [showLogOut, setShowLogout] = useState(false)
  return (
    <>
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img img alt="timer" src={Logo} className="ml-5 d-inline-block align-left"></img></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="navbar-nav">
            
              <><a href="/#">
                  <button variant="primary" className="button-style" onClick={() => setShowLogare(true)}>Logare</button>
                  <ModalLogin show={showLogare} close={() => setShowLogare(false)} />
                </a><a href="/#">
                    <button variant="primary" className="button-style" onClick={() => setShowCreareCont(true)}>Creare Cont</button>
                    <ModalCreareCont onClose={() => setShowCreareCont(false)} show={showCreareCont} />
                  </a></>

          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  );
}


export default Navbarfunc;