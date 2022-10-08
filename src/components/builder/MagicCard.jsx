import React from 'react';
import Card from '../_common/Card';
import noImage from '../../images/mtgback.jpg';
import './MagicCard.scss';

class MagicCard extends Card {
    constructor(props) {
        super(props);

        this.state = {
            isTooltipVisible: false,
            isPlayingAnim: false,
            classList: "tooltipImage cardArtEnlarged"
        }
    }

    onClick = () => {
        const classList = [(this.state.classList)];
        //console.log(classList)
        if (this.state.isPlayingAnim) {
            //Reset the animation
            this.setState({ classList });
        }
        classList.push("flash-anim"); //Play the animation

        this.setState({ classList: classList.join(' '), isPlayingAnim: true });

        this.props.onMouseClickHandler(this.props.data); //Call parent handler, passing the data all the way up
    }

    //Note, onMouseOver propagates unlike onMouseEnter, it'll catch fast mouse movements
    onMouseOverHandler = () => {
        this.setState({ isTooltipVisible: true })
    }

    onMouseOutHandler = () => {
        this.setState({ isTooltipVisible: false })
    }

    onAnimationEndHandler = () => {
        this.setState({
            isPlayingAnim: false,
            classList: "tooltipImage cardArtEnlarged"
        });
    }

    render() {
        const { keyName, data } = this.props;

        let imageUrl = "";

        //If imageUrl is available
        if (data && data.imageUrl) {
            imageUrl = data.imageUrl;
        }

        return (
            <div key={keyName} className="col-sm pl-1 pr-1">
                {data && data.imageUrl ?
                    <img
                        className="cardArt"
                        src={data.imageUrl}
                        alt=""
                        onClick={this.onClick}
                        onMouseOver={this.onMouseOverHandler}
                        onMouseOut={this.onMouseOutHandler}
                    ></img>
                    :
                    <img
                        className="cardArt unclickable"
                        src={noImage}
                        alt="ERROR"
                    ></img>
                }

                {this.state.isTooltipVisible ?
                    <img
                        className={this.state.classList}
                        src={imageUrl}
                        alt=""
                        onAnimationEnd={this.onAnimationEndHandler}
                    >
                    </img> : <React.Fragment></React.Fragment>
                }

            </div>
        );
    }
}

export default MagicCard;
