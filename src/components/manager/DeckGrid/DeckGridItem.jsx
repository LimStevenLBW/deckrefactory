import React from 'react';
import icon from '../../../images/mana/C.svg';
import newIc from '../../../images/new.svg';
import getProp from '../../../utils/getProp';
import './DeckGridItem.scss';

const DeckGridItem = ({ item, onDeckSelected }) => {
    let line1, line2, line3, src;

    if(item.data){
        line1 = (getProp(['data', 'info', 'name'], item));
        line2 = (getProp(['data', 'info', 'format'], item));
        line3 = (getProp(['data', 'info', 'colorIdentity'], item));
        src = icon;
    }
    else{
        line1 = "Empty Deck";
        line2 = "select to";
        line3 = "create";
        src = newIc;
    }
        
    return (  
        <div className = "col-4 d-flex justify-content-center">
            <button 
                className = "grid-item p-2"
                onClick = {() => onDeckSelected(item)}>
                <img className = "grid-item-img" src = {src} alt = ""></img>
                <div className = "grid-item-text">{line1}</div>
                <div className = "grid-item-text">{line2}</div>
                <div className = "grid-item-text">{line3}</div>
            </button>
        </div>
    );
}
 
export default DeckGridItem;
