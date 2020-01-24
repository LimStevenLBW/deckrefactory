import React, { Component } from 'react';
import Card from './common/Card';
import image from '../images/lotus.jpg';
import './MagicCard.scss';

class MagicCard extends Card {
    constructor(props){
        super(props);

        this.state = {
            imageUrl: image,
        }
    }

    componentDidMount(){
        console.log("trigger")
        if(this.props.data){
            const {imageUrl} = this.props.data;
            //this.setState({imageUrl}) disabled temporarily so the api doesn't get pissed
        }
    
    }

    render() { 
        
        
        return ( 
            <div className = "col-sm">
                <img 
                    className = "cardArt"
                    src = {this.state.imageUrl} 
                    alt = "ERROR">
                </img>
            </div>
        );
    }
}
 
export default MagicCard;
