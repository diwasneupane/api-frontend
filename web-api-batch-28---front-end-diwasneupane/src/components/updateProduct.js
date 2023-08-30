import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import "./css/update_product.css"

const UpdateProduct = () => {
    const { product_id } = useParams();
    const [product_name, setproduct_name] = useState('');


    const [product_price, setproduct_price] = useState('');

    const [product_sku, setproduct_sku] = useState('');
    const [product_quantity, setproduct_quantity] = useState('');
    const [product_description, setproduct_description] = useState('');
    const [product_category, setproduct_category] = useState('');
    const [product_image, setproduct_image] = useState('');


    const [message, setMessage] = useState('');


    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('staffticket'),

        }
    }
    useEffect(() => {
        axios.get("http://localhost:90/product/single/" + product_id, config)
            .then((response) => {
                console.log(response.data.data)
                setproduct_name(response.data.data.product_name)
                setproduct_price(response.data.data.product_price)
                setproduct_description(response.data.data.product_description)
                setproduct_category(response.data.data.product_category)
                setproduct_quantity(response.data.data.product_quantity)
                setproduct_image(response.data.data.product_image)
                setproduct_sku(response.data.data.product_sku)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    const updatePro = (e) => {
        e.preventDefault();
        // const data = {
        //     product_name:product_name,
        //     product_description:product_description,
        //     product_price:product_price,
        //     product_quantity:product_quantity,
        //     product_sku:product_name,
        //     product_id:product_id
        // }
        const data = new FormData();
        data.append('product_id', product_id);
        data.append('product_name', product_name);
        data.append('product_description', product_description);
        data.append('product_price', product_price);
        data.append('product_quantity', product_quantity);
        data.append('product_sku', product_sku);
        data.append('product_category', product_category);
        data.append('product_image', product_image);
        axios.put("http://localhost:90/product/update", data, config)
            .then(response => {
                if (response.data.message == "updated sucessfully") {
                    setMessage("Product  updated Sucessfully")
                } else {
                    setMessage("invalid")
                }
                console.log(response.data.message);
            })
            .catch((e) => {
                console.log(e)
            })


    }








    return (
        <>
            <form className="margin">
                <div className="d-flex align-items-center flex-column">
                    <h1>update</h1>
                 
                    <div className="container margin"></div>
                    <h2>{message}</h2> 
                    <div className="mb-3  col-md-4 form-group align-items-center bg-top">
                        <label for="firstname" className="form-label" >product_name</label>
                        <input type="text" className="form-control" id="product_name" value={product_name} placeholder="product_name" onChange={(e) => { setproduct_name(e.target.value) }} />

                        <label for="Lastname" className="form-label">product_pricee</label>
                        <input type="text" className="form-control" id="product_pricee" placeholder="product_price" value={product_price} onChange={(e) => { setproduct_price(e.target.value) }} />

                        <label for="product_quantity" className="form-label">product_quantity</label>
                        <input type="product_quantity" className="form-control" id="product_quantity" placeholder="product_quantity" value={product_quantity} onChange={(e) => { setproduct_quantity(e.target.value) }} />

                        <label for="product_sku" className="form-label">product_sku</label>

                        <input type="product_sku" className="form-control" id="product_sku" placeholder="product_sku" value={product_sku} onChange={(e) => { setproduct_sku(e.target.value) }} />

                        <label for="product_description" className="form-label">product_description</label>
                        <input type="product_description" className="form-control" id="product_description" value={product_description} placeholder="product_description" onChange={(e) => { setproduct_description(e.target.value) }} />

                        <label for="product_category" className="form-label">product_category</label>
                        <input type="product_category" className="form-control" id="product_category" value={product_category} placeholder="product_description" onChange={(e) => { setproduct_category(e.target.value) }} />

                        <label for=" image" className="form-label"> image</label>
                        <input type="file" className="form-control" id=" image" placeholder=" image" onChange={(e) => { setproduct_image(e.target.files[0]) }} />

                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-outline-danger " onClick={updatePro} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default UpdateProduct;