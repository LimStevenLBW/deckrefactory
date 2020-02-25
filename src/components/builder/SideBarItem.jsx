import React, { Component } from 'react';
import ManaIcons from '../_common/ManaIcons';
import './SideBarItem.scss';

class SideBarItem extends Component {
    state = {  
        quantity: this.props.item.quantity,
        isTooltipVisible: false,
        isPlayingAnim: false,
        classList: this.baseClassList
    }

    baseClassList = "w-100 sb-item list-group-item d-flex justify-content-between align-items-center p-1"

    componentDidMount(){
        this.playAnimation();
     //   this.setState({quantity: this.props.item.quantity})
    }
    
    //Watch for changes to quantity and set the state, triggering component did update
    static getDerivedStateFromProps(nextProps, prevState) {
        //if(nextProps.item.quantity)
        if (prevState.quantity !== nextProps.item.quantity) {
          return {
            quantity: nextProps.item.quantity
          };
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.quantity !== this.state.quantity){
            this.playAnimation();
        }
    }
    
    /*
    componentDidUpdate(prevProps, prevState) {
        if (this.props.item !== prevProps.item) {
            console.log('hello?')
            this.playAnimation();
        }
    }
*/
    onMouseOverHandler = () => {
        this.setState({isTooltipVisible: true})
    }

    onMouseOutHandler = () => {
        this.setState({isTooltipVisible: false})
    }

    playAnimation = () => {
        const classList = [(this.baseClassList)]; 
        //console.log(classList)
        
        /*
        if(this.state.isPlayingAnim){
            //Reset the animation
            this.setState({ classList: this.baseClassList }, ()=> {
                classList.push("glow-anim");
            });
        */
        classList.push("glow-anim"); //Play the animation
           
        this.setState({classList: classList.join(' '), isPlayingAnim: true});  
    }

    onAnimationEndHandler = () => {
        this.setState({
            isPlayingAnim: false, 
            classList: "w-100 sb-item list-group-item d-flex justify-content-between align-items-center p-1"
        });
    }


    render() { 
        const { item, textProperty, onLeftSelect, onRightSelect, onShiftClick, listName } = this.props;
        
        return (  
            <li
                className = "sb-item-container d-flex align-items-center"
            >
                <div 
                    className = {this.state.classList}
                    onAnimationEnd = {this.onAnimationEndHandler}
                    onClick = {() => {
                        onLeftSelect(item, listName);
                    }}
                    onContextMenu = {(e) => {
                        onRightSelect(e, item, listName); //e is provided to prevent context menu from opening, listname is needed to know which list to add to
                    }}
                    onMouseOver = {this.onMouseOverHandler}
                    onMouseOut = {this.onMouseOutHandler}
                >
                    <span className = "badge badge-primary badge-pill mr-1">{item.quantity}</span>
                    <div className = "text-truncate">
                        {item[textProperty]}
                    </div>

                    <div className = "flex-grow-1 text-right">
                        <ManaIcons mana = {item.manaCost} />
                    </div>
                </div>

                <span className = "sb-item-arrow-container">
                    <button 
                        className = "sb-item-arrow" 
                        onClick = {(e) => onShiftClick(e, item, listName)}>
                    ▲
                    </button>

                    <button 
                        className = "sb-item-arrow" 
                        onClick = {(e) => onShiftClick(e, item, listName, false)}>
                    ▼
                    </button>
                </span>

                {this.state.isTooltipVisible ? 
                    <span
                        className = "sb-tooltip"
                        alt = "ERROR"
                    >
                        <div className = "sb-item-info">
                            <p>{item.name}, Cost: {item.cmc}</p>
                            <p>{item.type}</p>
                            <p>{item.rarity}</p>
                           
                            <p>{item.text}</p>
                            {(item.power && item.toughness) &&
                             <p>Power: {item.power} / Toughness: {item.toughness}</p>
                            }
                        </div>

                        <div className = "sb-item-info">
                            Left-Click to Add, Right-Click to Remove
                        </div>
                    </span> : <React.Fragment></React.Fragment>
                }
            </li>
        );
    }
}
 
export default SideBarItem;
