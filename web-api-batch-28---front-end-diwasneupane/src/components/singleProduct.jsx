import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/single_product.css"

const Singleproduct=()=>{
    const {product_id } = useParams();
    const [data, setData] = useState('');
    const [message, setMessage] = useState([]);
    const [cart_quantity, setQuantity] = useState(1);
    
  const incrementQuantity = () => {
    setQuantity(parseInt(cart_quantity) + 1);
  };

  const decrementQuantity = () => {
    if (parseInt(cart_quantity) > 1) {
      setQuantity(parseInt(cart_quantity) - 1);
    }
  };

    useEffect(()=>{
        axios.get("http://localhost:90/product/single/" + product_id)
        .then((response)=>{
            console.log(response);
            setData(response.data.data)
        })
        .catch((e)=>{
            console.log(e);
        })
    },[])
    const config = {
      headers : {
          Authorization : "Bearer " + localStorage.getItem('userticket'),
      }
    }
  
    const addCart=(e)=>{
        e.preventDefault();
        const data = {
          product_id: product_id,
          cart_quantity : cart_quantity,
        };
        axios
          .post("http://localhost:90/cart/insert", data, config)
          .then((response) => {
            if (response.data.success === true) {
              setMessage("Product added To Cart");
              window.location.replace('/ProductCart')
              // window.location.replace("/addtocart");
            } else {
              setMessage("Please Try Again! Something Went Wrong!!!");
            }
            console.log(response);
          })
          .catch((e) => {
            console.log(e);
          }); 
      }

    return (
        <>
            <div className="container-fluid ">
                <div className="row read_more">
                    {message}
                    <div className="col-md-12">
                        {/* <div className="ms-5 me-5"> */}
                        <p><img className="img-fluid" src={"http://localhost:90/" + data.product_image}/></p>
                        {/* </div> */}
                        {/* <h3>{details.food_name}</h3> */}
                        <p>product name: {data.product_name}</p>
                        <p>product description: {data.product_description}</p>
                        <p>product InStocks: {data.cart_quantity}</p>
                        <p>Product price: {data.product_price}</p>

                        <form>
                            {/* <input type= 'number' placeholder='Quantity' onChange={(e)=>{setQuantity(e.target.value)}} className="form-group" /> */}
                            <div>
                                <span onClick={decrementQuantity}>-</span>
                                <input value={parseInt(cart_quantity)} disabled />
                                <span onClick={incrementQuantity}>+</span>
                            </div>
                        </form>
                        
                        <button className="btn main-btn my-4" onClick={addCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Singleproduct;