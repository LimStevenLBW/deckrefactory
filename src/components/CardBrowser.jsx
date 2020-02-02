import React, { Component } from 'react';
import CardRow from './common/CardRow';
import MagicCard from './MagicCard';

class CardBrowser extends Component {
    constructor(props){
        super(props);

        this.state = {
            table: [],
        }
    }

    componentDidMount() {
    
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.generateTable()
        }
    }

    //Generate the table based on the selected game and available images
    generateTable = () => {
        const colPerRow = 4; //Controls how many columns are allowed
        const table = []; //Reset the list
        const { queriedCards } = this.props;
        const dataLength = Object.keys(queriedCards).length;

        //Iterate through data
        for(let i = 0; i < dataLength; i += colPerRow) {

            let items = [];
            //Iterate through columns of a row, each column is assigned a card until the row is filled
            for(let j = i; (j < (i + colPerRow)); j++) {
                let column;

                if(j >= dataLength) { //No data/card available
                    column = this.mapToViewData(null,`${i},${j}`); 
                }
                else{ //Acquire data and map to card model
                    const data = this.getCard(queriedCards, j);
                    column = this.mapToViewData(data,`${i},${j}`); 
                }
                
               items.push(column); //Add the renderable column to the row's items
            }
            
            const newRow = this.getNewRow(items);
            table.push(newRow); //Add each assembled row to the final table
        }
        
        this.setState({table});
    }

    getNewRow(items, key){
        return(
            <CardRow
                key = {key} 
                items = {items}
            />);
    }
    
    //Maps data into a viewable object
    mapToViewData(data, key){
        const { selectedGame, addNewCard } = this.props;
        //Set to magic
        if(selectedGame === 'mtg') 
            return (
                <MagicCard 
                    onMouseClickHandler = {addNewCard}
                    data = {data} 
                    key = {key} 
                />
            );
    }

    //Retrieves data from a specific card in the list of queried cards
    getCard(queriedCards, index){
        const cardInfo = queriedCards[index];
        return cardInfo;
    }

    render() { 
        const { table } = this.state;

        if(table){
            return ( 
                <React.Fragment>
                    <div className = "row">
                        {table.map(element => {
                            return (element)
                        })} 
                    </div>

                </React.Fragment>
            );
        }
        
       return <React.Fragment>still null</React.Fragment>;
    }
}
 
export default CardBrowser;
