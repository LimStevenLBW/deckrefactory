import React from 'react';

//BootStrap ListGroup component
const DeckList = (props) => {
    //Decoupled to use any json list
    const { items, textProperty, valueProperty, onItemSelect, selectedItem } = props;

    if(items)
        return (
            < ul className="list-group clickable">
                {items.map(item => (
                    <li key={item[valueProperty]}
                        className={item === selectedItem ? "list-group-item active" : "list-group-item"}
                        onClick={() => onItemSelect(item)} >
                        {item[textProperty]}
                    </li>
                ))
                }
            </ul >
    );
    return <React.Fragment></React.Fragment>
}

export default DeckList;
 