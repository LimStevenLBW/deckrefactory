//import status from './statusCodes';
import http from './axios';
import { mtgIO } from '../config.js';
import { toast } from 'react-toastify';

//Example Consumption https://api.magicthegathering.io/v1/cards?colors=red,blue&cmc=3&pageSize=1&page=1

/**
 * Returns the first page of a search response
 */
export function search(endpoint){
    endpoint = `${endpoint}page=${1}`; //Get the first page
    
    //return http.get(endpoint);
    const toastId = toast.info("Searching for new cards... Please Wait", { hideProgressBar: true, autoClose: false });
    return http.request({
      method: "get", 
      url: endpoint,  
    }).then (data => {
      // Upload is done! 
      // The remaining progress bar will be filled up
      // The toast will be closed when the transition end
      toast.dismiss(toastId);
      return data;
    });
}

/**
 * 
 */
export function pageChange(endpoint) {
   const toastId = toast.info("Searching for new cards... Please Wait", { hideProgressBar: true, autoClose: false });
    return http.request({
      method: "get", 
      url: endpoint,  
    }).then (data => {
      toast.dismiss(toastId);
      return data;
    });
}

/**
 * Helps completes a get request to magic.io using provided query data
 */
export function buildEndpoint({ format, type, cmc , query, colors }, pageSize) {
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
    //if(url[url.length-1] === '&') url = url.substring(0, url.length - 1);
    
    return url;
}
