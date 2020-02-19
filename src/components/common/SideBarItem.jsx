import React, { Component } from 'react';
import ManaIcons from './ManaIcons';
import './SideBarItem.scss';

class SideBarItem extends Component {
    state = {  
        isTooltipVisible: false,
    }

    onMouseOverHandler = () => {
        this.setState({isTooltipVisible: true})
    }

    onMouseOutHandler = () => {
        this.setState({isTooltipVisible: false})
    }

    render() { 
        const { item, textProperty, onLeftSelect, onRightSelect, onShiftClick, listName } = this.props;

        return (  
            <li
                className = "sb-item-container d-flex align-items-center"
            >
                <div 
                    className = "w-100 sb-item glow-anim list-group-item d-flex justify-content-between align-items-center p-1"
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
                        className = "tooltip"
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
