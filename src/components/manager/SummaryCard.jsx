import React, { Component } from 'react';
import './SummaryCard.scss';
//import SummaryListItem from './SummaryListItem';
import EditableListItem from '../_common/EditableListItem';
import FormSelect from '../_forms/FormSelect';
import manaC from '../../images/mana/C.svg';

/*
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
            */
class SummaryCard extends Component {
    state = {  
        listItems: [

        ]
    }

    render() { 
        const { deckInfo } = this.props;
        let avgManaTrimmed;
        if(deckInfo.cmc) avgManaTrimmed = deckInfo.cmc.toFixed(2);

        return (  
            <div className = "summary-card">
                <img className = "summary-color-img" src = {manaC} alt = ""></img>
                
                <ul className ="list-group">
                        <FormSelect 
                            name = {"format"} //used to identify form data
                            label = {"Select a Format"}
                            handler = {this.props.onFormatChange}
                            value = {deckInfo.format} 
                            options = {
                                ["Casual", "Standard", "Modern", "Vintage", "Commander", "Legacy", "Oathbreaker", "Frontier"]
                            }
                        />

                    <EditableListItem 
                        className = "editable-li-item"
                        label = "Playstyle"
                        textValue = {deckInfo.playstyle}
                        handler = {this.props.onPlayStyleChange}
                    />

                    <li className ="summary-li-item">Average Mana Cost: {avgManaTrimmed}</li>
                    <li className ="summary-li-item">Colors: {deckInfo.colors}</li>
                    <li className ="summary-li-item">Main Deck: {deckInfo.mainCnt}</li>
                    <li className ="summary-li-item">Side Deck: {deckInfo.sideCnt}</li>
                    <li className ="summary-li-item">Misc Deck: {deckInfo.miscCnt}</li>
                    <li className ="summary-li-item">Last Updated {deckInfo.lastUpdated}</li>
                </ul>
            </div>
        );
    }
}
 
export default SummaryCard;
