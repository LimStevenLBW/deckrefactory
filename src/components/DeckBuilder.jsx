import React, { Component } from 'react';
import GameHeader from './GameHeader';
import Searchbar from './common/SearchBar';
import CardBrowser from './CardBrowser';
import DeckSideBar from './DeckSideBar';
import { getCards } from '../services/falseApi';

class DeckBuilder extends Component {
    state = { 
        selectedGame: "",
        deckList: [],
        queriedCards: {},
    }

    componentDidMount() {
        const {cards: queriedCards} = getCards();

        this.setState({selectedGame: "mtg", queriedCards: queriedCards})
    }

    setDeckList = (deckList) => {

    }

    addNewCard = (newCard) => {
        const { deckList } = this.state;
        
        //Check if the card already exists
        const duplicate = this.checkForDuplicate(newCard)
        if(duplicate !== false){
            deckList[duplicate].quantity++;
        }
        else{
            newCard["quantity"] = 1;
            deckList.push(newCard);
        }
        
        this.setState({ deckList });
    }

    /**
     * Examine each card in the decklist and return the index of the duplicate if it exists
     * Currently only examines based on name
     */
    checkForDuplicate = (newCard) => {
        const { deckList } = this.state;
        for(let i = 0; i < deckList.length; i++){
            if(deckList[i].name === newCard.name) {
                return i;
            }
        }
        return false;
    }

    render() { 
        const { selectedGame, queriedCards, deckList } = this.state;

        return ( 
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-sm">
                        <GameHeader />
                    </div>

                    <div className = "col-sm">
                        <Searchbar />
                    </div>
                </div>
                
                <div className = "row">
                    <div className = "col-3"> 
                        <DeckSideBar 
                            items = {deckList} 
                            textProperty = "name"
                        />
                    </div>

                    <div className = "col-9">
                        <CardBrowser 
                            selectedGame = { selectedGame }
                            queriedCards = { queriedCards } 
                            addNewCard = { this.addNewCard }
                        />
                    </div>
                </div>
            </div>       
        );
    }
}
 
export default DeckBuilder;
