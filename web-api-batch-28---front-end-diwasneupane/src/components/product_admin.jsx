import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/showproduct.css"

const ProductAdmin = () => {
    const { product_id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:90/product")
            .then(result => {
                console.log(result)
                setDetails(result.data.details)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('staffticket'),

        }
    }
    const deleteRoom = (product_id) => {
        console.log(product_id)
        axios.delete('http://localhost:90/product/delete/' + product_id, config)
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
                            <div className="col-md-4 " >
                                <p><img className="img-fluid" src={"http://localhost:90/" + singleData.product_image} /></p>
                                <h3>{singleData.product_name}</h3>
                                <p>Price  : {singleData.product_price}</p>
                                <p>SKU : {singleData.product_sku}</p>
                                <p>Quantity : {singleData.product_quantity} </p>
                                
                                <p>Description :{singleData.product_description}</p>
                                <p>category :{singleData.product_category}</p>
                                <Link  className="btn btn-danger m-2 " to={"/updateProduct/" + singleData._id}>
                                    
                                        Edit Here
                                    
                                </Link>
                               
                                <Link className="btn btn-danger ml-5 " to={''} onClick={() => { deleteRoom(singleData._id) }}>
                                    delete Here
                                </Link>
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

export default ProductAdmin;