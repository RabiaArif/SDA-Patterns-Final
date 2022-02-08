import { useNavigate, Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useState } from "react";

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
          Design Pattern: INFORMATION EXPERT 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Information Expert</h4>
        <p>
        
        Information expert (also expert or the expert principle) is a principle used to determine where to delegate responsibilities such as methods, computed fields, and so on. ... This will lead to placing the responsibility on the class with the most information required to fulfill it.
      <br/>
        <ul>
          <li>Given an object o, which responsibilities can
be assigned to o?</li>
     <li> Expert principle says – assign those
responsibilities to o for which o has the
information to fulfill that responsibility.</li>
<li>They have all the information needed to
perform operations, or in some cases they
collaborate with others to fulfill their
responsibilities.</li>
        </ul>
      </p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/" onClick={props.onHide}>Close</Link>
      </Modal.Footer>
    </Modal>
  );
}

const SelectView = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <h3>View Data</h3>

      <ul class="nav navbar flex-column">

      <li class="nav-item p-2">
          <button
            onClick={() => setModalShow(true)}
            class="btn  btn-success mt-5"
            aria-current="page"
            href="#"
          >
            CLICK ME
          </button>
          <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </li>
      
        <li class="nav-item p-2">
          <button
            onClick={() => {
              navigate("/viewstudent");
            }}
            class="btn  btn-outline-dark mt-5"
            aria-current="page"
            href="#"
          >
            View Students
          </button>
        </li>
        <li class="nav-item p-2">
          <button
            onClick={() => {
              navigate("/viewteacher");
            }}
            class="btn btn-outline-dark mt-3 "
            aria-current="page"
            href="#"
          >
            View Teachers
          </button>
        </li>
        <li class="nav-item p-2">
          <button
            onClick={() => {
              navigate("/viewstaff");
            }}
            class="btn btn-outline-dark mt-3"
            aria-current="page"
            href="#"
          >
            View Staff
          </button>
        </li>
      </ul>
    </>
  );
};

export default SelectView;
