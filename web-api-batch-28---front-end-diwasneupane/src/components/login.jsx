import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/login_register.css";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [user, setUser] = useState('customer');

    const loginCustomer = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password,
        }
        console.log(data)

        if (user==="customer"){
            axios.post("http://localhost:90/customer/login", data)
            .then((response) => {
                console.log(response.data.token)
                if (response.data.token) {
                    //it will save the token locally, so that it is available 
                    //all over the component
                    localStorage.setItem('userticket', response.data.token)

                    //redirect to the home
                    window.location.replace('/')
                }
                else {
                    setMessage("invalid Login Credintials")
                }
            }
            )
            .catch()
        }else if(user==="staff"){
            axios.post("http://localhost:90/staff/login", data)
            .then((response) => {
                console.log(response.data.token)
                if (response.data.token) {
                    //it will save the token locally, so that it is available 
                    //all over the component
                    localStorage.setItem('staffticket', response.data.token)

                    //redirect to the home
                    window.location.replace('/Showproduct')
                }
                else {
                    setMessage("invalid Login Credintials")
                }
            }
            )
            .catch()
        }
        
    }
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Poppins:wght@100;200&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
            </style>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div class="form-bg ">
                
                <form >
                
                    <div class="container">
                        
                        <div class="row">
                            
                            <div class="col-md-offset-6 ">
                                <h3 className="heading"> {message}</h3>
                                
                                <div class="form-container ">
                                    <div class="left-content">

                                        <h3 class="title">Gadget <br></br> Guru <img src="images/gadget_guru.png" alt="" /></h3>

                                        <h3 class="sub-title">A new<br /> way <br />of <br />fulfiling<br /> your <br />needs  </h3>
                                    </div>
                                    <div class="right-content">
                                        
                                        <h3 class="form-title">Login </h3>
                                        <form class="form-horizontal">
                                            <div class="form-group">
                                                <label for="validationTextarea"> Email</label>
                                                <input required type="email" class="form-control" onChange={(e) => { setEmail(e.target.value) }} />

                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input required type="password" class="form-control" onChange={(e) => { setPassword(e.target.value) }} />


                                            </div>
                                            
                                            <button class="btn signin" type="submit" value="login" onClick={loginCustomer}>Login</button>
                                            <div class="remember-me">
                                                <input type="checkbox" class="checkbox" />
                                                <span class="check-label">Remember Me</span>
                                            </div>
                                            <a href="" class="forgot">Forgot Password</a>
                                        </form>
                                        <span class="separator">OR contact us,</span>
                                        <ul class="social-links">
                                            <li><a href="https://www.instagram.com/art.isticdesigners/"><i class="fab fa-instagram"></i> Instagram</a></li>
                                            <li><a href="https://www.facebook.com/servicesforyouall"><i class="fab fa-facebook-f"></i> Facebook</a></li>
                                        </ul>
                                        <span class="signup-link">Don't have an account? Sign up <Link className="" to="/register">Here</Link></span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </form>
                <button type="radiobutton" className="btn btn-primary" onClick={(e)=>{setUser("staff")}}>staff</button>
                <button className="btn " onClick={(e)=>{setUser("customer")}}>customer</button>
                
                
            </div>


        </>
    )
}
export default Login;