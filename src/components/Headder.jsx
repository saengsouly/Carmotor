import React from "react";
import './Headder.css'
function  Header () {
return (
    <div className="header">
    <img className="logo" src="react.svg" alt="Vientiane Mortors" />
    <p>Home</p>
    <p>All cars</p>
    <a>
    <button className="contact">Contact Us</button>
    </a>
    </div>
)
   
}
export default Header


