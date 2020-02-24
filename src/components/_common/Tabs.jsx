import React from 'react';

const Tabs = (props) => {
    const { onViewSelect, selectedView } = props;
    return (
        <div className = "row text-center">           
            <div className = "col-6"> 
                <button 
                    disabled = {selectedView === "analysis"}
                    type = "button" 
                    className = "btn btn-primary w-100"
                    onClick = {() => onViewSelect("analysis")}>View Deck Analysis
                </button>
            </div>    

            <div className = "col-6"> 
                <button 
                    disabled = {selectedView === "cards"}
                    type = "button" 
                    className = "btn btn-primary w-100"
                    onClick = {() => onViewSelect("cards")}>View Card Explorer
                </button>
            </div>      
        </div>
    );
}

export default Tabs;
