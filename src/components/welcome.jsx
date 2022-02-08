import React from "react";
import { Link } from "react-router-dom";
import selectAdd from "./selectAdd";
import Login from "./login";

class Welcome extends React.Component {
  render() {
    return (
    <>
      <h1>Welcome to PUCIT CMS</h1>

      <p>
        Design Patterns covered in this project are:
        <ul>
          <li>
            Controller: Single handler design pattern
            &nbsp;
            &nbsp;
            <Link to={"./Login"}>LOGIN </Link>
          </li>
          <li>
            Creator: Creating objects / instances of classes
            &nbsp;
            &nbsp;
            <Link to={"./selectAdd"}>Add Student/Teacher/Staff</Link>
          </li>
          {/* <li>
            Observer: Observers are notified when a state changes
          </li> */}
          <li>
            Pure Fabrication Pattern: adding a class in a interface … but it does not effect the interface ... for example: adding a class <b>saveResult</b> of an instance at a particular time 
            &nbsp;
            &nbsp;
            <Link to={"./logInterface"}>Login Information is saved here</Link>
          </li>
          <li>
            Information Expert: a principle used to determine where to delegate responsibilities such as methods, computed fields, and so on.
           
            &nbsp;
            &nbsp;
            <Link to={"./selectView"}>Get All information</Link>
          </li>
        </ul>
      </p>
    </>
  );}
};
export default Welcome;
