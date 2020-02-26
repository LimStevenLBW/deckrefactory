import React, { Component } from 'react';
import * as compare from '../../utils/compare';
import { toast } from 'react-toastify';
import getSum from '../../utils/sum';

import SearchFormContainer from './SearchFormContainer';
import Tabs from '../_common/Tabs';
import CardBrowser from './CardBrowser';
import ChartBrowser from './ChartBrowser';
import DeckSideBar from './DeckSideBar';
import Footer from './Footer';
import { getDate } from '../../utils/date';
import { calcManaAvg, calcDeckColors } from '../../utils/mtgDeck';
import { getCards } from '../../services/falseApi';
import { getLands } from '../../services/basicLands';
import './DeckBuilder.scss';
import SortButtons from './SortButtons';

class DeckBuilder extends Component {
    state = { 
        selectedGame: "mtg",
        selectedView: "cards",
        deck: {
            info: {
                name: "",
                format: "",
                playstyle: "",
                description: "",
                author: "",
                lastUpdated: "",
                cmc: 0,
                colors: "",
                updated: "",
                mainCnt: 0,
                sideCnt: 0,
                miscCnt: 0,
            },
            list: {
                main: [],
                side: [],
                misc: [],
            }
        },
        endpoint: "",
        queriedCards: {},
        queriedHeaders: {},
    }

    componentDidMount() {
        if(!sessionStorage.length) { 
            //If storage is empty, use defaults
            const { cards: queriedCards } = getCards();
            this.setState({ queriedCards });
        }
        else { 
            //Get the cardbrowser gallery state from session storage
            const currentPageNum = parseInt(sessionStorage.getItem("page"));
            const tableString = sessionStorage.getItem(`table#${currentPageNum}`)
            const queriedCards = JSON.parse(tableString);
            this.setState({ queriedCards });
        }
      
        try { 
            //Load a saved deck from local storage
            const data = localStorage.getItem('deck');
            const endpoint = sessionStorage.getItem('baseQuery'); //Page URL for pagination if it exists
            const deck = JSON.parse(data);
            if(deck) this.setState({ deck, endpoint });
        }
        catch(ex) {}
    }

    /**
     * Updates the current card browser list and update state
     */
    updateQueriedCards = (queriedCards, queriedHeaders, endpoint) => {
        if(endpoint !== null) this.setState({ queriedCards, queriedHeaders, endpoint });
        else this.setState({ queriedCards, queriedHeaders})
    }

    /**
     * Updates the deck list
     */
    setDeckList = (deckList) => {
        this.setState({ deckList });
    }

    updateCounts = (deck) => {
        //Calculate deck count values
        deck.info.mainCnt = getSum(deck.list.main);
        deck.info.sideCnt = getSum(deck.list.side);
        deck.info.miscCnt = getSum(deck.list.misc);
        return deck;
    }

    /**
     * Add a new card into a named section of the decklist, defaulting to main
     * If a duplicate exists, quantity is updated instead, Deck state is updated to trigger a re-render
     */
    addNewCard = (newCard, listName = 'main') => {
        let deck = this.state.deck;
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

        deck = this.updateCounts(deck);
        this.setState({ deck });
    }

    /**
     * Removes a card from a named section of the decklist, but if the card has
     * a quantity value above 1, its quantity value is only decremented
     */
    removeCard = (event, selectedCard, listName) => {
        if(event) event.preventDefault();
        let deck = this.state.deck;
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

        deck = this.updateCounts(deck);
        this.setState({ deck });
    }

