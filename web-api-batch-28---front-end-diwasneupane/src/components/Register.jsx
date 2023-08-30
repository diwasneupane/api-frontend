import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = () => {
    const [fname, setfname] = useState('');
    const [email, setEmail] = useState('');

    const [lname, setlname] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');

    const [gender, setGender] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');


    const registerCustomer = (e) => {
        e.preventDefault()
        const data = {
            fname: fname,
            lname: lname,
            email: email,
            username: username,
            password: password,
            address: address,
            phone: phone,
            age: age,
            gender: gender,
            image: image,

        }
        // const data = new FormData();
        // data.append('fname',fname);
        // data.append('lname',lname);
        // data.append('email',email);
        // data.append('username',username);
        // data.append('password',password);
        // data.append('address',address);
        // data.append('phone',phone);
        // data.append('age',age);
        // data.append('gender',gender);
        // data.append('image',image);
        // console.log(data)

        axios.post("http://localhost:90/customer/insert", data)
            .then((response => {
                if (response.data.msg == "user inserted") {
                    setMessage("User Registered Sucessfully")
                } else {
                    setMessage("Failed To Register")
                }
                console.log(response.data.msg);
            }))
            .catch()
    }
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Poppins:wght@100;200&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
            </style>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div class="form-bg">
                <div class="container">
                    <div class="row">

                        <div class="col-md-offset-6 ">


                        <h3 className="heading"> {message}</h3>


                            <div class="form-container">

                                <div class="left-content">

                                    <h3 class="title">Gadget <br></br> Guru <img src="images/gadget_guru.png" alt="" /></h3>

                                    <h3 class="sub-title">Register Here <br /> and <br />experience<br />A new way <br />of <br />fulfiling<br /> your <br />needs  </h3>
                                </div>
                                <div class="right-content">
                                    <h3 class="form-title">Register</h3>
                                    <form class="form-horizontal">
                                        <div class="form-group">
                                            <label for="firstname" className="form-label">First Name</label>
                                            <input required type="text" autoComplete="off" className="form-control" minLength="2" id="username" onChange={(e) => { setfname(e.target.value) }} />

                                            <label for="Lastname" className="form-label">Last Name</label>
                                            <input required type="text" className="form-control" id="Last Name" onChange={(e) => { setlname(e.target.value) }} />

                                            <label for="email" className="form-label" type="email">email</label>
                                            <input required type="email" className="form-control" id="email" onChange={(e) => { setEmail(e.target.value) }} />

                                            <label for="email" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="password" onChange={(e) => { setPassword(e.target.value) }} />

                                            <label for="phonenumber" className="form-label">phonenumber</label>
                                            <input required type="phonenumber" className="form-control" id="phonenumber" onChange={(e) => { setPhone(e.target.value) }} />

                                            <label for="username" className="form-label">username</label>

                                            <input type="Username" className="form-control" id="Username" onChange={(e) => { setUsername(e.target.value) }} />




                                        </div>
                                        <button class="btn signin" onClick={registerCustomer}>Register</button>
                                        <span class="signup-link">Already have an account? Sign In <Link className="" to="/login ">Here</Link></span>

                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </>
    )
}
export default Register;