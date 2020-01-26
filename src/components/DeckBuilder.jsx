import React, { Component } from 'react';
import GameHeader from './GameHeader';
import Searchbar from './common/SearchBar';
import CardBrowser from './CardBrowser';
import DeckList from './DeckSideBar';
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
        deckList.push(newCard);
        this.setState({ deckList });
        console.log(this.state)
    }

    render() { 
        const { selectedGame, queriedCards } = this.state;

        return ( 
            <div className = "container">
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
                        <DeckList />
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
