import React from 'react';
import './FormCheckbox.scss';

const FormCheckbox = ({ textValue, formID, isChecked, handleChecked}) => {
    return (  
        <label htmlFor = {formID} className = "custom-form-checkbox">
            <input 
                className = ""
                type = "checkbox" 
                id = {formID}
                onChange = {handleChecked}
                checked = {isChecked}
            />

          {textValue}

        <span className = "custom-checkmark"></span>
        </label>
    );
}
 
export default FormCheckbox;
