import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import "./css/order_admin.css"



const OrderAdmin = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("staffticket"),
    },
  };
  const acceptOrder = (id, e) => {
    e.preventDefault();
    const data = {
      id: id,
    };
    axios
      .put("http://localhost:90/order/accept", data, config)
      .then((response) => {
        console.log(response);
        if (response.data.msg == "Order Accepted Successfully") {
          setMessage("Order Accepted Successfully");
          window.location.reload();
        } else {
          setMessage("something went wrong try again");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deliverOrder = (id, e) => {
    e.preventDefault();
    const data = {
      id: id,
    };
    axios
      .put("http://localhost:90/order/delivered", data, config)
      .then((response) => {
        console.log(response);
        if (response.data.msg ==  "Order Delivered Successfully") {
          setMessage("Order Delivered Successfully");
          window.location.reload();
        } else {
          setMessage("Please Try Again! Something Went Wrong!!!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const cancelOrder = (id, e) => {
    e.preventDefault();
    const data = {
      id: id,
    };
    axios
      .put("http://localhost:90/order/cancel", data, config)
      .then((response) => {
        console.log(response);
        if (response.data.msg == "Order Cancelled Successfully") {
          setMessage("Order Cancelled Successfully");
          window.location.reload();
        } else {
          setMessage("Please Try Again! Something Went Wrong!!!");
        }  
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:90/order/get", config)
      .then((res) => {
        console.log(res.data.data);
        setOrders(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="container order_admin " style={{
                    marginTop: "300px",
                  }}>
        <h1 className="text-center m-3 ">My Orders</h1>
        {message}
        <div className="row nav-articlepage-div ">
          {orders.map((data) => (
            <div className="shadow d-flex flex-wrap flex-column justify-content-evenly align-items-center p-4 order_item">
              {data.order_item.map((product) => (
                <div>
                  
                      <img
                        src={`http://localhost:90/${product.product_id.product_image}`}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    
                    
                     
                        <h5 class="card-title text-dark">
                          {product.product_id.product_name}
                        </h5>
                        <p class="card-text my-3">
                          <p>
                            <b>Quantity :</b>
                            {product.cart_quantity}
                          </p>
                        </p>
                     
                  
                        </div>
                
              ))}
              <div>
                <p>
                  Order Date:
                  {moment(data.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </p>
                <p>Total Price: Rs. {data.total_price}</p>
                <p>Order Status: {data.order_status}</p>
                <p>Payment Method: {data.payment_method}</p>
                <p>Phone Number: {data.contact_no}</p>
                <p>Address: {data.address}</p>
              </div>
              {data.order_status === "Requested" && (
                <button
                  className="btn btn-danger fs-5"
                  onClick={(e) => {
                    cancelOrder(data._id, e);
                  }}
                >
                  Cancel
                </button>
              )}
              {data.order_status === "Requested" && (
                            <button
                            className="btn my-btn fs-5"
                            onClick={(e) => {
                                acceptOrder(data._id, e);
                            }}
                            >
                            Accept
                            </button>
                        )}
                        {data.order_status === "On the Way" && ( <button className="btn my-btn fs-5" onClick={(e) => {
                                deliverOrder(data._id, e); }} >Deliver</button>
                        )}
                        
            </div>
          ))}
        </div>
      </div>
      <body>


{/* <div className="container  "> My Orders
       <div class="row show_products">


       {orders.map((data) => {
                {data.order_item.map((product) => (
                    <div>
                      
                          <img
                            src={`http://localhost:90/${product.product_id.product_image}`}
                            class="img-fluid rounded-start"
                            alt="..."
                          />
                        
                        
                         
                            <h5 class="card-title text-dark">
                              {product.product_id.product_name}
                            </h5>
                            <p class="card-text my-3">
                              <p>
                                <b>Quantity :</b>
                                {product.cart_quantity}
                              </p>
                            </p>
                         
                      
                            </div>
                    
                  ))}
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
   </div> */}

   


</body>
    </>
  );
};
export default OrderAdmin;