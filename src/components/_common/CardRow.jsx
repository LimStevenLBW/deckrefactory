import React from 'react';
import MagicCard from '../builder/MagicCard';

const CardRow = ({ rowData }) => {

    const items = rowData.items;
    return (
        <div className="row no-gutters mb-2">
            {items.map((card) => {
                return (
                    <MagicCard
                        key={card.key}
                        onMouseClickHandler={card.onMouseClickHandler}
                        data={card.data}
                    />
                )
            })}
        </div>
    );
}

export default CardRow;
