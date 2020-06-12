import { backend } from '../config';
import http from './axios';

/**
 * Sends http post request to the backend with the body 
 */
export function register(body) {
    return http.post(backend + '/users', body);
}

export function changePassword(body) {
    return http.post(backend + '/change', body);
}
export default {
    register,
    changePassword,
}