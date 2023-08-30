import { useState } from "react";
import axios from "axios";
import "./css/add_product.css"

const Product = () => {
    const [product_name, setproduct_name] = useState('');
    const [product_price, setproduct_price] = useState('');

    const [product_description, setproduct_description] = useState('');
    const [product_sku, setproduct_sku] = useState('');
    const [product_quantity, setproduct_quantity] = useState('');
    const [product_category, setproduct_category] = useState('');
    const [product_image, setproduct_image] = useState('');
    
    const [message, setMessage] = useState('');


    const ProductCustomer = (e) => {
        e.preventDefault()
        // const data = {
        //     product_name: product_name,
        //     product_description: product_description,
        //     product_price:product_price,
        //     product_quantity: product_quantity,
        //     product_sku: product_sku,
        //     product_image: product_image,
        //     product_category: product_category,
           

        // }

        const data = new FormData();
        data.append('product_name',product_name);
        data.append('product_description',product_description);
        data.append('product_price',product_price);
        data.append('product_quantity',product_quantity);
        data.append('product_sku',product_sku);
        data.append('product_category',product_category);
        data.append('product_image',product_image);
        const config = {
            headers:{
                Authorization : "Bearer " + localStorage.getItem('staffticket'),
            }
        }
        
        axios.post("http://localhost:90/product/insert", data,config)
            .then((response => {
                if(response.data.msg !=="Invalid Token"){
                    setMessage(" Product addes Sucessfully")
                }else{
                    setMessage("Failed To Add Product")
                }
                console.log(response.data.msg);
            }))
            .catch()
    }
    return (
        <>
            <form>
                <div className="d-flex align-items-center flex-column add_product">
                    <h1>Product</h1>
                    <h1>{message}</h1>
                    <div className="mb-3 col-md-4 form-group align-items-center">
                        <label for="firstname" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="product Name" placeholder="product Name" onChange={(e) => { setproduct_name(e.target.value) }} />

                        <label for="Lastname" className="form-label">product description</label>
                        <input type="text" className="form-control" id="product description" placeholder="product description" onChange={(e) => { setproduct_description(e.target.value) }} />

                        <label for="product_price" className="form-label">product price</label>
                        <input type="text" className="form-control" id="product price" placeholder="product price" onChange={(e) => { setproduct_price(e.target.value) }} />
                        
                        <label for="product_price" className="form-label">product sku</label>
                        <input type="product_sku" className="form-control" id="product sku" placeholder="product sku" onChange={(e) => { setproduct_sku(e.target.value) }} />

                        <label for="product category" className="form-label">product category</label>
                        <input type="product category" className="form-control" id="product category" placeholder="product category" onChange={(e) => { setproduct_category(e.target.value) }} />

                        <label for="product quantity" className="form-label">product quantity</label>
                        
                        <input type="product quantity" className="form-control" id="product quantity" placeholder="product quantity" onChange={(e) => { setproduct_quantity(e.target.value) }} />

                       

                        <label for="product image" className="form-label">product image</label>
                        <input type="file" className="form-control" id="product image" placeholder="product image" onChange={(e) => { setproduct_image(e.target.files[0]) }} />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" className="btn btn-outline-danger " onClick={ProductCustomer} />
                    </div>
                </div>
            </form>
        </>
    )
}
export default Product;