import React, { Component } from 'react';
import Card from './common/Card';
import image from '../images/lotus.jpg';
import './MagicCard.scss';

class MagicCard extends Card {
    constructor(props){
        super(props);
    }

    render() { 
        return ( 
            <div className = "col-sm">
                <img 
                    className = "cardArt"
                    src = {image} 
                    alt = "ERROR">
                </img>
            </div>
        );
    }
}
 
export default MagicCard;
