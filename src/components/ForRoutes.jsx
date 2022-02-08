import { Route, Routes } from "react-router-dom";
import AddStudent from "./addstudent";
import AddTeacher from "./addteacher";
import AddStaff from "./addstaff";
import ViewStudent from "./viewstudent";
import ViewTeacher from "./viewteacher";
import ViewStaff from "./viewstaff";
import SelectAdd from "./selectAdd";
import SelectView from "./selectView";
import Welcome from "./welcome";
import ActualFee from "./actualfee";
import Scholarship from "./scholarship";
import Eligibility from "./eligibility";
import Login from "./login";
import LogInformation from "./logInterface";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/addstaff" element={<AddStaff />} />
        <Route path="/viewstudent" element={<ViewStudent />} />
        <Route path="/viewteacher" element={<ViewTeacher />} />
        <Route path="/viewstaff" element={<ViewStaff />} />
        <Route path="/selectAdd" element={<SelectAdd />} />
        <Route path="/selectView" element={<SelectView />} />
        <Route path="/actualfee" element={<ActualFee />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logInterface" element={<LogInformation/>} />
      </Routes>
    </>
  );
};

function ForRoutes() {
  return (
    <>
      <Routing></Routing>
    </>
  );
}

export default ForRoutes;
