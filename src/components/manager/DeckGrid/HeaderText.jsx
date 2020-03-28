import React from 'react';

/**
 * A banner for the deck grid selector
 * @param {*} param0 
 */
const HeaderText = ({ user }) => {
    const offlineText = "Sign in to save your decks online";
    const onlineText = "Select a deck below to manage";

    return (  
        <React.Fragment>
            <h3 style = {{'textAlign': 'center', 'width': '100%'}}>
                {user ? onlineText : offlineText}
            </h3>
        </React.Fragment>
    );        
    
}
 
export default HeaderText;
