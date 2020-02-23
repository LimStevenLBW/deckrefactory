import React from 'react';
import Card from '../_common/Card';
import noImage from '../../images/mtgback.jpg';
import './MagicCard.scss';

class MagicCard extends Card {
    constructor(props){
        super(props);

        this.state = {
            imageUrl: noImage,
            isTooltipVisible: false,
            isPlayingAnim: false,
            classList: "tooltipImage cardArtEnlarged"
        }
    }

    componentDidMount() {
        if(this.props.data) {
            const { imageUrl } = this.props.data;
            this.setState({imageUrl});
        }
    }

    /**
     * Adds an additional conditional to check for updated image props and re-render if so
     */
    shouldComponentUpdate(prevProps, prevState) {
        let url = "notSet"
        if(prevProps.data){
            if(prevProps.data.imageUrl) url = prevProps.data.imageUrl;
        }

        if (url !== this.state.imageUrl && url !== "notSet") {
            this.setState({imageUrl: url});
            return true;
        }
        else if(prevState !== this.state) return true; //Default state update conditional
      
        return false; //Do not render if false
    }

    onClick = () => {
        const classList = [(this.state.classList)]; 
        //console.log(classList)
        if(this.state.isPlayingAnim){
            //Reset the animation
            this.setState({ classList });
        }
        classList.push("flash-anim"); //Play the animation
        
        this.setState({classList: classList.join(' '), isPlayingAnim: true});  

        this.props.onMouseClickHandler(this.props.data); //Call parent handler, passing the data all the way up
    }

    //Note, onMouseOver propagates unlike onMouseEnter, it'll catch fast mouse movements
    onMouseOverHandler = () => {
        this.setState({isTooltipVisible: true})
    }

    onMouseOutHandler = () => {
        this.setState({isTooltipVisible: false})
    }

    onAnimationEndHandler = () => {
        this.setState({
            isPlayingAnim: false, 
            classList: "tooltipImage cardArtEnlarged"
        });
    }

    render() { 
        const { keyName } = this.props;

        return ( 
            <div key = {keyName} className = "col-sm pl-1 pr-1">
                {(this.state.imageUrl !== noImage) && (this.state.imageUrl) ?
                    <img 
                        className = "cardArt"
                        src = {this.state.imageUrl} 
                        alt = "ERROR"
                        onClick = {this.onClick}
                        onMouseOver = {this.onMouseOverHandler}
                        onMouseOut = {this.onMouseOutHandler}
                    ></img>
                    :
                    <img 
                        className = "cardArt unclickable"
                        src = {this.state.imageUrl} 
                        alt = "ERROR"
                    ></img>
                }
                
                {this.state.isTooltipVisible ? 
                    <img 
                        className = {this.state.classList}
                        src = {this.state.imageUrl} 
                        alt = "ERROR"
                        onAnimationEnd = {this.onAnimationEndHandler}
                    >
                    </img> : <React.Fragment></React.Fragment>
                }
                
            </div>
        );
    }
}
 
export default MagicCard;