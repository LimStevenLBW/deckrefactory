import status from './statusCodes';
import http from './axios';
import { mtgIO } from '../config.js';

//Example Consumption https://api.magicthegathering.io/v1/cards?colors=red,blue&cmc=3&pageSize=1&page=1

/**
 * Returns search response
 */
export function search(dataObj, pageSize, page){
    const endpoint = buildEndpoint(dataObj, pageSize, page);
    return http.get(endpoint);
}

/**
 * Helps completes a get request to magic.io using provided query data
 */
function buildEndpoint({ format, type, cmc , query, colors }, pageSize, page ) {
    let url = mtgIO;

    if(query) url = `${url}name=${query}&`;
    if(format) url = `${url}format=${format}&`;
    if(type) url = `${url}type=${type}&`;
    if(cmc) url = `${url}cmc=${cmc}&`;

    if(colors.length > 0) { //If colors list is empty, it's considered the same as if all were checked
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
