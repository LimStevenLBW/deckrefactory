import React, { Component } from 'react';
import CardRow from './common/CardRow';

class CardBrowser extends Component {
    constructor(props){
        super(props);

        this.state = {
            table: [],
        }
    }

    componentDidMount() {
        try{
            const tableString = sessionStorage.getItem("table");
            if(tableString) {
                const table = JSON.parse(tableString);
                this.setState({ table });
            }
        }
        catch(ex){}
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.generateTable();
        }
    }

    //Generate the table based on the selected game and available images
    generateTable = () => {
        const colPerRow = 4; //Controls how many columns are allowed
        const table = []; //Reset the list
        const { cardList } = this.props;
        const dataLength = 16; //Object.keys(cardList).length;

        //Iterate through data
        for(let i = 0; i < dataLength; i += colPerRow) {

            let items = [];
            //Iterate through columns of a row, each column is assigned a card until the row is filled
            for(let j = i; (j < (i + colPerRow)); j++) {
                let columnItem;

                if(j >= dataLength) { //No data/card available
                    columnItem = this.mapToViewData(null,`${i},${j}`); 
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
        
        sessionStorage.setItem("table", JSON.stringify(table));
        this.setState({ table });
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

    render() { 
        const { table } = this.state;

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
                </React.Fragment>
            );
        }

        return  (<div class="alert alert-warning" role="alert">
                    . . . Attempting to load table
                </div>);
           
    }
}
 
export default CardBrowser;
