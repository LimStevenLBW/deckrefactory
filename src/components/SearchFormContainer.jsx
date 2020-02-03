import React from 'react';
import FormContainer from './common/FormContainer';
import SearchBar from './common/SearchBar';
import FormSelect from './common/FormSelect';
import FormColors from './common/FormColors';

/**
 * Extends Form Container, renders forms for initiating an advanced search
 */
 class SearchFormContainer extends FormContainer {
     constructor(props){
        super(props);
        this.state = {

        }
     }

     render() { 
         return (  
            <React.Fragment>
            <div className = "form-row justify-content-center">
                <div className = "col-2 pt-3">
                    <FormSelect 
                        name = {"format-select"} //used to identify form data
                        label = {"Select a Format"}
                        handler = {console.log("sd")}
                        value = {"previous set value"} //prev set value
                        options = {
                            ["Casual", "Standard", "Modern", "Vintage", "Commander", "Legacy", "Commander", "Oathbreaker", "Frontier"]
                        }
                    />
                </div>

                <div className = "col-2 pt-3">
                    <FormSelect
                        name = {"type-select"} //used to identify form data
                        label = {"Select Card Type"}
                        handler = {console.log("sd")}
                        value = {"previous set value"} //prev set value
                        options = {
                            ["Artifact", "Creature", "Enchantment", "Instant", "Land", "Legendary", "Sorcery"]
                        }
                    />
                </div>
                
                <div className = "col-1 pt-3">
                    <FormSelect 
                        name = {"format-select"} //used to identify form data
                        label = {"Mana"}
                        handler = {console.log("sd")}
                        value = {"previous set value"} //prev set value
                        options = {
                            ['0', '1', '2', '3', '4', '5','6','7','8','9','10+']
                        }>
                    </FormSelect>
                </div>
                
                <div className = "col-4">
                    <SearchBar />
                </div>
            </div>

            
            <div className = "form-row text-center">
                <div className = "col-8">
                    <FormColors />
                </div>
                <div className = "col-4">
                    PLACEHOLDER
                </div>
            </div>
                            
        </React.Fragment>
        );
     }
 }
  
 export default SearchFormContainer;
