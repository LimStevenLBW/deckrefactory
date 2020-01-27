import React from 'react';

const CardRow = ({ items }) => {

    return (  
        <div className = "row mb-2">
                {items.map(element => {
                    return element;
                })}
        </div>
    );
}
 
export default CardRow;
