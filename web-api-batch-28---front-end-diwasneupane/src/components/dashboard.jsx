import { useEffect, useState } from "react";
import axios from "axios";
import "./css/dashboard.css"
import { Link } from "react-router-dom";
const Dashboard = () => {
    const [details, setDetails] = useState('');
    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('userticket'),
        }
    }
    const update = () => {
        window.location.replace('/update')
    }
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

    return (
        <>
            <div class="container mt-4 mb-4 p-3 d-flex justify-content-center text-left">
                <div class="card p-4">
                    <div class=" image d-flex flex-column justify-content-center align-items-left">
                        
                            <img className="image_align" src={"http://localhost:90/" +details.image}  height="200" width="200" />
                      <span class="name mt-3"> <i class="fa fa-user" aria-hidden="true"></i> &nbsp;username:&nbsp; {details.username} </span>

                        <div class="d-flex flex-row justify-content-left align-items-left mt-3 gap-2">
                            <span class="idd1">Firstname: &nbsp;{details.firstname}</span> <span>
                            </span> </div>
                        <div class="d-flex flex-row justify-content-left align-items-left mt-3 gap-2">
                            <span class="lastname">Lastname:&nbsp;{details.lastname}</span>
                        </div>
                        <div class="d-flex flex-row justify-content-left align-items-left mt-3">
                            <span class="email">Email:&nbsp;{details.email}</span>
                        </div>
                        <div class="d-flex flex-row justify-content-left align-items-left mt-3">
                            <span class="address">Address:&nbsp;{details.address}</span>
                        </div>
                        <div class="d-flex flex-row justify-content-left align-items-left mt-3">
                            <span class="phone">Phone:&nbsp;{details.phone}</span>
                        </div>
                        
                    </div></div>
                <div class=" d-flex " >
                <Link type="button update_button" className="nav-link active btn2" to="/update"><div className="btn_text"><div className="icon_edit"><i class="fa fa-edit " aria-hidden="true"/></div><br center/>Update Profile</div></Link></div>



            </div>
            {/* <div className="container">
            
            <div className="row m-5 p-5">
                <div className="col">
                    <h1 className="">User Profile</h1>
                    <p>username: {details.username}</p>
                    <p>Firstname:{details.firstname}</p>
                    <p>Lastname:{details.lastname}</p>
                    <p>email:{details.email}</p>
                    <p>age:{details.age}</p>
                    <p>gender:{details.gender}</p>
                    <p>phone:{details.phone}</p>
                </div>
                <button type="button" class="btn btn-dark" onClick={update}>Edit here</button>
            </div>
        </div> */}
        </>
    )
}
export default Dashboard;