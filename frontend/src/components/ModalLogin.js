import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Logo from "../poze/Logo.svg";
import './ModalLogin.css';


const ModalLogin = props => {
    return(
      <Modal 
      show={props.show}
      closeButton={props.close}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton onClick={props.close}>
          <Modal.Title><img img alt="timer" src={Logo}></img></Modal.Title>
        </Modal.Header>
          <p className='Title'> Welcome Back</p>
        <Modal.Body className='d-flex justify-content-center'>
         
        <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="textUserParola">Username</Form.Label>
                  <Form.Control type="email" placeholder="username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="textUserParola">Parola</Form.Label>
                  <Form.Control type="password" placeholder="Parola" />
                </Form.Group>
                <button className="btnColorMov" center  onClick={props.close}> 
                  Logare
                </button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    )
}
export default ModalLogin;
