import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (  
        <React.Fragment>
            <div className = "row footer-body">
                <div className = "col-12">Deck Refactory Version 0.0.1 by Steven Lim</div>
                
            </div>

            <div className = "row footer-credits">
                <div className = "col-12">Last updated February 2020</div>
            </div>
        </React.Fragment>
    );
}
 
export default Footer;