    /**
     * 
     */
    shiftCardHandler = (event, selectedCard, listName, shiftUp = true) => {
        let deck = this.state.deck;
        let nextListName;
        switch(listName) {
            case 'main':
                if(shiftUp) nextListName = 'misc';
                else nextListName = 'side';
                break;
            case 'side':
                if(shiftUp) nextListName = 'main';
                else nextListName = 'misc';
                break;
            case 'misc':
                if(shiftUp) nextListName = 'side';
                else nextListName = 'main';
                break;
            default:
                nextListName = listName; //Don't move it
                console.error("Error occurred while editing deck list");    
        }

        const workingList = deck.list[nextListName];
        const prevList = deck.list[listName];

        if(event.shiftKey) { //If key shift is held, remove card regardless of quantity
            const duplicate = this.checkForDuplicate(selectedCard, workingList);

            if(duplicate !== false) {
                workingList[duplicate].quantity += selectedCard.quantity; //Add the quantities together 
            }
            else {
                workingList.push(selectedCard); //Move the card into the list
            }

            prevList.splice(prevList.indexOf(selectedCard), 1); //Remove it from the previous list
            deck.list[nextListName] = workingList;
            deck = this.updateCounts(deck);
            this.setState({ deck });
        }
        else { //Otherwise, use standard evaluation for removal, only move one at a time
            this.removeCard(event, selectedCard, listName);
            this.addNewCard(selectedCard, nextListName);
        }

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

    onSaveDeck = () => {
        const deck = this.state.deck;
 
        deck.info.cmc = calcManaAvg(deck); //Get average mana cost
        deck.info.colors = calcDeckColors(deck); //Get mana color name
        deck.info.lastUpdated = getDate(); //Get date of update

        this.setState({ deck }, () => {
            localStorage.setItem("deck", JSON.stringify(deck));
            toast.success("Deck was saved locally");
        });
    }

    /**
     * Sort the current decklist based on the listed names
     */
    onSortAZ = () => {
        const { deck } = this.state;
        deck.list.main.sort(compare.alpha);
        deck.list.side.sort(compare.alpha);
        deck.list.misc.sort(compare.alpha);
        this.setState({ deck });
    }

    /**
     * Sort the current decklist based on the converted mana costs
     */
    onSortMana = () => {
        const { deck } = this.state;
        deck.list.main.sort(compare.cmc);
        deck.list.side.sort(compare.cmc);
        deck.list.misc.sort(compare.cmc);
        this.setState({ deck });
    }

    addBasicLand = (land) => {
        let deck = this.state.deck;
        const workingList = deck.list['main'];
        const lands = getLands().cards;

        const newCard = lands.filter(cardObj => cardObj.name === land)[0];

        //Check if the card already exists
        const duplicate = this.checkForDuplicate(newCard, workingList);
        if(duplicate !== false){
            deck.list.main[duplicate].quantity++;
        }
        else{
            newCard["quantity"] = 1;
            deck.list.main.push(newCard);
        }
        
        deck = this.updateCounts(deck);
        this.setState({ deck });
    }

    onSelectedView = (viewName) => {
        if(viewName === "analysis"){
            this.setState({ selectedView: viewName })
        }
        else {
            this.setState({ selectedView: viewName })
        }
    }

    /**
     * Temporarily persist search results, settings, etc for convenience
     */
    cacheSessionData = () => {

    }

    render() { 
        const { selectedGame, queriedCards, queriedHeaders, deck, selectedView, endpoint } = this.state;
        const { list: deckList } = deck;
        const { info: deckInfo } = deck;

        return ( 
            <React.Fragment>
                <div className = "container-fluid game-header mb-2">
                    <SearchFormContainer 
                        updateQueriedCards = {this.updateQueriedCards}
                        addBasicLand = {this.addBasicLand}
                    />
                </div>

            <div className = "container-fluid cf-spacing mb-2">
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
                            deckInfo = {deckInfo}
                            textProperty = "name"
                            onLeftSelect = { this.addNewCard }
                            onRightSelect = { this.removeCard }
                            onShiftClick = { this.shiftCardHandler }
                        />
                    </div>

                    <div className = "col-8 pl-1 pr-1">
                        
                        {this.state.selectedView === 'cards' ? 
                        <CardBrowser 
                            selectedGame = { selectedGame }
                            cardList = { queriedCards } 
                            endpoint = { endpoint }
                            headersList = { queriedHeaders }
                            addNewCard = { this.addNewCard }
                            updateQueriedCards = { this.updateQueriedCards }
                            
                        /> : 
                        <ChartBrowser
                            deckList = { deckList.main } //Only main deck is analyzed
                        />}
                         
                    </div>
                </div>
            </div>

            <Footer />

         </React.Fragment>     
        );
    }
}
 
export default DeckBuilder;
