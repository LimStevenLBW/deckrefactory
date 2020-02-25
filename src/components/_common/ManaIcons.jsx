import React from 'react';
import './ManaIcons.scss'
import mana0 from '../../images/mana/0.svg';
import mana1 from '../../images/mana/1.svg';
import mana2 from '../../images/mana/2.svg';
import mana2B from '../../images/mana/2B.svg';
import mana2G from '../../images/mana/2G.svg';
import mana2R from '../../images/mana/2R.svg';
import mana2U from '../../images/mana/2U.svg';
import mana2W from '../../images/mana/2W.svg';
import mana3 from '../../images/mana/3.svg';
import mana4 from '../../images/mana/4.svg';
import mana5 from '../../images/mana/5.svg';
import mana6 from '../../images/mana/6.svg';
import mana7 from '../../images/mana/7.svg';
import mana8 from '../../images/mana/8.svg';
import mana9 from '../../images/mana/9.svg';
import mana10 from '../../images/mana/10.svg';
import mana11 from '../../images/mana/11.svg';
import mana12 from '../../images/mana/12.svg';
import mana13 from '../../images/mana/13.svg';
import mana14 from '../../images/mana/14.svg';
import mana15 from '../../images/mana/15.svg';
import mana16 from '../../images/mana/16.svg';
import mana17 from '../../images/mana/17.svg';
import mana18 from '../../images/mana/18.svg';
import mana19 from '../../images/mana/19.svg';
import mana20 from '../../images/mana/20.svg';
import manaB from '../../images/mana/B.svg';
import manaBG from '../../images/mana/BG.svg';
import manaBP from '../../images/mana/BP.svg';
import manaBR from '../../images/mana/BR.svg';
import manaC from '../../images/mana/C.svg';
import manaG from '../../images/mana/G.svg';
import manaGP from '../../images/mana/GP.svg';
import manaGU from '../../images/mana/GU.svg';
import manaGW from '../../images/mana/GW.svg';
import manaR from '../../images/mana/R.svg';
import manaRG from '../../images/mana/RG.svg';
import manaRP from '../../images/mana/RP.svg';
import manaRW from '../../images/mana/RW.svg';
import manaS from '../../images/mana/S.svg';
import manaU from '../../images/mana/U.svg';
import manaUB from '../../images/mana/UB.svg';
import manaUP from '../../images/mana/UP.svg';
import manaUR from '../../images/mana/UR.svg';
import manaW from '../../images/mana/W.svg';
import manaWB from '../../images/mana/WB.svg';
import manaWP from '../../images/mana/WP.svg';
import manaWU from '../../images/mana/WU.svg';
import manaX from '../../images/mana/X.svg';

//Parses a string such as {3}{W}{W} and renders the associated icons
const ManaIcons = ({ mana }) => {
    let char;
    let src;
    let srcList = [];
    if(mana) 
        for(let i = 0; i < mana.length; i++){
            char = mana[i];
            if(char === '{' || char === '}') continue;
            
            if(i < mana.length-1){ //Check for multichar mana codes
                const nextChar = mana[i + 1];
                if(nextChar !== '}' && nextChar !== ' ') char = char + nextChar; //Combine the two
                i++; //Skip the next iteration
            }

            switch(char){
                case '0': src = mana0; break;
                case '1': src = mana1; break;
                case '2': src = mana2; break;
                case '2B': src = mana2B; break;
                case '2G': src = mana2G; break;
                case '2R': src = mana2R; break;
                case '2U': src = mana2U; break;
                case '2W': src = mana2W; break;
                case '3': src = mana3; break;
                case '4': src = mana4; break;
                case '5': src = mana5; break;
                case '6': src = mana6; break;
                case '7': src = mana7; break;
                case '8': src = mana8; break;
                case '9': src = mana9; break;
                case '10': src = mana10; break;
                case '11': src = mana11; break;
                case '12': src = mana12; break;
                case '13': src = mana13; break;
                case '14': src = mana14; break;
                case '15': src = mana15; break;
                case '16': src = mana16; break;
                case '17': src = mana17; break;
                case '18': src = mana18; break;
                case '19': src = mana19; break;
                case '20': src = mana20; break;
                case 'BG': src = manaBG; break;
                case 'BP': src = manaBP; break;
                case 'BR': src = manaBR; break;
                case 'B': src = manaB; break; //Black
                case 'C': src = manaC; break;
                case 'GP': src = manaGP; break;
                case 'GU': src = manaGU; break;
                case 'GW': src = manaGW; break;
                case 'G': src = manaG; break; //Green
                case 'RG': src = manaRG; break 
                case 'RP': src = manaRP; break 
                case 'RW': src = manaRW; break 
                case 'R': src = manaR; break //Red
                case 'S': src = manaS; break 
                case 'UB': src = manaUB; break
                case 'UP': src = manaUP; break 
                case 'UR': src = manaUR; break
                case 'U': src = manaU; break //Blue
                case 'WB': src = manaWB; break;
                case 'WP': src = manaWP; break;
                case 'WU': src = manaWU; break;
                case 'W': src = manaW; break; //White
                case 'X': src = manaX; break; //X
                default:
                    src = null;
                    //console.log(mana);
            }

        if(src) srcList.push(src);
    }

    return (  
        <React.Fragment>
            {srcList.map((icon, index) => {
                return(
                     <img 
                        key = {index}
                        className = "mana-icon pb-1 pr-1" 
                        src = {icon}
                        alt = "test">
                    </img>
                );
            })}
        </React.Fragment>
    );
}
 
export default ManaIcons;
