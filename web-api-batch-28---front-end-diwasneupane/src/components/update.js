import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/update.css"
const Update = () => {
    const [details, setDetails] = useState('');
    const [fname, setfname] = useState('');


    const [lname, setlname] = useState('');

    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');

    const [message, setMessage] = useState('');
    useEffect(() => {
        axios.get('http://localhost:90/customer/dashboard', config)
            .then(response => {
                setDetails(response.data)
                console.log(response)
            })
            .catch(e => {
                console.log(e);
            })
    }, [])
    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('userticket'),
        }
    }
    const updateCustomer = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append('fname', fname);
        data.append('lname', lname);
        data.append('email', email);
        data.append('username', username);
        data.append('address', address);
        data.append('phone', phone);

        data.append('image', image);
        console.log(data)
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('ticket'),
            }
        }
        console.log(data)

        axios.put("http://localhost:90/customer/update", data, config)
            .then((response => {
                if (response.data.message == "updated sucessfully") {
                    setMessage("User updated Sucessfully")
                } else {
                    setMessage("invalid")
                }
                console.log(response.data.message);
            }))
            .catch()
    }
    return (
        <>
            <div className="d-flex align-items-center flex-column">
                <h1 className="message">{message}</h1>
                <div class="container  mt-2 mb-5 content">

                    <div class="row">
                        <div class="col-md-4 border-right">
                            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src={"http://localhost:90/" + details.image} width="100" height="100" /><span class="font-black-50">Firstname:{details.firstname}</span><span class="font-black-50">Lastname:{details.lastname}</span><span class="font-black-50">Username:{details.username}</span><span class="font-black-50">Email:{details.email}</span><span class="font-black-50">Phone:{details.phone}</span><span class="font-black-50">Address:{details.address}</span></div>
                        </div>
                        <div class="col-md-8">
                            <div class="p-3 py-5">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <div class="d-flex flex-row align-items-center back"><Link className="nav-link active" to="/dashboard"> <i class="fa fa-long-arrow-left mr-1 mb-1" aria-hidden="true"></i></Link>
                                        <h6>Back to profile</h6>
                                    </div>
                                    <h6 class="text-right">Edit Profile</h6>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <label for="firstname" className="form-label" >First Name</label>

                                        <input type="text" className="form-control" id="username" value={fname} onChange={(e) => { setfname(e.target.value) }} />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="Lastname" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="Last Name" value={lname} onChange={(e) => { setlname(e.target.value) }} />
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <label for="phonenumber" className="form-label">phonenumber</label>
                                        <input type="phonenumber" className="form-control" id="phonenumber" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="username" className="form-label">username</label>

                                        <input type="Username" className="form-control" id="Username" onChange={(e) => { setUsername(e.target.value) }} />
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <label for="address" className="form-label">Address</label>
                                        <input type="address" className="form-control" id="address" onChange={(e) => { setAddress(e.target.value) }} />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="email" className="form-label">email</label>
                                        <input type="email" className="form-control" id="email" onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>
                                    <label for=" image" className="form-label"> image</label>
                                    <input type="file" className="form-control" id=" image" placeholder=" image" onChange={(e) => { setImage(e.target.files[0]) }} />
                                </div>
                                <br />
                                <div className="form-group ">
                                    <button class="btn update" type="submit" value="Update" onClick={updateCustomer}>update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <form>
                <div className="d-flex align-items-center flex-column">
                    <h1>update</h1>
                    <h1>{message}</h1>
                    <div className="mb-3 col-md-4 form-group align-items-center">
                        <label for="firstname" className="form-label" >First Name</label>

                        <input type="text" className="form-control" id="username" value={fname}  onChange={(e) => { setfname(e.target.value) }} />

                        <label for="Lastname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="Last Name"  value={lname} onChange={(e) => { setlname(e.target.value) }} />

                        <label for="phonenumber" className="form-label">phonenumber</label>
                        <input type="phonenumber" className="form-control" id="phonenumber" value={phone}onChange={(e) => { setPhone(e.target.value) }} />

                        <label for="username" className="form-label">username</label>

                        <input type="Username" className="form-control" id="Username"  onChange={(e) => { setUsername(e.target.value) }} />
                        
                        <label for="address" className="form-label">Address</label>
                        <input type="address" className="form-control" id="address"  onChange={(e) => { setAddress(e.target.value) }} />
                        <label for="email" className="form-label">email</label>
                        <input type="email" className="form-control" id="email"  onChange={(e) => { setEmail(e.target.value) }} />


                    </div>
                    
                    <div className="form-group">
                        <input type="submit" className="btn btn-outline-danger " onClick={updateCustomer} />
                    </div>
                </div>
            </form> */}
        </>
    )
}
export default Update;