import React, { Component } from 'react';
import GameHeader from './GameHeader';
import Searchbar from './common/SearchBar';
import CardBrowser from './CardBrowser';
import DeckList from './DeckList';
import { getCards } from '../services/falseApi'

class DeckBuilder extends Component {
    state = { 
        selectedGame: "",
        queriedCards: {},
    }

    componentDidMount() {
        const {cards: queriedCards} = getCards();

        this.setState({selectedGame: "mtg", queriedCards: queriedCards})
    }

    render() { 
        const { selectedGame, queriedCards } = this.state;

        return ( 
            <React.Fragment>
                <GameHeader />
                <Searchbar />

                <CardBrowser 
                    selectedGame = { selectedGame }
                    queriedCards = { queriedCards } 
                />

                <DeckList />
            </React.Fragment>
        );
    }
}
 
export default DeckBuilder;
