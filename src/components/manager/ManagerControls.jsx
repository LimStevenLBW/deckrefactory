import React from 'react';
import floppy from '../../images/floppy.svg';
import trash from '../../images/trash.svg';
import test from '../../images/test.svg';
import tune from '../../images/tune.svg';
import './ManagerControls.scss';

/**
 * 
 */
const ManagerControls = ({ history, onSave, onDelete }) => {
    return (  
        <React.Fragment>
            <div className = "col-3 text-center">
                <button
                    className = "manager-btn"
                    onClick = {onDelete}>
                    <img className = "manager-btn-img" src = {trash} alt = ""></img>
                    <label>Delete</label>
                </button>
            </div>
            
            <div className = "col-3 text-center">
                <button
                    className = "manager-btn"
                    onClick = {onSave}>
                    <img className = "manager-btn-img" src = {floppy} alt = ""></img>
                    <label>Save</label>
                </button>
            </div>

            <div className = "col-3 text-center">
                <button
                    className = "manager-btn"
                    onClick = {() => history.push('builder')}
                >
                    <img className = "manager-btn-img" src = {tune} alt = ""></img>
                <label>Modify</label>
                </button>
            </div>

            <div className = "col-3 text-center">
                <button
                    className = "manager-btn"
                    onClick = {() => history.push('test')}
                >
                    <img className = "manager-btn-img" src = {test} alt = ""></img>
                <label>Test</label>
                </button>
            </div>
        </React.Fragment>
    );
}
 
export default ManagerControls;
