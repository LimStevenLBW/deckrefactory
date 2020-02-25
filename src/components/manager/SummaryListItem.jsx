import React from 'react';

const SummaryListItem = (props) => {
    const {label, textValue} = props.data;
    return (
        <div>
            <li className ="summary-li-item">{label}: {textValue}</li>
        </div>
    );
}

export default SummaryListItem;
