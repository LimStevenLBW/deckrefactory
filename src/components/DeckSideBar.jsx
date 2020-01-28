import React from 'react';
import 'bootstrap/js/dist/collapse';
import './DeckSideBar.scss';

/**
 * Expanded on a reusable wrapper for the Bootstrap Listgroup, 
 * see https://github.com/LimStevenLBW/vidly/blob/master/src/components/common/ListGroup.jsx
 * The DeckSideBar lists the current state of the user's deck, its data is passed from Deckbuilder
 */

const DeckSideBar = ({items, textProperty, onLeftSelect, onRightSelect, selectedItem}) => {

    if(items)
        return ( //Note: The index is used as the key property for now, this may introduce bugs
        <div className = "mh-100 decksidebar border border-primary rounded">
            <a 
                class="btn btn-primary w-100" 
                data-toggle="collapse" href="#mainCollapseTarget" 
                role="button" aria-expanded="false" aria-controls="collapseExample">
                Main Deck: 0 Cards
            </a>

            <div class="collapse collapse-show" id="mainCollapseTarget">
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

        </div>
    );

    return <React.Fragment></React.Fragment>
}

export default DeckSideBar;
 