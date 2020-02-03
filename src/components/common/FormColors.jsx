import React, {Component} from 'react';
import manaC from '../../images/mana/C.svg';
import manaB from '../../images/mana/B.svg';
import manaU from '../../images/mana/U.svg';
import manaR from '../../images/mana/R.svg';
import manaG from '../../images/mana/G.svg';
import manaW from '../../images/mana/W.svg';
import './FormColors.scss'

class FormColors extends Component {
    srcList = [ manaC, manaW, manaB, manaG, manaR, manaU ];
    state = {  }

    render() { 
        return (  
            <React.Fragment>
                {this.srcList.map(icon => {
                    return (
                        <img
                            className = "mana-color-select"
                            src = {icon}
                            alt = "test">
                        </img>
                    );
                })}
            </React.Fragment>
        );
    }
}

export default FormColors;
