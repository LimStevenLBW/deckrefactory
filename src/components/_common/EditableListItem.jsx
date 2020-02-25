import React from 'react';

const EditableListItem = (props) => {
    const {label, textValue, className} = props;
    return (  
        <li className = {className}>
            {label}:
            <input 
                type="text" 
                className = "form-control" 
                placeholder = {textValue}
                onSubmit = {() => console.log("Test Submit")}>
            </input>
        </li>
    );
}
 
export default EditableListItem;