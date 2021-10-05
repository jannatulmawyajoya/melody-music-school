import React from 'react';
import {Link, Router} from "react-router-dom";
import './MenuBar.css';

const MenuBar = () => {
    return (


        
        <div className= 'main-div'>
            {/* <div className="menubar-div">

            </div> */}
            <div className="menu-div">
                <Link className="items" to="/home">Home</Link>
                <Link className="items" to="/about">About Us</Link>
                
                <Link className="items" to="/class">Classes</Link>
                <Link className="items" to="/moreServices">More Services</Link>
                <Link className="items" to="/contactUs">Contact Us</Link>
            </div>

            
        </div>
        
    );
};

export default MenuBar;