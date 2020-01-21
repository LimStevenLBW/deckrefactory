import React from 'react';
import Filters from './Filters';

const GameHeader = () => {
    return (  
        <React.Fragment>
            <div class="container-fluid">
                <Filters />
                <DeckStats />
            </div>
        </React.Fragment>
    );
}
 
export default GameHeader;