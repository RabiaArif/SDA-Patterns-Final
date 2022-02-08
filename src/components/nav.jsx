import logo from '../images/logo.jpg';

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">

          <img src={logo} alt="" width="100" height="120" class="d-inline-block align-text-top"/>
          <span class="span1"> Punjab University College of Information Technology</span>
          
          {/* <div class="d-inline-block span2"> Open Source Educational Platform</div> */}
        </a>
      </div>
    </nav>


    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home Page</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" >FAQs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Calender</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Help Desk</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Messages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};
export default Nav;
