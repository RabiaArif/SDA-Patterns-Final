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
          Design Pattern: CREATOR 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Creator</h4>
        <p>
        
        Creational design patterns are concerned with the way of creating objects. <b>Who should be responsible to create a class ? </b>
        These design patterns are used when a decision must be made at the time of instantiation of a class (i.e. creating an object of a class). 
        But everyone knows an object is created by using new keyword in java.
      <br/>
        Creating Student, Teacher and Staff objects using new keyword.
      </p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/" onClick={props.onHide}>Close</Link>
      </Modal.Footer>
    </Modal>
  );
}



const SelectAdd = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      
        

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
              navigate("/addstudent");
            }}
            class="btn  btn-outline-dark mt-5"
            aria-current="page"
            href="#"
          >
            Add Student
          </button>
        </li>
        <li class="nav-item p-2">
          <button
            onClick={() => {
              navigate("/addteacher");
            }}
            class="btn btn-outline-dark mt-3 "
            aria-current="page"
            href="#"
          >
            Add Teacher
          </button>
        </li>
        <li class="nav-item p-2">
          <button
            onClick={() => {
              navigate("/addstaff");
            }}
            class="btn btn-outline-dark mt-3"
            aria-current="page"
            href="#"
          >
            Add Staff
          </button>
        </li>
      </ul>
    </>
  );
};

export default SelectAdd;
