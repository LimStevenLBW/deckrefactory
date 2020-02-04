import React from 'react';
import FormContainer from './common/FormContainer';
import FormSearchBar from './common/FormSearchBar';
import FormSelect from './common/FormSelect';
import FormColors from './common/FormColors';
import Api from '../services/magicIOApi';

/**
 * Extends Form Container, renders forms for initiating an advanced search
 */
 class SearchFormContainer extends FormContainer {
     constructor(props){
        super(props);
        this.state = {
            data: {
                format: "",
                type: "",
                cmc: "",
                query: "",
            },
        }
     }

    /**
     * @Override Used to switch control from the element to React
     * Joi is not needed for this form, only valid options are presented
     */
    handleChange = ({ currentTarget: form }) => {
        const data = { ...this.state.data }
        data[form.name] = form.value;
        this.setState({ data });
    }

    /**
     * @Override Submits the query with filter options from props
     */
    doSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state.data.query)
        console.log("test")
    }


    render() { 
        const { data } = this.state;
        console.log(this.state.data)
        return (  
            <React.Fragment>
                <div className = "form-row justify-content-center">
                    <div className = "col-2 pt-3">
                        <FormSelect 
                            name = {"format"} //used to identify form data
                            label = {"Select a Format"}
                            handler = {this.handleChange}
                            value = {data.format} 
                            options = {
                                ["Casual", "Standard", "Modern", "Vintage", "Commander", "Legacy", "Oathbreaker", "Frontier"]
                            }
                        />
                    </div>

                <div className = "col-2 pt-3">
                    <FormSelect
                        name = {"type"} //used to identify form data
                        label = {"Select Card Type"}
                        handler = {this.handleChange}
                        value = {data.type} 
                        options = {
                            ["Artifact", "Creature", "Enchantment", "Instant", "Land", "Legendary", "Sorcery"]
                        }
                    />
                </div>
                
                <div className = "col-1 pt-3">
                    <FormSelect 
                        name = {"cmc"} //used to identify form data
                        label = {"Mana"}
                        handler = {this.handleChange}
                        value = {data.cmc} //prev set value
                        options = {
                            ['0', '1', '2', '3', '4', '5','6','7','8','9','10+']
                        }>
                    </FormSelect>
                </div>
                
                <div className = "col-4">
                    <FormSearchBar 
                        name = {"query"}
                        onChange = {this.handleChange}
                        onSubmit = {this.doSubmit}
                    />
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
