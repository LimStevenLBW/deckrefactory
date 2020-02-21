import React from 'react';

const FormInput = ({ name, label, handler, value, type, error }) => {
    return (
        <div className = "form-group">
            <label htmlFor = {name}>
                {label}
            </label>

            <input
                name = {name}
                value = {value}
                onChange = {handler}
                type = {type}
                className = "form-control"
            />

            {error && <div className = "alert alert-danger pt-1 pb-1">{error}</div>}
        </div>  
    );
}

export default FormInput;
