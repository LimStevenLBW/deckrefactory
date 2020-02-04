import React from 'react';

const FormSearchBar = ({ name, onChange, onSubmit }) => {
    return (  
        <form onSubmit = {(e) => onSubmit(e)}>
            <input
                type = "text"
                name = {name}
                className = "form-control my-3"
                placeholder = "Search for cards. . ."
                onChange = {(e) => onChange(e)}
            />
        </form>
    );
}
 
export default FormSearchBar;
