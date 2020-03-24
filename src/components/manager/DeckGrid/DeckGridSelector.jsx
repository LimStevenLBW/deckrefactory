import React, { Component } from 'react';
import SelectableDeckRow from './DeckGridRow';
import './DeckGridSelector.scss';

/**
 * Receives the list of user decks as props and displays a grid of the selectable deck items
 */
class DeckGridSelector extends Component {
    state = { 
        table: [], 
    }

    componentDidMount() {
        const decks = this.props.decks;   
        const colPerRow = 3; //Controls how many columns are allowed
        const table = []; //Reset the list
        const dataLength = 9; //Object.keys(cardList).length;

        //Iterate through columns of a row, each column is assigned a card
        for(let i = 0; i < dataLength; i += colPerRow){
            const items = [];

            for(let j = i; (j < (i + colPerRow)); j++) {
                let columnItem;

                if(j >= dataLength) { //No data/card available, exceeded array
                    columnItem = null;
                }
                else{ //Acquire data and map column to object model
                    const data = decks[j];
                    columnItem = this.mapToViewData(data,`${i},${j}` || data.id); 
                }
                
               if(columnItem) items.push(columnItem); //Add the renderable column to the row's items
            } //End of row

            //Setup an object with the row columns as its data
            const newRow = {
                items: items,
            }
            
            table.push(newRow); //Add each assembled row to the final table
        }
        this.setState({ table })
    }

    /**
     * Map to data to an object that can be converted into a jsx component
     */
    mapToViewData = (data, keyName) => {
        return (
            {
                data: data,
                key: keyName
            }
        );
    }

    render() { 
        const { table } = this.state;
        return ( 
            <div className = "deck-grid p-4">
                {table.map((row, key) => {
                    return(
                    <SelectableDeckRow 
                        key = {key}
                        rowData = {row}
                    />);
                })} 
            </div>
        );
    }
}
 
export default DeckGridSelector;
