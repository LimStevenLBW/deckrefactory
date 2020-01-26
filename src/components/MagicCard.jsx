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
        if(this.props.data){
            const {imageUrl} = this.props.data;
            this.setState({imageUrl: image})
            //this.setState({imageUrl}) disabled temporarily so the api doesn't get pissed
        }
    
    }

    //Note, onMouseOver propagates unlike onMouseEnter, it'll catch fast mouse movements
    onMouseOverHandler = () => {
        this.setState({isTooltipVisible: true})
    }

    onMouseOutHandler = () => {
        this.setState({isTooltipVisible: false})
    }

    render() { 
        const { onMouseClickHandler, data } = this.props;

        return ( 
            <div className = "col-sm">
                <img 
                    className = "cardArt"
                    src = {this.state.imageUrl} 
                    alt = "ERROR"
                    onClick = {() => onMouseClickHandler(data)}
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
