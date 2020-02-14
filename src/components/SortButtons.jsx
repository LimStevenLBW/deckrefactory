import React from 'react';

/**
 * 
 */
const SortButtons = ({ onSaveDeck, onSortAZ, onSortMana }) => {
    return (  
        <div className = "row text-center">
            <div className = "col-4"> 
                <button 
                    type = "button" 
                    className = "btn btn-primary w-75"
                    onClick = {onSaveDeck}>
                        Save
                </button>
            </div>   

            <div className = "col-4"> 
                <button 
                    type = "button" 
                    className = "btn btn-primary w-75"
                    onClick = {onSortAZ}>
                        A-Z
                </button>
            </div>    

            <div className = "col-4"> 
                <button 
                    type = "button" 
                    className = "btn btn-primary w-75"
                    onClick = {onSortMana}>
                        Mana
                </button>
            </div>      
        </div>
    );
}
 
export default SortButtons;
