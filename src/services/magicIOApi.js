import axios from 'axios';
import status from './statusCodes';

export const endpoint = "https://api.magicthegathering.io/v1/";
//Example Consumption https://api.magicthegathering.io/v1/cards?colors=red,blue&cmc=3&pageSize=1&page=1

//Handling global errors
axios.interceptors.response.use(null, error => {
    const expectedError = 
        error.response &&
        (error.response.status >= 400 && error.response.status < 500) // codes 400->500 for now

        if(!expectedError) {
            console.log("Logging an unknown error" + error);
            alert("An Unexpected Error Occurred");
        }
});

/**
 * Completes a get request to magic.io using provided query data
 */
function buildEndpoint({ format, type, cmc , query, colors }, pageSize, page ) {
    let endpoint = this.endpoint;
    console.log("base endpoint:" + endpoint)
 //   endpoint = ``
}

export default {
    buildEndpoint,
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
