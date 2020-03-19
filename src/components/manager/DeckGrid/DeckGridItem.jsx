import React from 'react';
import icon from '../../../images/mana/C.svg';
import './DeckGridItem.scss';

const DeckGridItem = () => {
    return (  
        <div className = "col-sm">
            <button className = "grid-item">
                <img className = "grid-item-img" src = {icon} alt = ""></img>
                <h5>Name</h5>
                <label>Format</label><br></br>
                <label>Color</label>
            </button>
        </div>
    );
}
 
export default DeckGridItem;
