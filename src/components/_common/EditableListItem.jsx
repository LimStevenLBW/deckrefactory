import React from 'react';

const EditableListItem = (props) => {
    const {label, textValue, className, handler} = props;
    return (  
        <li className = {className}>
            {label}:
            <input 
                type="text" 
                className = "form-control" 
                placeholder = {textValue}
                onChange = {(e) => handler(e)}>
            </input>
        </li>
    );
}
 
export default EditableListItem;