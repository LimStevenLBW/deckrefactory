import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (  
        <div className = "container-fluid footer-body text-center">
            <div className = "row align-items-center h-100">
                <div className = "col-12">Alpha v1.0.0</div>
                
            </div>

            <div className = "row footer-credits">
                <div className = "col-12">Last updated February 2020 by Steven Lim</div>
            </div>
        </div>
    );
}
 
export default Footer;
