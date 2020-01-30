import React from 'react';
import ManaIcons from './ManaIcons';

const SideBarItem = ({ item, key, textProperty, onLeftSelect, onRightSelect }) => {
    return (
        <li
            key={key}
            className = "list-group-item d-flex justify-content-between align-items-center p-1"
            onClick = {() => {
                onLeftSelect(item);
            }}
            onContextMenu = {(e) => {
                onRightSelect(e, item);
            }}
        >
            <div className = "text-truncate">
                {item[textProperty]}
            </div>

            <div className = "flex-grow-1 text-right">
                <ManaIcons mana = {item.manaCost} />
            </div>

            <span class = "badge badge-primary badge-pill">{item.quantity}</span>
    
        </li>
    );
}

export default SideBarItem;
