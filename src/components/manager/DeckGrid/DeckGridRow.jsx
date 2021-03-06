import React from 'react';
import DeckGridItem from './DeckGridItem';

const DeckGridRow = ({ rowData, onDeckSelected }) => {
    const items = rowData.items;

    return (  
        <div className = "row mb-4 mt-4">
                {items.map((item, index) => {
                    return (
                        <DeckGridItem 
                            key = {index}
                            item = {item}
                            onDeckSelected = {onDeckSelected}
                        />
                    )
                })}
        </div>
    );
}
 
export default DeckGridRow;
