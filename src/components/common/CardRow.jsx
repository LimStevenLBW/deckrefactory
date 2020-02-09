import React from 'react';
import MagicCard from '../MagicCard';

const CardRow = ({ rowData }) => {

    const items = rowData.items;
    return (  
        <div className = "row mb-2">
                {items.map((card) => {
                    return (
                        <MagicCard 
                            key = {card.key} 
                            onMouseClickHandler = {card.onMouseClickHandler}
                            data = {card.data}         
                        />
                    )
                })}
        </div>
    );
}
 
export default CardRow;
