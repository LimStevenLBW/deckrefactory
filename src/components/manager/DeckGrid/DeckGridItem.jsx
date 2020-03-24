import React from 'react';
import icon from '../../../images/mana/C.svg';
import newIc from '../../../images/new.svg';
import './DeckGridItem.scss';

const DeckGridItem = ({ item }) => {
    if(item.data){
        return (  
            <div className = "col-4 d-flex justify-content-center">
                <button className = "grid-item">
                    <img className = "grid-item-img" src = {icon} alt = ""></img>
                    <div className = "grid-item-text">{item.data.info.name}</div>
                    <div className = "grid-item-text">{item.data.info.format}</div>
                    <div className = "grid-item-text">{item.data.info.colorIdentity}</div>
                </button>
            </div>
        );
    }

    return (
    <div className = "col-4 d-flex justify-content-center">
            <button className = "grid-item">
                <img className = "grid-item-img" src = {newIc} alt = ""></img>
                <div className = "grid-item-text">New</div>
                <div className = "grid-item-text">Select</div>
                <div className = "grid-item-text">To Createwwwwwwwwwwwwwwww</div>
            </button>
        </div>
    );
}
 
export default DeckGridItem;
