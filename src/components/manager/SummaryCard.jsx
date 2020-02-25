import React, { Component } from 'react';
import './SummaryCard.scss';
import SummaryListItem from './SummaryListItem';
import EditableListItem from '../_common/EditableListItem';
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
        /*
        const { info } = this.props.deck;
        console.log(info)
        const keys = Object.keys(info);
        const listItems = [];

        for(const key of keys){
            listItems.push({
                label: key,
                textValue: info[key],
            })
        }
        */

        //console.log(listItems)

        /*
        */
        return (  
            <div className = "summary-card">
                <img className = "summary-color-img" src = {manaC} alt = ""></img>
                
                <ul className ="list-group">
                    <EditableListItem 
                        className = "editable-li-item"
                        label = "Format"
                        textValue = "Casual, Standard"
                    />
                    <EditableListItem 
                        className = "editable-li-item"
                        label = "Playstyle"
                        textValue = "Control, Aggro"
                    />
                    <li className ="summary-li-item">Average Mana Cost: 2.43</li>
                    <li className ="summary-li-item">Colors: Mono-Blue</li>
                    <li className ="summary-li-item">Main Deck: 60 Cards</li>
                    <li className ="summary-li-item">Side Deck: 16 Cards</li>
                    <li className ="summary-li-item">Misc Deck: 6 Cards</li>
                    <li className ="summary-li-item">Last Updated 2/24/2020</li>
                </ul>
            </div>
        );
    }
}
 
export default SummaryCard;
