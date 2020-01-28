import React, { Component } from 'react';
import CardRow from './common/CardRow';
import MagicCard from './MagicCard';

class CardBrowser extends Component {
    constructor(props){
        super(props);

        this.state = {
            rows: [],
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
        const colPerRow = 5; //Controls how many columns are allowed
        const rows = []; //Reset the list
        const { queriedCards } = this.props;
        const dataLength = Object.keys(queriedCards).length + 12

        //Iterate through data
        for(let i = 0; i < dataLength; i += colPerRow) {

            let items = [];
            //Iterate through columns of a row
            for(let j = i; (j < (i + colPerRow)); j++) { //Calculates when to add a card to a different row
                let column;

                if(j >= dataLength) {
                    column = this.getCard(null,`${i},${j}`); //No card available
                }
                else{
                    const data = this.mapToViewData(queriedCards, i+j);
                    column = this.getCard(data,`${i},${j}`); //Card available
                }
                
               items.push(column); //Add the generated card to the column
            }
            
            const newRow = this.getNewRow(items);
            rows.push(newRow); //Add each assembled-row to the list of rows
        }
        
        this.setState({rows});
    }

    getNewRow(items, key){
        return(
            <CardRow
                key = {key} 
                items = {items}
            />);
    }
    
    getCard(data, key){
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

    //Maps the data from the list of retrieved cards into a more specific, understandable object
    mapToViewData(queriedCards, index){
        const cardInfo = queriedCards[0];
        return cardInfo;
    }

    render() { 
        const { rows } = this.state;

        if(rows){
            return ( 
                <React.Fragment>
                    {rows.map(element => {
                        return (element)
                    })} 
                </React.Fragment>
            );
        }
        
       return <React.Fragment>still null</React.Fragment>;
    }
}
 
export default CardBrowser;
