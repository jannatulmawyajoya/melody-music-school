import React from 'react';
 import MenuBar from "../MenuBar/MenuBar";
import Services from '../Services/Services';
import "./Banner.css";
const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    {/* <MenuBar></MenuBar> */}
                    <div className="col-md-6">
                        <h1 className="title">
                            BE THE MUSIC <br /> STAR AND SHINE
                        </h1>
                        <h5 className="text-white text-center mt-3">
                            “We are the music makers, and we are the dreamers of dreams.”
                        </h5>
                        <button className="mt-3 about-btn">START LEARNING</button>
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                    
                </div>
            </div>
            <Services></Services>
        </div>
        
    );
};
export default Banner;