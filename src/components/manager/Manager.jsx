import React, { Component } from 'react';

import SummaryCard from './SummaryCard';
import NameEdit from './NameEdit';
import ManagerControls from './ManagerControls';

import HeaderText from './DeckGrid/HeaderText';
import DeckGridSelector from './DeckGrid/DeckGridSelector';

import newDeckObj from '../../models/deck';
import { getDate } from '../../utils/date';

import dataApi from '../../services/dataApi';
//import auth from '../../services/auth';
import './Manager.scss'

/**
 * Two column layout page, highlights a selected deck with a summary
 * while also displaying a small gallery to view additional decks.
 */
class Manager extends Component {
    state = {
        deck: newDeckObj(),
    }

    componentDidMount() {
        //Load a saved deck from local storage
        const data = localStorage.getItem('deck');
        const deck = JSON.parse(data);
        //const user = auth.getCurrentUser();

        if (deck) this.setState({ deck });
    }

    onNameChange = (e) => {
        e.preventDefault();
        const name = e.currentTarget.value;
        const deck = this.state.deck;
        deck.info.name = name;
        this.setState({ deck });
    }

    onFormatChange = (e) => {
        e.preventDefault();
        const deck = this.state.deck;
        deck.info.format = e.currentTarget.value;
        this.setState({ deck })
    }

    onPlayStyleChange = (e) => {
        e.preventDefault();
        const deck = this.state.deck;
        deck.info.playstyle = e.currentTarget.value;
        this.setState({ deck })
    }

    onSaveHandler = () => {
        //if offline, save to local storage
        const deck = this.state.deck;
        const user = this.props.user;
        deck.info.lastUpdated = getDate();
        dataApi.save(deck, user);

        //if online, call api to add a new deck to user
        //if deck name already exists, overwrite, if deck has no name, set the name as untitled deck on backend,
    }

    onDeleteHandler = () => {
        const deck = this.state.deck;
        const user = this.props.user;
        //if offline, just clear local storage
        //if online, call api to delete the current deck from user
        dataApi.delete(deck, user);
    }

    onDeckSelectedHandler = (deck) => {
        //if deck exists, set the state
        //if deck doesnt exist, call new deck function, should just call clear current deck
        console.log(deck)
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <div className="row no-gutters manager">
                    <div className="col-6 white-overlay">
                        <div className="row justify-content-center mt-3 mb-1 pl-5 pr-5">
                            <ManagerControls
                                history={this.props.history}
                                onSave={this.onSaveHandler}
                                onDelete={this.onDeleteHandler}
                            />
                        </div>

                        <div className="row justify-content-center m-0">
                            <NameEdit name={this.state.deck.info.name}
                                onNameChange={this.onNameChange} />
                        </div>

                        <div className="row ml-0 mr-0 mb-5">
                            <SummaryCard
                                deckInfo={this.state.deck.info}
                                onFormatChange={this.onFormatChange}
                                onPlayStyleChange={this.onPlayStyleChange}
                            />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row manager-heading m-0 p-4">
                            <HeaderText
                                user={this.state.user}
                            />
                        </div>

                        <div className="row ml-0 mr-0 mt-5 mb-2">
                            <DeckGridSelector
                                user={this.state.user}
                                onDeckSelected={this.onDeckSelectedHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Manager;
