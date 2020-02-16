import React, { Component } from 'react';
import * as compare from '../utils/compare';
import { toast } from 'react-toastify';

import SearchFormContainer from './SearchFormContainer';
import Tabs from './common/Tabs';
import CardBrowser from './CardBrowser';
import ChartBrowser from './ChartBrowser';
import DeckSideBar from './DeckSideBar';
import Footer from './Footer';
import { getCards } from '../services/falseApi';
import { getLands } from '../services/basicLands';
import './DeckBuilder.scss';
import SortButtons from './SortButtons';

class DeckBuilder extends Component {
    state = { 
        selectedGame: "",
        selectedView: "cards",
        deck: {
            info: {
                name: "",
                description: "",
                author: "",
                lastUpdated: "",
                cmc: 0,
                color: "",
            },
            list: {
                main: [],
                side: [],
                misc: [],
            }
        },

        queriedCards: {},
        displayCards: true,
    }

    componentDidMount() {
        const { cards: queriedCards } = getCards();
        this.setState({selectedGame: "mtg", queriedCards: queriedCards});

        /*
        try{ //Load a saved deck
            const data = localStorage.getItem('deck');
            const { deckName, deckList } = JSON.parse(data);
            this.setState({ deckName, deckList });
        }
        catch(ex){}
        */
    }

    /**
     * Updates the current card browser list
     */
    updateQueriedCards = (queriedCards) => {
        this.setState({selectedGame: "mtg", queriedCards: queriedCards})
    }

    /**
     * Updates the deck list
     */
    setDeckList = (deckList) => {
        this.setState({ deckList });
    }

    /**
     * Add a new card into a named section of the decklist, defaulting to main
     * Deck state is updated to trigger a re-render
     */
    addNewCard = (newCard, listName = 'main') => {
        const deck = this.state.deck;
        const workingList = deck.list[listName];
        
        //Check if the card already exists
        const duplicate = this.checkForDuplicate(newCard, workingList)
        if(duplicate !== false){
            workingList[duplicate].quantity++;
        }
        else{
            newCard["quantity"] = 1;
            workingList.push(newCard);
        }
        
        deck.list[listName] = workingList;
        this.setState({ deck });
    }

    /**
     * Removes a card from a named section of the decklist, but if the card has
     * a quantity value above 1, its quantity value is only decremented
     */
    removeCard = (event, selectedCard, listName) => {
        event.preventDefault();
        const deck = this.state.deck;
        const workingList = deck.list[listName];

        //Check if more than one copy exists, if so, just decrement the counter instead of removing
        const duplicate = this.checkForDuplicate(selectedCard, workingList);
        if(duplicate !== false){
            const duplicateAmount = workingList[duplicate].quantity;

            if(duplicateAmount > 1) workingList[duplicate].quantity--;
            else if(duplicateAmount === 1) workingList.splice(workingList.indexOf(selectedCard), 1);
            else console.log("an error has occurred with removeCard")
        }
        
        deck.list[listName] = workingList;
        this.setState({ deck });
    }

    upShiftClick = (selectedCard) => {
        const { deckList } = this.state;

        //Check if more than one copy exists, if so, just decrement the counter
        const duplicate = this.checkForDuplicate(selectedCard);
        if(duplicate !== false){
            const duplicateAmount = deckList[duplicate].quantity;

            if(duplicateAmount > 1) deckList[duplicate].quantity--;
            else if(duplicateAmount === 1) deckList.splice(deckList.indexOf(selectedCard), 1);
            else console.log("an error has occurred with removeCard")
        }
    }

    onSaveDeck = () => {
        const deck = {
            deckName: this.state.deckName,
            deckList: this.state.deckList
        }

        localStorage.setItem("deck", JSON.stringify(deck));
        toast.success("Deck Successfully Saved");
    }

    /**
     * Sort the current decklist based on the listed names
     */
    onSortAZ = () => {
        const { deckList } = this.state;
        deckList.sort(compare.alpha);
        this.setState({ deckList });
    }

    /**
     * Sort the current decklist based on the converted mana costs
     */
    onSortMana = () => {
        const { deckList } = this.state;
        deckList.sort(compare.cmc);
        this.setState({ deckList });
    }

    /**
     * Examine each card in a provided list and returns the index of the duplicate if it exists
     * Currently only examines based on name
     */
    checkForDuplicate = (newCard, list) => {
        for(let i = 0; i < list.length; i++){
            if(list[i].name === newCard.name) {
                return i;
            }
        }
        return false;
    }

    addBasicLand = (land) => {
        const { deckList } = this.state;
        const lands = getLands().cards;

        const newCard = lands.filter(cardObj => cardObj.name === land)[0];

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

    onSelectedView = (viewName) => {
        if(viewName === "analysis"){
            this.setState({ selectedView: viewName, displayCards: false })
        }
        else {
            this.setState({ selectedView: viewName, displayCards: true })
        }
    }

    /**
     * Temporarily persist search results, settings, etc for convenience
     */
    cacheSessionData = () => {

    }

    render() { 
        const { selectedGame, queriedCards, deck, selectedView } = this.state;
        const { list: deckList } = deck;

        return ( 
            <React.Fragment>
                <div className = "container-fluid game-header mb-2">
                    <SearchFormContainer 
                        updateQueriedCards = {this.updateQueriedCards}
                        addBasicLand = {this.addBasicLand}
                    />
                </div>

            <div className = "container pl-0 pr-0 mb-2">
                <div className = "row mb-2">
                    <div className = "col-4"> 
                        <SortButtons 
                            onSaveDeck = { this.onSaveDeck }
                            onSortAZ = { this.onSortAZ }
                            onSortMana = { this.onSortMana }
                        />
                    </div>

                    <div className = "col-8"> 
                        <Tabs 
                            onViewSelect = { this.onSelectedView }  
                            selectedView = { selectedView }  
                        />
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-4"> 
                        <DeckSideBar 
                            deckList = { deckList } 
                            textProperty = "name"
                            onLeftSelect = { this.addNewCard }
                            onRightSelect = { this.removeCard }
                        />
                    </div>

                    <div className = "col-8">
                        
                        {this.state.displayCards ? 
                        <CardBrowser 
                            selectedGame = { selectedGame }
                            cardList = { queriedCards } 
                            addNewCard = { this.addNewCard }
                        /> : 
                        <ChartBrowser
                            deckList = { deckList.main } //Only main deck is analyzed
                        />}
                         
                    </div>
                </div>
            </div>

            <div className = "container-fluid text-center">
              <Footer />
            </div>

         </React.Fragment>     
        );
    }
}
 
export default DeckBuilder;
