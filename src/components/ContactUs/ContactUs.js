import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="d-flex justify-content-around align-items-center">
            <div className="contact-us-div">
                <h1>Contact Us</h1>
                <h3> Address: 
                    160 Broadway, New York, NY 10038,
                    <br /> 102 1st Avenue, New York, NY 100
                </h3>
                <h5>+1 8 800 555 35 35</h5>


            </div>
            <div className="contact-img">
                <img src="https://tse4.mm.bing.net/th?id=OIP.4gOl0Ay1D8_5sqDUgaGoOAHaF0&pid=Api&P=0&w=194&h=153" alt=""  />
            </div>
        </div>
        
    );
};

export default ContactUs;