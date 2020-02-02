import React from 'react';

const SortContainer = ({ onSortAZ, onSortMana }) => {
    return (  
        <div className = "row text-center">
            <div className = "col-6"> 
                <button 
                    type = "button" 
                    class = "btn btn-primary w-75"
                    onClick = {onSortAZ}>
                        Sort A-Z
                </button>
            </div>    

            <div className = "col-6"> 
                <button 
                    type = "button" 
                    class = "btn btn-primary w-75"
                    onClick = {onSortMana}>
                        Sort Mana
                </button>
            </div>      
        </div>
    );
}
 
export default SortContainer;