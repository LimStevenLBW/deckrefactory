import React from 'react';
import './DeckSideBar.scss';

/**
 * Expanded on a reusable wrapper for the Bootstrap Listgroup, 
 * see https://github.com/LimStevenLBW/vidly/blob/master/src/components/common/ListGroup.jsx
 * The DeckSideBar lists the current state of the user's deck, its data is passed from Deckbuilder
 */

const DeckSideBar = ({items, textProperty, onLeftSelect, onRightSelect, selectedItem}) => {
    //Stacking Duplicate Cards

    if(items)
        return ( //Note: The index is used as the key property for now, this may introduce bugs
        <div className = "decksidebar border border-primary rounded">
            <ul className = "mh-100 list-group clickable">
                {items.map((item, index) => (
                    <li 
                        key = { index }
                        className = "list-group-item justify-content-between d-flex align-items-center"
                        onClick = {() => { 
                            onLeftSelect(item);
                        }}
                        onContextMenu = {(e) => {
                            onRightSelect(e, item);
                        }}
                    >
                        {item[textProperty]}
                        <span class = "badge badge-primary badge-pill">{item.quantity}</span>
                    </li>
                )) 
                }
            </ul >
        </div>
    );

    return <React.Fragment></React.Fragment>
}

export default DeckSideBar;
 