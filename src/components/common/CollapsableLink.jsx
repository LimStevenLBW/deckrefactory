import React from 'react';

const CollapsableLink = ({ textProperty, valueProperty, classModifier }) => {
    return (
        <a
            class = {"btn w-100 " + classModifier}
            data-toggle="collapse" href = "#mainCollapseTarget"
            role = "button" aria-expanded = "false" aria-controls = "collapseExample">
            {textProperty}: {valueProperty} Cards
        </a>
    );
}

export default CollapsableLink;
