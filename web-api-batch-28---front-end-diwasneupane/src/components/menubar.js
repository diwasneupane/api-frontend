import { Component } from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css"

const LogOut = () => {
  localStorage.clear();
  window.location.replace('/login');
}

class Menubar extends Component {
  render() {
    return (
      <header class="header_section sticky-top ">
        <div class="container-fluid g-0">
          <nav class="navbar  bg-light navbar-expand-lg custom_nav-container pt-3 mb-4 no-gutters">
            <Link className="nav-link active navbar-brand" to="/">
              <img className="ms-5" src={require("./images/gadget_guru.png")} alt="" /><span>

              </span></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fa-solid fa-bars-progress to"></i>         </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul class="navbar-nav hover-try  ">
                  {menu}
                </ul>

              </div>
              <div class="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">

              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
var menu;
if (localStorage.getItem('userticket')) {
  menu = (
    <>

      
      
      
<li>
        <Link className="nav-link active" to="Showproduct">Products  &nbsp;<i class="fa fa-box" aria-hidden="true"></i></Link>
      </li>
      <li>
        <Link className="nav-link active" to="/ProductCart">Cart &nbsp;<i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="Dashboard">Profile &nbsp; <i class="fa fa-user  " aria-hidden="true"></i></Link>
      </li>
      <li>
        <button className="logout_button  bg-transparent " onClick={() => { LogOut() }} type="submit">&nbsp;&nbsp;logout&nbsp;<i class="fa fa-sign-out" aria-hidden="true"></i></button>
      </li>
    </>
  )


} else if(localStorage.getItem('staffticket')){
  menu = (
    
  <>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

   <li>
        <Link className="nav-link active" to="Showproduct">Products  &nbsp;<i class="fa fa-box" aria-hidden="true"></i></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="Product">Add Product</Link>
      </li>
      <li>
        <Link className="nav-link active" to="ProductAdmin">Products Admin  &nbsp;<i class="fa fa-box" aria-hidden="true"></i></Link>
      </li>
      <li>
        <Link className="nav-link active" to="OrderAdmin">Order handel Admin  &nbsp;<i class="fa fa-box" aria-hidden="true"></i></Link>
      </li>
      <li>
        <Link className="nav-link active" to="UserAdmin">Customers Edit  &nbsp;<i class="fa fa-person" aria-hidden="true"></i></Link>
      </li>
      
      
      
      
      <li>
        <button className="logout_button  bg-transparent " onClick={() => { LogOut() }} type="submit">&nbsp;&nbsp;logout&nbsp;<i class="fa fa-sign-out" aria-hidden="true"></i></button>
      </li>
  </>
  )
}
else {
  menu = (

    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      <li>
        <Link className="nav-link active" to="Showproduct">Products  &nbsp;<i class="fa fa-box" aria-hidden="true"></i></Link>
      </li>

      <li>
        <Link className="nav-link active" to="login"> login <i class="fa fa-sign-in" aria-hidden="true"></i></Link>
      </li>
      <li>
        <Link className="nav-link active" to="register"> register <i class="fa fa-user-plus" aria-hidden="true"></i></Link>
      </li>

    

    </>)
}



export default Menubar;