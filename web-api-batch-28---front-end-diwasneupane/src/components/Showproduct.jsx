import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/showproduct.css"

const Showproduct = () => {
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
   
       return (


        <body>

<a className="top" href="#"><i class="fa-solid fas fa-arrow-alt-circle-up "></i></a>
            <section class=" slider_section position-relative">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="slider_item-box">
                                <div class="slider_item-container">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="slider_item-detail">
                                                    <div>
                                                        <h1>
                                                            Welcome to <br />
                                                            Gadget Guru
                                                        </h1>
                                                        <p>
                                                            A gadget is a small machine or device which does something useful. You sometimes refer to something as a gadget when you are suggesting that it is complicated and unnecessary.

                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="slider_img-box">
                                                    <div>
                                                        <img src="https://t3.ftcdn.net/jpg/02/35/84/44/360_F_235844454_RTTLpnm2asRdwNJ97MU0ENJqnCSUdXQv.jpg" alt="" class="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="slider_item-box">
                                <div class="slider_item-container">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="slider_item-detail">
                                                    <div>
                                                    <h1>
                                                            Welcome to <br />
                                                            Gadget Guru
                                                        </h1>
                                                        <p>
                                                            A gadget is a small machine or device which does something useful. You sometimes refer to something as a gadget when you are suggesting that it is complicated and unnecessary.

                                                        </p>
                                                        <div class="d-flex">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="slider_img-box">
                                                    <div>
                                                        <img src="https://st4.depositphotos.com/1010613/21121/i/600/depositphotos_211210072-stock-photo-elevated-view-various-electronic-devices.jpg" alt="" class="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="slider_item-box">
                                <div class="slider_item-container">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="slider_item-detail">
                                                    <div>
                                                    <h1>
                                                            Welcome to <br />
                                                            Gadget Guru
                                                        </h1>
                                                        <p>
                                                            A gadget is a small machine or device which does something useful. You sometimes refer to something as a gadget when you are suggesting that it is complicated and unnecessary.

                                                        </p>
                                                        <div class="d-flex">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="slider_img-box">
                                                    <div>

                                                        <img src="https://w0.peakpx.com/wallpaper/661/673/HD-wallpaper-gadgets2-gadgets.jpg" alt="" class="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="custom_carousel-control">
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="icon-prev"><i class="fa-solid fa-arrow-right"></i></span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="icon-prev"><i class="fa-solid fa-arrow-left"></i></span>
                        </a>
                    </div>
                </div>
            </section>

            <section id="collection" class="py-5">
                <div class="container">
                    <div class="title text-center">
                        <h2 class="position-relative d-inline-block">New Collection</h2>
                    </div>


                    <div class="row g-0">
                        <div class="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
                            <button type="button" class="btn m-2 text-dark active-filter-btn" data-filter="*">All</button>
                            <div class="title text-center ml-5 mt-2">
                                <h2 class="position-relative d-inline-block">Best Sales</h2>
                            </div>
                            <div class="title text-center ml-5 mt-2">
                                <h2 class="position-relative d-inline-block">Featured</h2>
                            </div>
                            <div class="title text-center ml-5 mt-2">
                                <h2 class="position-relative d-inline-block">New Arrival</h2>
                            </div>

                        </div>

                        <div class="collection-list mt-4 row gx-0 gy-3">
                            {details.map(singleData => {
                                return (
                                    <div class="col-md-6 col-lg-4 col-xl-3 p-2 best">
                                        <div className="category">
                                            <svg xmlns="http://www.w3.org/2000/svg">



                                                <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">



                                                    <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
                                                </filter>
                                            </svg>



                                            <span className="category_title" filter-content="S">{singleData.product_category}</span>

                                        </div>
                                        <div class="collection-img position-relative">

                                            <img className="img-fluid" src={"http://localhost:90/" + singleData.product_image} height="400px" />
                                            <span class="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                                        </div>
                                        <div class="text-center">
                                            <div class="rating mt-3">
                                                <span class="text-primary"><i class="fas fa-star"></i></span>
                                                <span class="text-primary"><i class="fas fa-star"></i></span>
                                                <span class="text-primary"><i class="fas fa-star"></i></span>
                                                <span class="text-primary"><i class="fas fa-star"></i></span>
                                                <span class="text-primary"><i class="fas fa-star"></i></span>
                                            </div>
                                            <p class="text-capitalize my-1">{singleData.product_name}</p>
                                            <span class="fw-">InStocks : {singleData.product_quantity}</span><br />
                                            <span class="fw-bold">Price  : {singleData.product_price}</span><br />
                                            <Link className="btn btn-danger" to={"/SingleProduct/" + singleData._id}>
                                                Show More
                                            </Link>

                                        </div>
                                    </div>
                                )

                            })}
                        </div>
                    </div>

                </div>
            </section>

            <section id="special" class="py-5">
                <div class="container">
                    <div class="title text-center py-5">
                        <h2 class="position-relative d-inline-block">Special Selection</h2>
                    </div>

                    <div class="special-list row g-0">

                        {details.map(singleData => {
                            return (
                                <div class="col-md-6 col-lg-4 col-xl-3 p-2">
                                    <div class="special-img position-relative overflow-hidden">


                                    </div>
                                    <div class="collection-img position-relative">

                                        <img className="img-fluid" src={"http://localhost:90/" + singleData.product_image} height="400px" />
                                    </div>
                                    <div class="text-center">
                                        <p class="text-capitalize mt-3 mb-1">{singleData.product_name}s</p>
                                        <span class="fw-bold">Price  : {singleData.product_price}</span><br />
                                        <Link className="btn btn-danger" to={"/SingleProduct/" + singleData._id}>
                                                Show More
                                            </Link>
                                    </div>
                                </div>




                            )
                        })}

                    </div>
                </div>
            </section>

            <section id="offers" class="py-5">
                <div class="container">
                    <div class="row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
                        <div class="offers-content">
                            <span class="text-white">Discount Up To 40%</span>
                            <h2 class="mt-2 mb-4 text-white">Grand Sale Offer!</h2>
                            <a href="#" class="btn">Buy Now</a>
                        </div>
                    </div>
                </div>
            </section>
            =
            <section id="blogs" class="py-5">

                <div class="title text-center py-5">
                    <h2 class="position-relative d-inline-block">Our Latest Blog</h2>
                </div>

                <div class="container row align-content-center">

                    <div className="col-6 d-flex justify-content-center"><img src="images/blog_2.jpg" alt="" />
                        <div class="card-body px-0">
                            <h4 class="card-title">GSMArena</h4>
                            <img src="https://i1.feedspot.com/200/4756892.jpg?t=1608387715" alt="" />
                            <p class="card-text mt-3 text-muted">GSMArena is the ultimate resource for GSM handset information. It contains the latest articles (news and reviews). Our primary task is to provide detailed and accurate information about mobile phones and their features</p>
                            <p class="card-text">
                                <small class="text-muted">
                                    <span class="fw-bold">Author: </span>Pocketnow
                                </small>
                            </p></div>

                    </div>
                    <div className="col-6 d-flex justify-content-center"><img src="images/blog_2.jpg" alt="" />
                        <div class="card-body px-0">
                            <h4 class="card-title">Pocketnow</h4>
                            <img src="https://i1.feedspot.com/200/470689.jpg?t=1608387719" alt="" />
                            <p class="card-text mt-3 text-muted">Pocketnow has been a key source of mobile technology news and reviews since its establishment in 2000. Pocketnow offers round-the-clock coverage of the mobile technology landscape, from smartphones to tablets to wearables.</p>
                            <p class="card-text">
                                <small class="text-muted">
                                    <span class="fw-bold">Author: </span>Pocketnow
                                </small>
                            </p></div>

                    </div>
                </div>
            </section>

            <section id="about" class="py-5">
                <div class="container">
                    <div class="row gy-lg-5 align-items-center">
                        <div class="col-lg-6 order-lg-1 text-center text-lg-start">
                            <div class="title pt-3 pb-5">
                                <h2 class="position-relative d-inline-block ms-4">About Us</h2>
                            </div>
                            <p class="lead text-muted">Gadget Guru</p>
                            <p>A gadget is a small machine or device which does something useful. You sometimes refer to something as a gadget when you are suggesting that it is complicated and unnecessary.</p>
                        </div>
                        <div class="col-lg-6 order-lg-0">
                            <img src="https://www.re-thinkingthefuture.com/wp-content/uploads/2021/01/A2797-10-must-have-gadgets-for-every-architect.jpg" alt="" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>


            <section id="newsletter" class="py-5">
                <div class="container">
                    <div class="d-flex flex-column align-items-center justify-content-center">
                        <div class="title text-center pt-3 pb-5">
                            <h2 class="position-relative d-inline-block ms-4">Royality Subscription</h2>
                        </div>

                        <p class="text-center text-muted">Royalties are payments to an owner for using an asset or property, such as patents, copyrighted works, or natural resources.</p>
                        <div class="input-group mb-3 mt-3">
                            <input type="text" class="form-control" placeholder="Enter Your Email ..." />
                            <button class="btn btn-primary" type="submit">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>







        </body>

    )
}

export default Showproduct;