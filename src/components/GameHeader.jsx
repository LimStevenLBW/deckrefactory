import React from 'react';
import Filters from './Filters';
import DeckStats from './DeckStats';

const GameHeader = () => {
    return (  
        <React.Fragment>
            <div className = "container-fluid">
                <Filters />
                <DeckStats />
            </div>
        </React.Fragment>
    );
}
 
export default GameHeader;
