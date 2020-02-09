import React from 'react';

const Tabs = (props) => {
    const { views, onViewSelect, selectedView } = props;

    return (
        <div className = "row">           
            <div className = "col-6"> 
                <button 
                    type = "button" 
                    className = "btn btn-primary w-100"
                    onClick = {() => onViewSelect("analysis")}>View Deck Analysis
                </button>
            </div>    

            <div className = "col-6"> 
                <button 
                    type = "button" 
                    className = "btn btn-primary w-100"
                    onClick = {() => onViewSelect("cards")}>Explore New Cards
                </button>
            </div>      
        </div>
    );
}

export default Tabs;
