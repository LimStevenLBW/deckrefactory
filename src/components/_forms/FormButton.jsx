import React from 'react';

const FormButton = ({ classList, checkValidity, label, onSubmit }) => {
    return (  
        <button
            onSubmit = {onSubmit}
            className = {classList}
            disabled = {checkValidity()}
            aria-disabled = "true"
        >
          {label}
        </button>
    );
}
 
export default FormButton;
