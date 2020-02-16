import React from 'react';
import 'bootstrap/js/dist/collapse';
import SideBarItem from './common/SideBarItem';
import CollapsableLink from './common/CollapsableLink';
import './DeckSideBar.scss';

/**
 * Expanded on a reusable wrapper for the Bootstrap Listgroup, 
 * see https://github.com/LimStevenLBW/vidly/blob/master/src/components/common/ListGroup.jsx
 * The DeckSideBar lists the current state of the user's deck, its data is passed from Deckbuilder
 */

const main = "mainCollapseTarget";
const side = "sideCollapseTarget";
const misc = "miscCollapseTarget";

const DeckSideBar = ({ items, textProperty, onLeftSelect, onRightSelect, selectedItem, upShiftClick, downShiftClick }) => {
    //Calculate Deck Count property
    let sum = 0;
    if(items) {
        items.forEach(card => {
        sum += card.quantity;
    })}

    return ( 
    //Note: The index is used as the key property for now, this may introduce bugs
    <div className = "mh-100 decksidebar border border-primary rounded">

        <CollapsableLink 
            textProperty = "Main Deck" 
            valueProperty = {sum} 
            classModifier = "btn-primary"
            target = {main}
        />

        <div className = "collapse collapse-show show" id = {main}>
            <ul className = "list-group clickable">    
                {items.map((item, index) => (
                    <SideBarItem 
                        item = { item }
                        key = { index }
                        textProperty = { textProperty }
                        onLeftSelect = { onLeftSelect }
                        onRightSelect = { onRightSelect }
                        upShiftClick = { upShiftClick }
                        downShiftClick = { downShiftClick }
                    />
                ))}
            </ul >
        </div>

        <CollapsableLink 
            textProperty = "Sideboard" 
            valueProperty = {0}
            classModifier = "btn-secondary"
            target = {side}
        />

        <div className = "collapse collapse-show" id = {side}>
            <ul className = "list-group clickable">    
                {items.map((item, index) => (
                    <SideBarItem 
                        item = { item }
                        key = { index }
                        textProperty = { textProperty }
                        onLeftSelect = { onLeftSelect }
                        onRightSelect = { onRightSelect }
                        upShiftClick = { upShiftClick }
                        downShiftClick = { downShiftClick }
                    />
                ))}
            </ul >
        </div>

        <CollapsableLink 
            textProperty = "Miscellaneous" 
            valueProperty = {0}
            classModifier = "btn-secondary"
            target = {misc}
        />

        <div className = "collapse collapse-show show" id = {misc}>
            <ul className = "list-group clickable">    
                {items.map((item, index) => (
                    <SideBarItem 
                        item = { item }
                        key = { index }
                        textProperty = { textProperty }
                        onLeftSelect = { onLeftSelect }
                        onRightSelect = { onRightSelect }
                        upShiftClick = { upShiftClick }
                        downShiftClick = { downShiftClick }
                    />
                ))}
            </ul >
        </div>
    </div>
    );
}

export default DeckSideBar;
 