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
        const { item, textProperty, onLeftSelect, onRightSelect } = this.props;

        return (  
            <li
                className = "sb-item glow-anim list-group-item d-flex justify-content-between align-items-center p-1"
                onClick = {() => {
                    onLeftSelect(item);
                }}
                onContextMenu = {(e) => {
                    onRightSelect(e, item);
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

                {this.state.isTooltipVisible ? 
                    <span
                        className = "tooltip"
                        alt = "ERROR"
                    >
                        <div className = "sb-item-info">
                            <p>{item.name}</p>
                            <p>{item.type}</p>
                            <p>{item.rarity}</p>
                           
                            <p>{item.text}</p>
                            <p>Power: {item.power} / Toughness: {item.toughness}</p>
                        </div>
                    </span> : <React.Fragment></React.Fragment>
                }
            </li>
        );
    }
}
 
export default SideBarItem;
