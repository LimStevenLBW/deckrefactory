import { Component } from 'react';
import Joi from '@hapi/joi';

/**
 * Generic Form Component, contains generic functionality for form management
 * Extend it to render displays of forms and setup error handling with Joi
 */
class FormContainer extends Component {
    state = { 
        dataObj: {},
        errorsObj: {}, //When errors object is empty, the forms are fine
    }

    /**
     * Utilizes Joi to validate only one form field 
     */
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value } //ES6 Computed Properties, using what name is at runtime to be a key

        const schema = { [name]: this.schema[name] } //Create a sub-schema, validate with Joi schema
        const { error } = Joi.validate(obj, schema)

        return error ? error.details[0].message : null; //Return error if it exists
    }

    /**
     * Utilizes Joi to validate all component form data
     */
    validate = () => {
        const joiOptions = { abortEarly: false }; //Set to avoid ending at the first error
        const { error } = Joi.validate(this.state.dataObj, this.schema, joiOptions);

        if(!error) return null; //No errors found

        const errors = {};
        for (let i of error.details) {
            errors[i.path[0]] = i.message;
        }

        console.error(errors);

        return errors;
    }

    /**
     * Handles submission of a form set, triggers validation
     */
    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    }

    /**
     * Used to switch control from the element to React
     * Repeated calls to evaluate a form on value change, updates data & error states
     */
    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors }
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        this.setState({ errors: errors || {} })

        const data = { ...this.state.data }
        data[input.name] = input.value;
        this.setState({ data });
    }

    /**
     * Override to complete api calls and other functionality
     */
    doSubmit = () => {
        
    }

}
 
export default FormContainer;
