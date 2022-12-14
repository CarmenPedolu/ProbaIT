import React, { useRef, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import WhySoSalty from "../poze/WhySoSalty.svg";
import Img1 from "../poze/image1.svg";
import Img2 from "../poze/image2.svg";
import Img3 from "../poze/image3.svg";

import FB from "../poze/fb.svg";
import Twitch from "../poze/twitch.svg";
import Insta from "../poze/insta.svg";

import './LandingPage.css'

function Layout() {
  return (
    <Container>
      <Row>
        <Col className="edittext">
            <p  className="propozitie1">Partajarea de meme-uri nu a fost niciodată mai simplă!</p>
            <p className="propozitie2">Platforma ideală pentru studenții de la Politehnică, amuzați de câte materii o să pice semestrul asta.
</p>
            <button className="btnColorMov"> <a href="#upload">Upload a MEME</a></button>
        </Col>
        <Col>
        <img img alt="timer" src={WhySoSalty} ></img>
        </Col>
      </Row>

      <div id="upload">
        <Row className="upload">
          <Container>
            <Row className="containerform">
              <Col>
              <p className="propozitie3">Ai tupeu și crezi că ești amuzant?</p>
              <p className="propozitie4">Trimite-ne un mail și poate ai noroc să ne apuce râsul când îți vedem meme-ul.</p>
              </Col>
              <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="descriere">Descriere</Form.Label>
                  <Form.Control type="email" placeholder="descriere" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="dragMeme">
                    
                    {/* <form action="/action_page.php"> */}
  {/* <input type="file" id="myFile" name="filename"/></form>  */}
                  Meme (jpg, jpeg, png, gif)</Form.Label>
                  <Form.Control type="file" placeholder="drag & drop image or click to upload" />
                </Form.Group>
                <button className="btnColorMov"> 
                  Trimite
                </button>
            </Form></Col>
            </Row>

          </Container>
        </Row>
      </div>

      <Row><p className="mostviewed">Most Viewed</p></Row>
      <Row>
        <Col><img img alt="timer" src={Img1} ></img></Col>
        <Col><img img alt="timer" src={Img2} ></img></Col>
        <Col><img img alt="timer" src={Img3} ></img></Col>
      </Row>

      <Row className="footer">
        <Col></Col>
        <Col><a href="https://www.instagram.com/lsacbucuresti/"> <img className="poza" img alt="timer" src={Insta}></img></a><a href="https://www.twitch.tv/lsac_bucuresti"><img className="poza" img alt="timer" src={Twitch} ></img></a><a href="https://www.facebook.com/LsacBucuresti/"> <img className="poza" img alt="timer" src={FB} ></img></a></Col>
        <Col></Col>
        <p className="footerText">Copyright 2022 | La muncă, nu la întins mâna.</p>
      </Row>
    </Container>
  );
}

export default Layout;