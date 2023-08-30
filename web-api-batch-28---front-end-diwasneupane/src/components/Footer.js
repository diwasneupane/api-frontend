import { Component } from "react";
import "./css/footer.css";


class Footer extends Component {
    render() {
        return ( 
            
            <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our Products</a></li>
                            <li><a href="#">privacy policy</a></li>
                            
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><a href="#"><i class="fa fa-mobile"> </i>+977-9847078571 </a></li>
                            <li><a href="#"><i class="fa fa-envelope"></i> gadgetguru@gmail.com</a></li>
                            <li><a href="#"><i class="fa fa-location"></i> Nakkhu-Ekantakuna</a></li>
                        
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="/">Mobile</a></li>
                            <li><a href="/">Headphone</a></li>
                            <li><a href="/">Laptop</a></li>
                            <li><a href="/">Speakers</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
       </footer>
        )
    }
}
export default Footer;