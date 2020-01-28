import React from 'react';

const CollapsableLink = ({ textProperty, valueProperty }) => {
    return (
        <a
            class="btn btn-primary w-100"
            data-toggle="collapse" href="#mainCollapseTarget"
            role="button" aria-expanded="false" aria-controls="collapseExample">
            {textProperty}: {valueProperty} Cards
        </a>
    );
}

export default CollapsableLink;