import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/user_admin.css"

const UserAdmin = () => {
    const [details, setDetails] = useState([]);
    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('staffticket'),

        }
    }
    useEffect(() => {
        axios.get("http://localhost:90/customer" ,config)
            .then(result => {
                console.log(result)
                setDetails(result.data.details)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
   
    const deleteUser = (_id) => {
        console.log(_id)
        axios.delete('http://localhost:90/customer/delete/' + _id, config)
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    window.location.reload(false);
                }
            })
            .catch((e) => {
                console.log(e);
            })
    }

    return (


        <body>


         <div className="container  ">
                <div class="row show_products">


                    {details.map(singleData => {
                        return (
                            <div className="col-md-4 m-5 m-5  " >
                                <p><img className="img-fluid" src={"http://localhost:90/" + singleData.image} /></p>
                                <div className="user_details">
                                <p>first name: {singleData.fname}</p>
                                <p>last name  : {singleData.lname}</p>
                                <p>contact : {singleData.phone}</p>
                                <p>username : {singleData.username} </p>
                                <p>address :{singleData.address}</p>
                                <p><Link className="btn btn-danger " to={''} onClick={() => { deleteUser(singleData._id) }}>
                                    delete Here
                                </Link></p>
                                </div>
                               
                            
                            </div>
                        )

                    })}











                </div>
            </div>

            <script>


            </script>


        </body>

    )
}

export default UserAdmin;