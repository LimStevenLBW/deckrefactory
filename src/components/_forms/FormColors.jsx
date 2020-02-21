import React, {Component} from 'react';
import manaC from '../../images/mana/C.svg';
import manaB from '../../images/mana/B.svg';
import manaU from '../../images/mana/U.svg';
import manaR from '../../images/mana/R.svg';
import manaG from '../../images/mana/G.svg';
import manaW from '../../images/mana/W.svg';
import './FormColors.scss'

class FormColors extends Component {

    state = { 
        colorless: {
            queryName: 'colorless',
            image: manaC,
            active: false
        },
        white: {
            queryName: 'white',
            image: manaW,
            active: false
        },
        black: {
            queryName: 'black',
            image: manaB,
            active: false
        },
        green: {
            queryName: 'green',
            image: manaG,
            active: false
        },
        red: {
            queryName: 'red',
            image: manaR,
            active: false
        },
        blue: {
            queryName: 'blue',
            image: manaU,
            active: false
        }
    }

    srcList = [];

    componentDidMount(){
        this.srcList = [];
        for(let key of Object.keys(this.state)){
            this.srcList.push(this.state[key])
        }
    }

    /**
     * Disables or Enables a color, 
     * Updates the state and returns a colorlist to SearchFormContainer
     */
    toggleColor = (e) => {
        e.preventDefault();
        const name = (e.currentTarget.name);
        let color = this.state[name];
        color.active = !color.active; //Toggle color active state
     
        let colorList = [];
        this.srcList.forEach((element) => { //Fills an array with colors from the srcList
            if(element.active) colorList.push(element.queryName);
        });

        this.setState({ [name]: color }, () => {
            this.props.handleColors(colorList); //Callback to handleColors
        });
    }

    render() { 
        return (  
            <React.Fragment>
                {this.srcList.map(color => {
                    return (
                        <button 
                            key = {color.queryName}
                            name = {color.queryName}
                            onClick = {(e) => this.toggleColor(e)}>

                            <img
                                className = {color.active ? "mana-color-select" : "mana-color-select-disabled"}
                                src = {color.image}
                                alt = "test">
                            </img>    
                        </button>    
                    );
                })}
            </React.Fragment>
        );
    }
}

export default FormColors;
