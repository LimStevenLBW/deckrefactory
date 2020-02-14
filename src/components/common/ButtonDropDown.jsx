import React from 'react';
import 'bootstrap/js/dist/dropdown';

const ButtonDropDown = ({ buttonlabel, labels, onClickHandler}) => {
    return (  
        <div class="btn-group">
            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {buttonlabel}
            </button>
            <div class="dropdown-menu">
                {labels.map((option, key) => {
                    return(
                        <a 
                            className = "dropdown-item" key = {key} 
                            onClick = {() => onClickHandler(option)}>{option}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
 
export default ButtonDropDown;

