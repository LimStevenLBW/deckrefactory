import React from 'react';
import ManaIcons from './ManaIcons';
import './SideBarItem.scss';

const SideBarItem = ({ item, textProperty, onLeftSelect, onRightSelect }) => {
    return (
        <li
            className = "glow-anim list-group-item d-flex justify-content-between align-items-center p-1"
            onClick = {() => {
                onLeftSelect(item);
            }}
            onContextMenu = {(e) => {
                onRightSelect(e, item);
            }}
        >
            <span className = "badge badge-primary badge-pill mr-1">{item.quantity}</span>
            <div className = "text-truncate">
                {item[textProperty]}
            </div>

            <div className = "flex-grow-1 text-right">
                <ManaIcons mana = {item.manaCost} />
            </div>
        </li>
    );
}

export default SideBarItem;
