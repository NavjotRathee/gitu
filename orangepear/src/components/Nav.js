import React from "react";
import './Nav.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Nav=()=>{
    return(
        <>
        <nav className="main-nav">
            <div className="logo">
            <img src="./Images/logo.png" alt="logo"/>
            <h2><span>O</span>range <span>P</span>ear</h2>
            </div>
            <div className="menu-link">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Shop Now</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="socials">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/orangepear.co.in/" target="_OP"><FaFacebook /></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/orangepear.co.in/" target="_OP1"><FaInstagramSquare /></a>
                    </li>
                </ul>
            </div>
        </nav>
        <section className="hero-page">
            
        </section>
          
        </>
    )
}
export default Nav;