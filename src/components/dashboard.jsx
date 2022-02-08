import "../style/dashboard.css";
import Nav from "./nav";
import VerticalNav from "./verticalNav";
import ForRoutes from "./ForRoutes";

const Dashboard = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <Nav></Nav>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-3">
            <VerticalNav />
          </div>

          <div class="col-6">
            <ForRoutes></ForRoutes>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
