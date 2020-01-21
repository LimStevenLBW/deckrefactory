import React, { Component } from 'react';
import GameHeader from './GameHeader';
import Searchbar from './common/SearchBar';
import CardGallery from './CardGallery';
import DeckList from './DeckList';

class DeckBuilder extends Component {
    state = { 
        selectedGame: "",
    }

    componentDidMount() {
        this.setState({selectedGame: "mtg"})
    }

    render() { 
        const { selectedGame } = this.state;

        return ( 
            <React.Fragment>
                <GameHeader />
                <Searchbar />
                <CardGallery />
                <DeckList />
            </React.Fragment>
        );
    }
}
 
export default DeckBuilder;
