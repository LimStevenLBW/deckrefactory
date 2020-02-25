import React from 'react';
import DeckGridItem from './DeckGridItem';

const DeckGridRow = ({ rowData }) => {
    const items = rowData.items;

    return (  
        <div className = "row mb-2">
                {items.map((item, index) => {
                    return (
                        <DeckGridItem 
                            key = {index}
                        />
                    )
                })}
        </div>
    );
}
 
export default DeckGridRow;
