import React from 'react';
import './FormSelect.scss'

const FormSelect = ({ name, label, handler, value, options, error }) => {
    //            {error && <div className = "alert alert-danger">{error}</div>}
    return ( 
        <div className = "form-group">
            <select 
                name = {name}
                value = {value}
                label = {label}
                onChange = {(e) => handler(e)}
                className = "form-control">
 
                <option 
                    value = "">
                    {label}
                </option>
                
                {options.map(option => (
                    <option key = {option} value = {option}>
                        {option}
                    </option>
                ))}

            </select>

        </div>
    );
}
 
export default FormSelect;
