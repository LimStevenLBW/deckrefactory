import React from 'react';

const CollapsableLink = ({ textProperty, valueProperty, classModifier, target }) => {
    return (
        <a
            className = {"btn w-100 " + classModifier}
            data-toggle="collapse" href = {`#${target}`}
            role = "button" aria-expanded = "false" aria-controls = "collapseExample">
            {textProperty}: {valueProperty} Cards
        </a>
    );
}

export default CollapsableLink;
