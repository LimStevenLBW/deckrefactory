import React, { Component } from 'react';
import CardRow from './common/CardRow';
import Pagination from './common/Pagination';
import { pageChange } from '../services/mtgSearch';

class CardBrowser extends Component {
    constructor(props){
        super(props);

        this.state = {
            table: [],
            currentPageNum: 1,
            itemsCount: 16,
            pageSize: 16,
        }
    }

    componentDidMount() {
        const cardList = this.props.cardList;
        const headers = this.props.headersList;
        if(cardList.length) this.beginUpdate(cardList, headers);
    }

    /**
     * Ensures updating is repeatedly handled when a new prop card list is received
     */
    componentDidUpdate(prevProps) {
        const cardList = this.props.cardList;
        const headers = this.props.headersList;

        //When a new cardList is received, schedule a new update
        if (cardList !== prevProps.cardList || (this.state.table.length <= 0)) {
           this.beginUpdate(cardList, headers);
        }
    }

    beginUpdate = (cardList, headers) => {
        let table; 
        let currentPageNum;
        let itemsCount;

        //Default case: if a list is passed from props, we use it to generate the table
        //The default list won't be passed if session storage contains values
        if(Object.keys(cardList).length) { 
            currentPageNum = parseInt(sessionStorage.getItem("page"));
            itemsCount = parseInt(sessionStorage.getItem('count'));
            if(!currentPageNum) currentPageNum = this.state.currentPageNum;
            if(!itemsCount)itemsCount = this.state.itemsCount;
            
            table = this.generateTable(cardList);
        }
        else {
            //Check if table data is in cache, if so, load it
            try{ 
                //Get table and pagination data from storage if it exists
                currentPageNum = parseInt(sessionStorage.getItem("page"));
                itemsCount = parseInt(sessionStorage.getItem('count'));
                const tableString = sessionStorage.getItem(`table#${currentPageNum}`)
                const cardList = JSON.parse(tableString);

                table = this.generateTable(cardList);   
            }
            catch(ex){
                console.error(ex);
            }
        }
        
        //If the card list was retrieved from a query, new headers will set the pagination instead
        if(Object.keys(headers).length) itemsCount = this.setPagination(this.props.headersList);

        //Finally, update the gallery
        this.setState({ table, currentPageNum, itemsCount },  
            () => this.savePageData(this.props.cardList)); //Save into session data after rendering
    }

   /**
    * Generates a renderable table object from a json list of cards, returns the table
    */
    generateTable = (cardList) => {
        const colPerRow = 4; //Controls how many columns are allowed
        const table = []; //Reset the list
        const dataLength = 16; //Object.keys(cardList).length;

        //Iterate through data
        for(let i = 0; i < dataLength; i += colPerRow) {

            let items = [];
            //Iterate through columns of a row, each column is assigned a card until the row is filled
            for(let j = i; (j < (i + colPerRow)); j++) {
                let columnItem;

                if(j >= dataLength) { //No data/card available
                    columnItem = this.mapToViewData(null,`${i},${j}empty`); 
                }
                else{ //Acquire data and map to card model
                    const data = this.getCard(cardList, j);
                    columnItem = this.mapToViewData(data,`${i},${j}` || data.id); 
                }
                
               items.push(columnItem); //Add the renderable column to the row's items
            }
            
            //Returns an object representing a row
            const newRow = {
                items: items,
            }
            
            table.push(newRow); //Add each assembled row to the final table
        }

        return table;
    }

    //Maps data into a viewable object
    mapToViewData(data, keyName){
        const { selectedGame, addNewCard } = this.props;

        //Set to magic
        if(selectedGame === 'mtg') 
            return (
                {
                    onMouseClickHandler: addNewCard,
                    data: data,
                    key: keyName
                }
            );
    }

    //Retrieves and returns a specific card object in the provided list of queried cards
    getCard(cardList, index){
        const cardInfo = cardList[index];
        return cardInfo;
    }

    //Request new data from deckbuilder
    onPageChange = (pageNumber) => {
        //Set the current page number
        sessionStorage.setItem('page', pageNumber);
        this.setState({ currentPageNum: pageNumber }, () => this.getPagedData(pageNumber)); 
    }

    getPagedData = async (pageNumber) => {
        try{
            //First try to see if the data was already stored before
            const tableString = sessionStorage.getItem(`table#${pageNumber}`); 
            if(tableString) {
                const cardList = JSON.parse(tableString);
                const table = this.generateTable(cardList);
                this.setState({ table });
            }
            else{ //Get the data from a request;
                const endpoint = `${this.props.endpoint}page=${pageNumber}`
                let res;
                res = await pageChange(endpoint);
                const { data, headers } = await res;
                this.props.updateQueriedCards(data.cards, headers, null);
            }
        }
        catch(ex){
            alert("ERROR")
            console.error(ex);
        }
    }

    savePageData = (cardList) => {
        const pageNumber = this.state.currentPageNum;
        const itemsCount = this.state.itemsCount;
        const endpoint = this.props.endpoint;
        sessionStorage.setItem(`table#${pageNumber}`, JSON.stringify(cardList)); //Cache the table
        sessionStorage.setItem(`page`, pageNumber); //Save the current page number 
        sessionStorage.setItem('count', itemsCount);
        if(endpoint) sessionStorage.setItem('baseQuery', endpoint);
    }

    setPagination = (headersList) => {
        //If the headers aren't empty, set the pagination
        if(Object.keys(headersList).length) { 
            const itemsCount = parseInt(headersList['total-count']);
            //const pageSize = parseInt(headersList['page-size']);
            
            return itemsCount;
        }
        else{ //Next, try getting it from session storage
            const itemsCount = parseInt(sessionStorage.getItem('count'));
            return itemsCount;
        }
    }

    render() { 
        const { table, currentPageNum, itemsCount, pageSize } = this.state;

        if(table.length > 0){
            return ( 
                <React.Fragment>
                    <div className = "row">
                        {table.map((row, key) => {
                            return(
                            <CardRow 
                                key = {key}
                                rowData = {row}
                            />);
                        })} 
                    </div>

                    <div className = "row">
                        <Pagination 
                            onPageChange = {this.onPageChange}
                            itemsCount = {itemsCount}
                            pageSize = {pageSize}
                            currentPageNum = {currentPageNum}
                        />
                    </div>
                </React.Fragment>
            );
        }

        return  (<div className = "alert alert-warning" role="alert">
                    . . . Attempting to load table
                </div>);
           
    }
}
 
export default CardBrowser;
