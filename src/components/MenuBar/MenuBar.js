import React from 'react';
import {Link, Router} from "react-router-dom";
import './MenuBar.css';

const MenuBar = () => {
    return (


        
        <div className= 'main-div'>
            <div className="menubar-div">

            </div>
            <div>
                <Link className="items" to="/home">Home</Link>
                <Link className="items" to="/about">About Us</Link>
                
                <Link className="items" to="/class">Class</Link>
                <Link className="items" to="/latestNews">Latest News</Link>
                <Link className="items" to="/contactUs">Contact Us</Link>
            </div>

            
        </div>
        
    );
};

export default MenuBar;