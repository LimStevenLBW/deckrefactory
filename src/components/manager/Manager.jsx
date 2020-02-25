import React, { Component } from 'react';
import SummaryCard from './SummaryCard';
import DeckGridSelector from './DeckGridSelector';
import ManagerControls from './ManagerControls';
import Banner from './Banner';

import './Manager.scss'

/**
 * Two column layout page, highlights a selected deck with a summary
 * while also displaying a small gallery to view additional decks.
 */
class Manager extends Component {
    state = {  
        deck: {
            info: {
                name: "Unnamed Deck"
            }
        },
    }

    componentDidMount() {
        //Load a saved deck from local storage
        const data = localStorage.getItem('deck');
        const deck = JSON.parse(data);
        if(deck) this.setState({ deck });
    }

    render() { 
        return (  
            <React.Fragment>
                <div className = "alert alert-warning p-0 m-0" role="alert">
                    ~The current component is under construction, some features may be unavailable~
                </div>

                <div className = "container-fluid p-0">
                    <div className = "row no-gutters manager">
                        <div className = "col-6 white-overlay">
                            <div className = "row justify-content-center ml-0 mr-0 mt-3 mb-2">
                                <ManagerControls history = {this.props.history}/>
                            </div>

                            <div className = "row justify-content-center m-0">
                                <h3>
                                    {this.state.deck.info.name ? this.state.deck.info.name : "Unnamed Deck"}
                                </h3>
                            </div>

                            <div className = "row ml-0 mr-0 mb-5">
                                <SummaryCard deck = {this.state.deck}/>
                            </div>
                        </div>
    
                        <div className = "col-6">
                            <div className = "row manager-heading m-0 p-3">
                                <Banner />
                            </div>

                            <div className = "row dgs-disabled ml-0 mr-0 mt-4 mb-4">
                                <DeckGridSelector />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Manager;
