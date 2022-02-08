import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "../style/login.css";
import Modal from 'react-bootstrap/Modal'


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Design Pattern: PURE FABRICATION 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Pure Fabrication</h4>
        <p>
        Fabricated class/ artificial class – assign set of
        related responsibilities that doesn't represent
        any domain object.
        <ul>
          <li>Provides a highly cohesive set of activities.</li>
          <li>Behavioral decomposed – implements some
        algorithm.</li>
          <li>Benefits: High cohesion, low coupling and can
        reuse this class.</li>
        <li>Example: logInterface which is responsible for saving <b>logging
          information</b> is a good example for Pure Fabrication.</li>
          {/* <li>Link : 
            <button class="btn btn-link">
            https://home.cs.colorado.edu/~kena/classes/5448/f12/presentation-materials/rao.pdf
            </button>
          </li> */}
        </ul>
        
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/" onClick={props.onHide}>Close</Link>
      </Modal.Footer>
    </Modal>
  );
}


const LogInformation = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div class="container">
      <button
            onClick={() => setModalShow(true)}
            class="btn  btn-success mt-5 center"
            aria-current="page"
            href="#"
          >
            CLICK ME
          </button>
          <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <form className="login-form">

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value="abc@gmail.com"
          readonly
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          value="xyz"
          readonly
        />

        <br />
        

        {/* <input
          type="submit"
          value="LOG IN"
          name="login"
          onClick={() => setModalShow(true)}
        />
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
      </form>
      
      </div>


    </>
  );
}

export default LogInformation;