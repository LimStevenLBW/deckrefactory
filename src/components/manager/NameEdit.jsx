import React from 'react';
import edit from '../../images/edit.svg'
import './NameEdit.scss';

const NameEdit = ({name, onNameChange}) => {
    return (  
        <div className = "name-edit-container">
            <input 
                type="text" 
                className = "form-control name-edit" 
                placeholder = {name && name !== "" ? name : "Unnamed Deck"}
                onChange = {(e) => onNameChange(e)}>
            </input>

            
        </div>
    );
}
 
export default NameEdit;
