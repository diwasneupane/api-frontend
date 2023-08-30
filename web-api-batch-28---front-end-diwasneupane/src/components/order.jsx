import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/order.css";

const ProductOrder = () => {
  const [details, setDetails] = useState([]);
  const [address, setAddress] = useState("");
  const [contact_no, setContactNo] = useState("");
  const [payment_method, setPaymentMethod] = useState("");
  // const [payment_status, setPaymentStatus] = useState("");
  const [message, setMessage] = useState("");
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userticket"),
    },
  };

  var payment_status;

  if(payment_method === 'Cash On Delivery'){
    payment_status = "Pending";
  } else {
    payment_status = "Paid";
  }

  useEffect(() => {
    axios
      .get("http://localhost:90/cart/get", config)
      .then((result) => {
        console.log(result);
        setDetails(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const orderProduct = () => {
    const data = {
      order_item: details,
      total_price: details.reduce(
        (a, c) => a + c.product_id.product_price * c.cart_quantity,
        0
      ),
      payment_method: payment_method,
      payment_status: payment_status,
      contact_no: contact_no,
      address: address,
    };
    axios
      .post("http://localhost:90/order/insert", data, config)
      .then((response) => {
        if (response.data.success === true) {
          setMessage("Order Made Successfully");
        } else {
          setMessage("Order Made Successfully");
        }
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    // <div className="orderpage container-fluid">
    //   <div className="row justify-content-center orderpage">
    //     <div className="text-center pghead fs-1 mb-4">Order Summary</div>
    //     {message}
    //     <div className="">
    //       <div className="col-lg-5 ms-5 border border-5 rounded">
    //         <h3 className="text-center">Checkout</h3>
    //         <div>
    //             <label>Enter Your Shipping Address</label>
    //             <input type="text" onChange={(e) => {
    //               setAddress(e.target.value);
    //             }} />
    //         </div>
    //         <div>
    //             <label>Enter Your Contact No.</label>
    //             <input type="text" onChange={(e) => {
    //               setContactNo(e.target.value);
    //             }} />
    //         </div>
    //         <div>
    //             <label>Payment Status</label>
    //             <input type="text" disabled value="Pending" />
    //         </div>
    //         <div className="form-group">
    //           <label>Payment Method</label>
    //           {/* <input
    //             type="text"
    //             className="form-control"
    //             placeholder="Guitar Category"
    //             onChange={(e) => {
    //               setGuitarCategory(e.target.value);
    //             }}
    //           /> */}
    //           <select
    //             class="form-select form-select-sm mb-3"
    //             aria-label=".form-select-sm example"
    //             onChange={(e) => {
    //               setPaymentMethod(e.target.value);
    //             }}
    //           >
    //             <option selected>Select Category</option>
    //             <option value="Cash On Delivery">Cash On Delivery</option>
    //             <option value="Esewa">Esewa</option>
    //             <option value="Khalti">Khalti</option>
    //           </select>
    //         </div>

    //         <div>
    //           <label> Total Price:</label>
    //           <p className="fs-4">
               
    //             {details.reduce(
    //               (a, c) => a + c.product_id.product_price * c.cart_quantity,
    //               0
    //             )}
    //           </p>
    //         </div>
    //         <Link
    //           to=""
    //           //   to={"/updateguitar/" + singleData._id}
    //           class="btn btn-primary"
    //           onClick={orderProduct}
    //         >
    //           <i class="fa fa-edit" aria-hidden="true"></i>Place Order
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="cards">
    <div class="leftside">
    <img
            src={require("./images/gadget_guru.png")}
            
          />
    </div>
    <div class="rightside">
      <form action="">
        {message}
        <h1>CheckOut</h1>
        <h2>Payment Information</h2>
        <p>Enter Your Shipping Address</p>
        <input type="text" class="inputbox" onChange={(e) => {
                setAddress(e.target.value);
                }} />
        
        <label>Enter Your Contact No.</label>
                 <input type="text" class="inputbox" onChange={(e) => {
                 setContactNo(e.target.value);
                }} />
                <label>Payment Status</label>
                 <input type="text" class="inputbox" disabled value="Pending" />
        <p>Payment Status</p>
        
        <select
                 class="form-select form-select-sm mb-3 inputbox" 
                 aria-label=".form-select-sm example"
                 onChange={(e) => {
                   setPaymentMethod(e.target.value);
                 }}
               >
                 <option selected>Select Category</option>
                 <option value="Cash On Delivery">Cash On Delivery</option>
                 <option value="Esewa">Esewa</option>
                 <option value="Khalti">Khalti</option>
               </select>
<div class="expcvv">

<label> Total Price:</label>
             <p className="fs-4 inputbox">
               
               {details.reduce(
                 (a, c) => a + c.product_id.product_price * c.cart_quantity,
                 0
               )}
             </p>

        
    </div>
        <p></p>
        <Link
              to=""
               //   to={"/updateguitar/" + singleData._id}
               class=""
               onClick={orderProduct}
             >
               <button type="submit" class="button">CheckOut</button>
            </Link>
      </form>
    </div>
  </div>
  


  
  );
};

export default ProductOrder;