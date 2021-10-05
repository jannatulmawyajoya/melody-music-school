import React, { useEffect, useState } from 'react';
import './MoreServices.css';

const MoreServices = () => {
    const [moreServices, setMoreServices] = useState([])
    useEffect(() => {
        fetch('./moreServices.JSON')
            .then(res => res.json())
            .then(data => setMoreServices(data))
    }, [])
    // console.log(services);
    return (
        <div className="main-container">
            <h1 className="services-container text-success">We have more other Services</h1>

            <div className="services">
                <div className="row">
                    {moreServices.map((singleService) => (
                        <div className="col-md-3 m-5">
                            <div className="class-cart">
                                <div className="cart-img">
                                    <img className="w-50" src={singleService.img} alt="" />
                                </div>
                                <h2>{singleService.name}</h2>
                                <p>{singleService.description}</p>
                                
                                
                                <h5>{singleService.price}</h5>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default MoreServices;