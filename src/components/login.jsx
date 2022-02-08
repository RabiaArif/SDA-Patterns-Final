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
          Design Pattern: CONTROLLER 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>CONTROLLER</h4>
        <p>
        Single handler design pattern … authentication
        <br/>
        The front controller design pattern is used to provide a centralized request handling mechanism so that all requests will be handled by a single handler. 
        This handler can do the <b>authentication/ authorization/ logging</b> or tracking of request and then pass the requests to corresponding handlers.        </p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/" onClick={props.onHide}>Close</Link>
      </Modal.Footer>
    </Modal>
  );
}


const Login = () => {
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
       
          <img src={logo} className="login-logo" alt="logo" />
     

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="abc@gmail.com"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password.."
        />
        <input
          type="checkbox"
          id="showPassword"
          name="showPassword"
        />
        <label htmlFor="showPassword" className="showPwd">
          Show Password
        </label>

        <br />
        <Link
          className="spanForgetPassword d-flex justify-content-center"
          aria-current="page"
          to="/"
        >
          Forget password?
        </Link>

        <input
          type="submit"
          value="LOG IN"
          name="login"
          onClick={() => setModalShow(true)}
        />
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </form>
      
      </div>


    </>
  );
}

export default Login;