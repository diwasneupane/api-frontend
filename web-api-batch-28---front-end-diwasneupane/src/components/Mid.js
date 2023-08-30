
import Register from "./Register";
import Product from "./addProduct";
import {Routes, Route} from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";
import Update from "./update";
import Showproduct from "./Showproduct";
import UpdateProduct from "./updateProduct";
import PrivateRoute from "./route_protection";
import SingleProduct from "./singleProduct";
// import Homepage from "./homepage";
import Landingpage from "./landingpag";

import ProductCart from "./cart";

import ProductAdmin from "./product_admin";
import ProductOrder from "./order"
import UserAdmin from "./user_admin";
import PrivateRouteUser from "./user_routeprotection";
import OrderAdmin from "./order_admin";

const Mid = () => {
    return (
        <>
        <Routes>
       
        <Route path="/register" element={<Register />}></Route>

        <Route path="/" element={<Landingpage />}></Route>
        <Route path="/dashboard" element={<PrivateRouteUser><Dashboard /></PrivateRouteUser>}></Route>
        <Route path="/Product" element={<PrivateRoute><Product /></PrivateRoute>}></Route>
        <Route path="/Showproduct" element={<Showproduct />}></Route>
        <Route path="/ProductAdmin" element={<ProductAdmin />}></Route>
        <Route path="/SingleProduct/:product_id" element={<SingleProduct />}></Route>
        <Route path="/update" element={<PrivateRouteUser><Update /></PrivateRouteUser>}></Route>
        <Route path="/updateProduct/:product_id" element={<PrivateRoute><UpdateProduct /></PrivateRoute>}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/UserAdmin" element={<PrivateRoute><UserAdmin /></PrivateRoute>}></Route>
        <Route path="/ProductCart" element={<PrivateRouteUser><ProductCart /></PrivateRouteUser>}></Route>
        <Route path="/ProductOrder" element={<PrivateRouteUser><ProductOrder /></PrivateRouteUser>}></Route>
        <Route path="/OrderAdmin" element={<PrivateRoute><OrderAdmin /></PrivateRoute>}></Route>
        
        </Routes>
        </>
    )
}

export default Mid;