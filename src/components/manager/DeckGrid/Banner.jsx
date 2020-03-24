import React from 'react';

const Banner = ({ user }) => {

    if(!user){
        return (  
            <React.Fragment>
                <h3 style = {{'textAlign': 'center', 'width': '100%'}}>Sign in to save your decks online</h3>
            </React.Fragment>
        );        
    }
    
    return(
        <React.Fragment>
                <h3 style = {{'textAlign': 'center', 'width': '100%'}}>Select a deck below to manage</h3>
        </React.Fragment>
    )
}
 
export default Banner;
