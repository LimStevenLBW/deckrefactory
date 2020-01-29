import React, { Component } from 'react';
import Filters from './Filters';
import Searchbar from './common/SearchBar';
import DeckStats from './DeckStats';
import CardBrowser from './CardBrowser';
import DeckSideBar from './DeckSideBar';
import Footer from './Footer';
import { getCards } from '../services/falseApi';

import './DeckBuilder.scss';

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

    removeCard = (event, selectedCard) => {
        event.preventDefault();
        const { deckList } = this.state;

        //Check if more than one copy exists, if so, just decrement the counter
        const duplicate = this.checkForDuplicate(selectedCard);
        if(duplicate !== false){
            const duplicateAmount = deckList[duplicate].quantity;

            if(duplicateAmount > 1) deckList[duplicate].quantity--;
            else if(duplicateAmount === 1) deckList.splice(deckList.indexOf(selectedCard), 1);
            else console.log("an error has occurred with removeCard")
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
            <React.Fragment>
                <div className = "container-fluid">
                    <header className = "row game-header mb-3">
                        <div className="col-sm">
                            <Filters />
                            <DeckStats />
                        </div>

                        <div className="col-sm">
                            <Searchbar />
                        </div>
                    </header>
                </div>

            <div className = "container pl-0 pr-0">
                <div className = "row">
                    <div className = "col-4"> 
                        <DeckSideBar 
                            items = {deckList} 
                            textProperty = "name"
                            onLeftSelect = { this.addNewCard }
                            onRightSelect = { this.removeCard }
                        />
                    </div>

                    <div className = "col-8">
                        <CardBrowser 
                            selectedGame = { selectedGame }
                            queriedCards = { queriedCards } 
                            addNewCard = { this.addNewCard }
                        />
                    </div>
                </div>
            </div>

            <div className = "container-fluid">
              <Footer />
            </div>

         </React.Fragment>     
        );
    }
}
 
export default DeckBuilder;
