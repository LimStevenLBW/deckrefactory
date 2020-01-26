import React, { Component } from 'react';
import Card from './common/Card';
import image from '../images/lotus.jpg';
import noImage from '../images/mtgback.jpg';
import './MagicCard.scss';

class MagicCard extends Card {
    constructor(props){
        super(props);

        this.state = {
            imageUrl: noImage,
            isTooltipVisible: false,
        }
    }

    componentDidMount(){
        console.log("trigger")
        if(this.props.data){
            const {imageUrl} = this.props.data;
            this.setState({imageUrl: image})
            //this.setState({imageUrl}) disabled temporarily so the api doesn't get pissed
        }
    
    }

    onMouseOverHandler = () => {
        this.setState({isTooltipVisible: true})
    }

    onMouseOutHandler = () => {
        this.setState({isTooltipVisible: false})
    }

    render() { 
        
        return ( 
            <div className = "col-sm">
                <img 
                    className = "cardArt"
                    src = {this.state.imageUrl} 
                    alt = "ERROR"
                    onMouseOver = {this.onMouseOverHandler}
                    onMouseOut = {this.onMouseOutHandler}>
                </img>

                {this.state.isTooltipVisible ? 
                    <img 
                        className = "tooltipImage cardArtEnlarged"
                        src = {this.state.imageUrl} 
                        alt = "ERROR">
                    </img> : <React.Fragment></React.Fragment>
                }
                
            </div>
        );
    }
}
 
export default MagicCard;
