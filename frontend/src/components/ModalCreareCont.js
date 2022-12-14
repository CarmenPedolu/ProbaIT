import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Logo from "../poze/Logo.svg";


const ModalCreareCont = props => {  
    return(
      <Modal
        show={props.show}
        closeButton={props.close}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={props.onClose}>
          <Modal.Title><img img alt="timer" src={Logo}></img></Modal.Title>
        </Modal.Header>
        <p className='Title'> Welcome</p>
        <Modal.Body>


        <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="textUserParola">Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="textUserParola">Username</Form.Label>
                  <Form.Control type="email" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="textUserParola">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <button className="btnColorMov" center  onClick={props.close}> 
                Creare Cont
                </button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
        </Modal>
    )
}
export default ModalCreareCont;