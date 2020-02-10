import React from 'react';

const FormButton = ({ classList, checkValidity, label }) => {
    return (  
        <button
            className = {classList}
            disabled = {checkValidity()}
            className = {"btn btn-primary"}
            aria-disabled = "true"
        >
          {label}
        </button>
    );
}
 
export default FormButton;
