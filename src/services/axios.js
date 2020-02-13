import axios from 'axios';

/**
 * Global Response Intercepter, behaves as a checkpoint for api calls
 * Params, General Response handler is null, error handler is set
 */
axios.interceptors.response.use(null, error => {
    const expectedError = 
        error.response &&
        (error.response.status >= 400 && error.response.status < 500) // codes 400->500 for now

        //An unexpected and unhandled error occurred
        if(!expectedError) {
            console.error("Logging an unknown error: " + error);
            alert("An Unexpected Error Occurred");
        }

        return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
