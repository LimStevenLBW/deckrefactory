import React from 'react';

const CardRow = ({ items }) => {

    return (  
        <div className = "row">
                {items.map(element => {
                    return element;
                })}
        </div>
    );
}
 
export default CardRow;
