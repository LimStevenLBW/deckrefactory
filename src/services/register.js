import { backend } from '../config';
import http from './axios';

const endpoint = backend + '/users';

/**
 * Sends http post request to the backend with the body 
 */
export function register(body) {
    return http.post(endpoint, body);
}
