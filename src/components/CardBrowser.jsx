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
        const colPerRow = 4;
        const rows = []; //Reset the list
        const { queriedCards } = this.props;
        const dataLength = Object.keys(queriedCards).length + 10

        //Iterate through data
        for(let i = 0; i < dataLength; i += colPerRow) {

            let items = [];
            //Iterate through columns of a row
            for(let j = i; (j < (i + colPerRow)); j++) {
                let column;

                if(j >= dataLength) {
                    column = this.getCard(null,`${i},${j}`)
                }
                else{
                    const data = this.mapToViewData(queriedCards, i+j);
                    column = this.getCard(data,`${i},${j}`);
                }
                
                items.push(column);
            }
            
            const newRow = this.getNewRow(items);
            rows.push(newRow, i);
        }
        
        this.setState({rows});
    }

    getNewRow(items, key){
        return <CardRow key = {key} items = {items}/>
    }

    
    getCard(data, key){
        const { selectedGame } = this.props;
        //Set to magic
        if(selectedGame === 'mtg') return <MagicCard data = {data} key = {key} />
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
                <div className = "container">
                    {rows.map(element => {
                        return (element)
                    })}
                </div>
            );
        }
        
       return <React.Fragment>still null</React.Fragment>;
    }
}
 
export default CardBrowser;
