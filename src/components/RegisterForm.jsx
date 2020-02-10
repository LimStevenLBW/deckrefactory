import React from 'react';
import Form from './common/FormContainer';
import FormInput from './common/FormInput';
import Joi from 'joi';
import FormButton from './common/FormButton';

class RegisterForm extends Form {
    state = {
        data: {
            email: "",
            password: "",
            confirmation: "",
        },
        errors: {

        }
    }

    schema = {
        email: Joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required()
            .label("Email"),
        password: Joi
            .string()
            .min(6)
            .max(30)
            .required()
            .label("Password"),
        confirmation: Joi
            .any()
            .valid(Joi.ref('password'))
            .required()
            .label("Confirmation")
    };
    

    doSubmit = () => {
        console.log("Test Server Call")
    }

    render() {
        return (
            <div className = "container w-50">
                <h1>Register</h1>

                <form onSubmit = {this.handleSubmit}>
                    <FormInput 
                        name = 'email'
                        type = 'text'
                        handler = {this.handleChange}
                        label = "Email Address"
                        error = {this.state.errors['email']}
                    />

                    <FormInput 
                        name = 'password'
                        type = 'password'
                        handler = {this.handleChange}
                        label = "Password"
                        error = {this.state.errors['password']}
                    />

                    <FormInput 
                        name = 'confirmation'
                        type = 'password'
                        handler = {this.handleChange}
                        label = "Confirm Password"
                        error = {this.state.errors['confirmation']}
                    />

                    <FormButton 
                        classList = ""
                        checkValidity = {this.validateAll}
                        label = {"Submit"}
                    />
                </form>
                
            </div>

        );
    }
}

export default RegisterForm;
