import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/cart.css"

const ProductCart = () => {
  const [details, setDetails] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userticket"),
    },
  };

  const deleteCart = (cart_id) => {
    console.log(cart_id);
    axios
      .delete("http://localhost:90/cart/delete/" + cart_id, config)
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          console.log("Cart Deleted Successfull");
          window.location.replace('/ProductCart');
        } else {
          console.log("Please Try Again!!!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

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

  return (
    <div className="container-fluid table_responsive">
      <div className="row  justify-content-center hello">
        <div className="text-center pghead fs-1 mb-4">My Cart</div>
        <div col-lg-12 tablemain>
          <table className="table table-striped">
            <thead className="bg-dark">
              <tr className="border border-3 border-dark text-center text-white">
                <th scope="col">Food Image</th>
                <th scope="col">Food Name</th>
                <th scope="col">Food Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="bodyfs">
              {details.map((singleData) => {
                return (
                  <>
                    <tr className="border border-3 border-dark text-center align-middle">
                      <td className="p-2">
                        <img
                          src={`http://localhost:90/${singleData.product_id.product_image}`}
                          className="img-fluid img-height-cart"
                          alt="profile_pic"
                        />
                      </td>
                      <td>{singleData.product_id.product_name}</td>
                      <td>{singleData.product_id.product_price}</td>
                      <td>{singleData.cart_quantity}</td>
                      <td>{singleData.product_id.product_price * singleData.cart_quantity}</td>
                      <td className="border-start border-2 border-dark">
                        <Link
                        to="/ProductOrder"
                          class="btn btn-primary btn-sm me-2"
                        >
                          <i class="fa fa-edit" aria-hidden="true"></i> Order
                        </Link>
                        
                        <Link
                          to=""
                          class="btn btn-danger btn-sm"
                          onClick={() => {
                            deleteCart(singleData._id);
                          }}
                        >
                          <i class="far fa-trash-alt" aria-hidden="true"></i>{" "}
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;