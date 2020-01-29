import React from 'react';

const SideBarItem = ( {item, key, textProperty, onLeftSelect, onRightSelect} ) => {
    return (
        <li
            key = {key}
            className="list-group-item justify-content-between d-flex align-items-center pt-1 pb-1"
            onClick={() => {
                onLeftSelect(item);
            }}
            onContextMenu={(e) => {
                onRightSelect(e, item);
            }}
        >
            {item[textProperty]}
            <span class="badge badge-primary badge-pill">{item.quantity}</span>
        </li>
    );
}

export default SideBarItem;