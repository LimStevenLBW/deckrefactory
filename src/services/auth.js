import { backend } from '../config.js';
import http from './axios';
import jwtDecode from 'jwt-decode';

const endpoint = backend + '/auth';
const tokenField = "tok";

/**
 * Sends http post request to the backend for login request and stores the token
 */
export function login(body) {
    return http.post(endpoint, body);
}

/**
 * Stores a token in local storage 
 */
export function storeTok(token) {
    localStorage.setItem(tokenField, token);
}

/**
 * Removes a token in local storage
 */
export function removeTok() {
    localStorage.removeItem(tokenField);
}

/**
 * Deciphers a stored token value and returns the user object or undefined
 */
export function getCurrentUser() {
    try{
        const jwt = localStorage.getItem(tokenField);
        const user = jwtDecode(jwt);
        return user;
    }
    catch(ex){ return undefined }
}

/**
 * Get auth token from local storage
 */
export function getCurrentTok() {
    try{
        const jwt = localStorage.getItem(tokenField);
        return jwt;
    }
    catch(ex){ return undefined }
}

export default {
    login,
    storeTok,
    removeTok,
    getCurrentUser,
    getCurrentTok,
}
