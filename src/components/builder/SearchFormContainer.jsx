import React from 'react';
import FormContainer from '../_forms/FormContainer';
import FormSearchBar from '../_forms/FormSearchBar';
import FormSelect from '../_forms/FormSelect';
import FormColors from '../_forms/FormColors';
import ButtonDropDown from '../_common/ButtonDropDown';
import { search, buildEndpoint } from '../../services/mtgSearch';

/**
 * Extends Form Container, renders forms for initiating an advanced search.
 */
class SearchFormContainer extends FormContainer {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                format: "",
                type: "",
                cmc: "",
                query: "",
                colors: []
            },
            isLoadingData: false
        }
    }

    /**
     * Assembles a string to explain what filters are active
     */
    getSearchDescription = () => {
        const { format, type, cmc, colors } = this.state.data;
        let description = "";

        if (format) description = `${description}${format},`;
        if (type) description = `${description}${type},`;
        if (cmc) description = `${description} Cost: ${cmc},`;
        if (colors) description = `${description}${colors}`;

        if (description === "") description += "None selected"
        return description;

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
     * Similar to handleChange, exclusive for color selection
     */
    handleColors = (colors) => {
        const data = { ...this.state.data }
        data.colors = colors;
        this.setState({ data });
    }

    /*
    *
   
    extractCardData = (data) => {
        let cards = data.cards;
        console.log("ran")

        for (let i = cards.length - 1; i >= 0; i--) {
            if (cards[i].imageUrl) {
                //Do nothing
            }
            else {
                cards.splice(i, 1);
            }
        }

        return cards;
    }
     */

    /**
     * @Override Submits the query with filter options from props
     */
    doSubmit = (e) => {
        e.preventDefault();

        try {
            let res;
            this.setState({ isLoadingData: true }, async () => {
                const endpoint = buildEndpoint(this.state.data, 16);
                res = await search(endpoint)
                const { data, headers } = await res;
                sessionStorage.clear(); //Clear out the session data, removing any stored tables before updating

                //let cards = this.extractCardData(data);
                // console.log(cards);

                this.props.updateQueriedCards(data.cards, headers, endpoint);
                this.setState({ isLoadingData: false });
            })
        }
        catch (ex) {
            this.setState({ isLoadingData: false });
            console.log(ex);
            console.log("error occurred")
        }
    }

    render() {
        const { data, isLoadingData } = this.state;

        return (
            <React.Fragment>
                <div className="form-row justify-content-center">
                    <div className="col-2 pt-3">
                        <FormSelect
                            name={"format"} //used to identify form data
                            label={"Select a Format"}
                            handler={this.handleChange}
                            value={data.format}
                            options={
                                ["Casual", "Standard", "Modern", "Vintage", "Commander", "Legacy", "Oathbreaker", "Frontier"]
                            }
                        />
                    </div>

                    <div className="col-2 pt-3">
                        <FormSelect
                            name={"type"} //used to identify form data
                            label={"Select Card Type"}
                            handler={this.handleChange}
                            value={data.type}
                            options={
                                ["Artifact", "Creature", "Enchantment", "Instant", "Land", "Legendary", "Sorcery"]
                            }
                        />
                    </div>

                    <div className="col-1 pt-3">
                        <FormSelect
                            name={"cmc"} //used to identify form data
                            label={"Mana"}
                            handler={this.handleChange}
                            value={data.cmc} //prev set value
                            options={
                                ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']
                            }>
                        </FormSelect>
                    </div>

                    <div className="col-4">
                        <FormSearchBar
                            name={"query"}
                            onChange={this.handleChange}
                            onSubmit={this.doSubmit}
                            isLoading={isLoadingData}
                        />
                    </div>
                </div>

                <div className="form-row justify-content-center">
                    <div className="col-4 text-right">
                        <ButtonDropDown
                            buttonlabel="Basic Lands"
                            labels={["Mountain", "Forest", "Island", "Plains", "Swamp"]}
                            onClickHandler={this.props.addBasicLand}
                        />
                    </div>
                    <div className="col-4 text-center">
                        <FormColors
                            handleColors={this.handleColors}
                        />
                    </div>
                    <div className="col-4 text-left">
                        {this.getSearchDescription()}
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default SearchFormContainer;
