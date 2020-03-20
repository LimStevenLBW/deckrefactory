import React from 'react';
import colorless from '../../images/mana/C.svg';
import red from '../../images/mana/R.svg';
import blue from '../../images/mana/U.svg';
import black from '../../images/mana/B.svg';
import green from '../../images/mana/G.svg';
import white from '../../images/mana/W.svg';
import rainbow from '../../images/mana/rainbow.png';

import getGuilds from '../../models/guilds';

/**
 * Checks if the provided list of colors matches, a guild, if so, set that as the icon
 * @param {*} param
 */
const SummaryColorImg = ({ colors }) => {
    const guilds = getGuilds();
    let link = undefined;

    //For single color decks
    if(colors.length === 1){
        let color = colors[0];
        if(color === 'Red') link = red;
        else if(color === 'Blue') link = blue;
        else if(color === 'Black') link = black;
        else if(color === 'White') link = white;
        else if(color === 'Green') link = green;
        else if(color === 'Colorless') link = colorless;
    }
    else if(colors.length === 2){
        //For two color decks
        for(let i in guilds){
            const isEqual = (colors.length === guilds[i].colors.length) && (colors.every(val => guilds[i].colors.includes(val)));
            if(isEqual) {
                link = guilds[i].link;
                break;
            }
        }
    }
    else{
        link = rainbow;
    }

    return (  
        <img className = "summary-color-img" src = {link} alt = {colorless}></img>
    );
}
 
export default SummaryColorImg;
