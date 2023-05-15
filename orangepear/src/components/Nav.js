import React from "react";
import './Nav.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Nav=()=>{
    
    return(
        <>
        <nav className="main-nav">
            <div className="logo">
            <img src="./Images/logo.png" alt="logo" />
            <h2><span>O</span>range <span>P</span>ear</h2>
            </div>
            <div className="menu-link">
                <ul>
                    <li>
                        <a href="home">Home</a>
                    </li>
                    <li>
                        <a href="about-us">About Us</a>
                    </li>
                    <li>
                        <a href="shop">Shop Now</a>
                    </li>
                    <li>
                        <a href="contact-us">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="socials">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/orangepear.co.in/" target="_OP"><FaFacebook className="fb" /></a>
                    </li>
                    <li>
                        <a href="https://instagram.com/orangepear.co.in?igshid=MzRlODBiNWFlZA==" target="_OP1"><FaInstagramSquare className="instagram" /></a>
                    </li>
                </ul>
            </div>
        </nav>
        <section className="hero-section">
            <h2>Welcome to OP</h2>
        </section>
        
        <section className="about-us">
        <div>
            <p>Your fashion,our passion</p>
        </div>
        </section>
          
        </>
    )
    
}
export default Nav;