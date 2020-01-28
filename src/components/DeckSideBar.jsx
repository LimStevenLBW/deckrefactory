import React from 'react';
import 'bootstrap/js/dist/collapse';
import CollapsableLink from './common/CollapsableLink';
import './DeckSideBar.scss';

/**
 * Expanded on a reusable wrapper for the Bootstrap Listgroup, 
 * see https://github.com/LimStevenLBW/vidly/blob/master/src/components/common/ListGroup.jsx
 * The DeckSideBar lists the current state of the user's deck, its data is passed from Deckbuilder
 */

const main = "mainCollapseTarget";
const side = "sideCollapseTarget";
const maybe = "maybeCollapseTarget";

const DeckSideBar = ({items, textProperty, onLeftSelect, onRightSelect, selectedItem}) => {
    //Calculate Deck Count property
    let sum = 0;
    items.forEach(card => {
        sum += card.quantity;
    })

    if(items)
        return ( //Note: The index is used as the key property for now, this may introduce bugs
        <div className = "mh-100 decksidebar border border-primary rounded">

            <CollapsableLink 
                textProperty = "Main Deck" 
                valueProperty = {sum} 
                classModifier = "btn-primary"
                target = {main}/>

            <div class="collapse collapse-show" id = {main}>
                <ul className = "list-group clickable">    
                    {items.map((item, index) => (
                        <li 
                            key = { index }
                            className = "list-group-item justify-content-between d-flex align-items-center pt-1 pb-1"
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
            <CollapsableLink 
                textProperty = "Side Deck" 
                valueProperty = {0}
                classModifier = "btn-secondary"
                target = {side}
            />
            <CollapsableLink 
                textProperty = "Maybe Deck" 
                valueProperty = {0}
                classModifier = "btn-secondary"
                target = {maybe}
            />

        </div>
    );

    return <React.Fragment></React.Fragment>
}

export default DeckSideBar;
 