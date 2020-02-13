import { backend } from '../config.js';
import http from './axios';

const endpoint = backend + '/auth';

/**
 * Sends http post request to the backend for login request.
 */
export function login(body) {
    return http.post(endpoint, body);
}
