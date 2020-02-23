import { backend } from '../config.js';
import http from './axios';
import jwtDecode from 'jwt-decode';

const endpoint = backend + '/auth';
const tokenField = "tok";
const prevEmail = "prevEmail";
const checked = "checked";

/**
 * Sends http post request to the backend for login request
 */
export function login(body) {
    return http.post(endpoint, body);
}

/**
 * Stores a token in local storage temporarily
 */
export function storeTok(token) {
    localStorage.setItem(tokenField, token);
}

/**
 * Store an email in local storage
 */
export function storeEmail(email) {
    localStorage.setItem(prevEmail, email)
}

export function storeChecked() {
    localStorage.setItem(checked, true);
}

/**
 * Removes a token in local storage
 */
export function removeTok() {
    localStorage.removeItem(tokenField);
}

/**
 * Remove an email in local storage
 */
export function removeEmail() {
    localStorage.removeItem(prevEmail);
}

export function removeChecked() {
    localStorage.removeItem(checked);
}

/**
 * Can be used to check if a valid user is logged in
 * Deciphers a stored token value and returns the user object or undefined
 */
export function getCurrentUser() {
    try{
        const jwt = localStorage.getItem(tokenField);
        const user = jwtDecode(jwt);
        return user;
    }
    catch(ex) {}//Do nothing 
    return null
}

/**
 * If the option to remember an email during a successful login was made, an email
 * should have been stored, so return it
 */
export function getPrevEmail() {
    try{
        const email = localStorage.getItem(prevEmail);
        if(email) return email;
    }
    catch(ex) { console.error(ex) }
    return null
}

export function getChecked() {
    try{
        const checkedStatus = localStorage.getItem(checked);
        if(checkedStatus) return checkedStatus;
    }
    catch(ex) { console.error(ex) }
    return null
}

/**
 * Get auth token from local storage
 */
export function getCurrentTok() {
    try{
        const jwt = localStorage.getItem(tokenField);
        return jwt;
    }
    catch(ex) { console.error(ex) }
    return null
}

export default {
    login,
    storeTok,
    storeEmail,
    storeChecked,
    getCurrentUser,
    getCurrentTok,
    getPrevEmail,
    getChecked,
    removeTok,
    removeEmail,
    removeChecked,
}
