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
            <div className = "container">
                <div class="row">
                    <div class="col-sm">
                        <GameHeader />
                    </div>

                    <div class="col-sm">
                        <Searchbar />
                    </div>
                </div>

                <div class="row">
                    <div class="col-3"> 
                        <DeckList />
                    </div>

                    <div class="col-9">
                        <CardBrowser 
                            selectedGame = { selectedGame }
                            queriedCards = { queriedCards } 
                        />
                    </div>
                </div>
            </div>       
        );
    }
}
 
export default DeckBuilder;
