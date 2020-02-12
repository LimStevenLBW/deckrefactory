import axios from 'axios';
import status from './statusCodes';

//Example Consumption https://api.magicthegathering.io/v1/cards?colors=red,blue&cmc=3&pageSize=1&page=1

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
            console.log("Logging an unknown error" + error);
            alert("An Unexpected Error Occurred");
        }

        return Promise.reject(error);
});

/**
 * Completes a get request to magic.io using provided query data
 */
function buildEndpoint({ format, type, cmc , query, colors }, pageSize, page ) {
    let url = "https://api.magicthegathering.io/v1/cards?";

    if(query) url = `${url}name=${query}&`;
    if(format) url = `${url}format=${format}&`;
    if(type) url = `${url}type=${type}&`;
    if(cmc) url = `${url}cmc=${cmc}&`;

    if(colors.length > 0) { //If colors list is empty, it's considered the same as if all were checked
        console.log(colors)
        let colorQuery = "colors=";
        colors.forEach(c => {
            colorQuery = `${colorQuery}${c},`
        })
        colorQuery = colorQuery.substring(0, colorQuery.length - 1); //Remove the last character
        url = `${url}${colorQuery}&`;
    }

    url = `${url}pageSize=${pageSize}&`;
    url = `${url}page=${page}`;
    //if(url[url.length-1] === '&') url = url.substring(0, url.length - 1);
    
    return url;
}

export default {
    buildEndpoint,
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
