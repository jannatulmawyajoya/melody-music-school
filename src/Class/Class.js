import React from 'react';
import  { useEffect, useState } from 'react';
import './Class.css';

const Class = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('./class.JSON')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    // console.log(services);
    return (
        <div className="main-container">
            <h1 className="services-container text-success">Our Music Instrumental Classes</h1>
            
            <div className="services">
                <div className="row">
                    {classes.map((singleClass) => (
                        <div className="col-md-3 m-5">
                            <div className="class-cart">
                                <div className="cart-img">
                                    <img className="w-50" src={singleClass.img} alt="" />
                                </div>
                                <h2>{singleClass.name}</h2>
                                <p>{singleClass.description}</p>
                                <h5>{singleClass.timing}</h5>
                                <h5>{singleClass.duration}</h5>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Class;