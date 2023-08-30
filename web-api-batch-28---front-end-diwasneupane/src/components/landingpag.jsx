import "./css/landingpage.css";
import { Link } from "react-router-dom";
const Landingpage = () => {
    
    return (
        <html>

            <head>

                <link href="./css/style.css" rel="stylesheet" />

                <link href="./css/responsive.css" rel="stylesheet" />
            </head>

            <body>
                <div class="hero_area">



                    
                        
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
                                                                <div class="d-flex">
                                                                <Link className="nav-link active" class="text-uppercase custom_orange-btn mr-3" to="Showproduct">Shop Now &nbsp; </Link>
                                                                    <a href="" class="text-uppercase custom_dark-btn">
                                                                        Contact Us
                                                                    </a>
                                                                </div>
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
                                                                <Link className="nav-link active" class="text-uppercase custom_orange-btn mr-3" to="Showproduct">Shop Now &nbsp; </Link>
                                                                    <a href="" class="text-uppercase custom_dark-btn">
                                                                        Contact Us
                                                                    </a>
                                                                </div>
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
                                                                <Link className="nav-link active" class="text-uppercase custom_orange-btn mr-3" to="Showproduct">Shop Now &nbsp; </Link>
                                                                    <a href="" class="text-uppercase custom_dark-btn">
                                                                        Contact Us
                                                                    </a>
                                                                </div>
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


                </div>


                
                <section class="service_section layout_padding ">
                
                    <div class="container">
                        <h2 class="custom_heading ">Our Services</h2>
                        <p class="custom_heading-text">
                        Our services mainly focuses on the electronic good and devices at one place where no one need to go to another places beside of this.
                        </p>
                        
                        <div class=" layout_padding2">
                            <div class="card-deck">
                                <div class="card">
                                    <img class="card-img-top" src="https://i.pinimg.com/originals/b8/ae/b1/b8aeb1b09d6c6529cbcf66b414052d57.png" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Mobile</h5>
                                        <p class="card-text">
                                        A mobile phone is a wireless handheld device that allows users to make and receive calls. 
                                        </p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Headphone_icon.svg/2048px-Headphone_icon.svg.png" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Headphones</h5>
                                        <p class="card-text">
                                        Headphones are a pair of small speakers used for listening to sound from a computer, music player or other such electronic device. Headphones originally consisted of one speaker for each ear, connected by a band over the head.
                                        </p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img class="card-img-top" src="https://cdn-icons-png.flaticon.com/512/59/59505.png" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Laptops</h5>
                                        <p class="card-text">
                                        A laptop computer, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer generally smaller than a briefcase that can easily be transported and conveniently used in temporary spaces such as on airplanes, in libraries, temporary offices, and at meetings.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    
                </section>
                <section id="offers" class="py-5">
                <div class="container">
                    <div class="row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
                        <div class="offers-content">
                            <span class="text-white">Discount Up To 40%</span>
                            <h2 class="mt-2 mb-4 text-white">Grand Sale Offer!</h2>
                            
                        </div>
                    </div>
                </div>
            </section>





                <section class="fruit_section">
                    <div class="container">
                        <h2 class="custom_heading">Latest Products</h2>
                        <p class="custom_heading-text">
                            There are many variations of of new product which recently launched or arrived.
                        </p>
                        <div class="row layout_padding2">
                            <div class="col-md-8">
                                <div class="fruit_detail-box">
                                    <h3>
                                        Best Smartphone
                                    </h3>
                                    <p class="mt-4 mb-5">
                                    A smartphone is a cellular telephone with an integrated computer and other features not originally associated with telephones such as an operating system, web browsing, and the ability to run software applications.
                                    </p>
                                    <div>
                                    <Link className="nav-link active" class="text-uppercase custom_orange-btn mr-3" to="Showproduct">Shop Now &nbsp; </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex justify-content-center align-items-center">
                                <div class="fruit_img-box d-flex justify-content-center align-items-center">
                                    <img src="https://i.pinimg.com/originals/b8/ae/b1/b8aeb1b09d6c6529cbcf66b414052d57.png" alt="" class="" width="250px" />
                                </div>
                            </div>
                        </div>
                        <div class="row layout_padding2">
                            <div class="col-md-8">
                                <div class="fruit_detail-box">
                                    <h3>
                                        Best Laptops
                                    </h3>
                                    <p class="mt-4 mb-5">
                                    A laptop computer, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer generally smaller than a briefcase that can easily be transported and conveniently used in temporary spaces such as on airplanes, in libraries, temporary offices, and at meetings.

                                    </p>
                                    <div>
                                    <Link className="nav-link active" class="text-uppercase custom_orange-btn mr-3" to="Showproduct">Shop Now &nbsp; </Link>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex justify-content-center align-items-center">
                                <div class="fruit_img-box d-flex justify-content-center ">
                                    <img src="https://cdn-icons-png.flaticon.com/512/59/59505.png" alt="" class="" width="100px" />
                                </div>
                            </div>
                        </div>
                        <div class="row layout_padding2-top layout_padding-bottom">
                            <div class="col-md-8">
                                <div class="fruit_detail-box">
                                    <h3>
                                        Best Headphone
                                    </h3>
                                    <p class="mt-4 mb-5">
                                    Headphones are a pair of small speakers used for listening to sound from a computer, music player or other such electronic device. Headphones originally consisted of one speaker for each ear, connected by a band over the head.

                                    </p>
                                    <div>
                                    <Link className="nav-link active" class="text-uppercase custom_orange-btn mr-3" to="Showproduct">Shop Now &nbsp; </Link>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex justify-content-center align-items-center">
                                <div class="fruit_img-box d-flex justify-content-center align-items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Headphone_icon.svg/1200px-Headphone_icon.svg.png" alt="" class="" width="250px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                



                <section class="client_section layout_padding">
                    <div class="container">
                        <h2 class="custom_heading">Testimonial</h2>
                        <p class="custom_heading-text">
                        A testimonial is an endorsement, recommendation, or statement by someone who is sharing a positive experience with a business or product. 
                        </p>
                        <div>
                            <div id="carouselExampleControls-2" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="client_container layout_padding2">
                                            <div class="client_img-box">
                                                <img src="https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png" alt="" />
                                            </div>
                                            <div class="client_detail">
                                                <h3>
                                                    Johnhex
                                                </h3>
                                                <p class="custom_heading-text">
                                                    Best place to fullfill your electronic devices needs and desire with full availablity of each and every product <br />
                                                    Rather that be mobile laptops headphone speaker and many more.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="client_container layout_padding2">
                                            <div class="client_img-box">
                                                <img src="https://assets-global.website-files.com/616d9f070b5fd9330907c499/61f1d437f30824b3e87868ab_61760f8b69275c2508dd7924_Jan%2520Benetka.png" alt="" />
                                            </div>
                                            <div class="client_detail">
                                                <h3>
                                                    Andrew
                                                </h3>
                                                <p class="custom_heading-text">
                                                    Best place to fullfill your electronic devices needs and desire with full availablity of each and every product <br />
                                                    Rather that be mobile laptops headphone speaker and many more.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="client_container layout_padding2">
                                            <div class="client_img-box">
                                                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/186/686/small_2x/bearded-man-face-free-vector.jpg" alt="" />
                                            </div>
                                            <div class="client_detail">
                                                <h3>
                                                    Harry
                                                </h3>
                                                <p class="custom_heading-text">
                                                    Best place to fullfill your electronic devices needs and desire with full availablity of each and every product <br />
                                                    Rather that be mobile laptops headphone speaker and many more.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="custom_carousel-control">
                                    <a class="carousel-control-prev" href="#carouselExampleControls-2" role="button" data-slide="prev">
                                        <span class="" aria-hidden="true"></span>
                                        <span class="icon-prev"><i class="fa-solid fa-arrow-left"></i></span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls-2" role="button" data-slide="next">
                                        <span class="" aria-hidden="true"></span>
                                        <span class="icon-prev"><i class="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                            </body>
        </html>
        
    )
    
}
export default Landingpage;