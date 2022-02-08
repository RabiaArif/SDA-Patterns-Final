import { useNavigate } from "react-router-dom";

const VerticalNav = () => {
  const navigate = useNavigate();

  return (
    <>
      <ul class="nav navbar-dark flex-column bg-light">
        <li class="nav-item p-2">
          <button
            onClick={() => {
              navigate("/scholarship");
            }}
            class="btn btn-outline-success mt-5"
            aria-current="page"
            href="#"
          >
            Get Scholarship
          </button>
        </li>
        <li class="nav-item p-2">
          <button
            onClick={() => {
              navigate("/actualfee");
            }}
            class="btn btn-outline-success mt-3 "
            aria-current="page"
            href="#"
          >
            Get Actual Fee
          </button>
        </li>
        <li class="nav-item p-2">
          <button
            onClick={() => {
              navigate("/eligibility");
            }}
            class="btn btn-outline-success mt-3"
            aria-current="page"
            href="#"
          >
            Eligibility Criteria
          </button>
        </li>
        <li class="nav-item p-2">
          <button
            onClick={() => {
              navigate("/selectAdd");
            }}
            class="btn btn-outline-success mt-3"
            aria-current="page"
            href="#"
          >
            Add Student/Teacher/StaffMember
          </button>
        </li>
        <li class="nav-item p-2">
          <button
            onClick={() => {
              navigate("/selectView");
            }}
            class="btn btn-outline-success mt-3"
            aria-current="page"
            href="#"
          >
            View Student/Teacher/StaffMember
          </button>
        </li>
      </ul>
    </>
  );
};

export default VerticalNav;
