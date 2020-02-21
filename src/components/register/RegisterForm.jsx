import React from 'react';
import FormContainer from '../_forms/FormContainer';
import FormInput from '../_forms/FormInput';
import Joi from 'joi';
import FormButton from '../_forms/FormButton';
import userService from '../../services/register';
import auth from '../../services/auth';

import bannerLeft from '../../images/banner-left.jpg';
import bannerRight from '../../images/banner-right.jpg';
import './RegisterForm.scss';

class RegisterForm extends FormContainer {
    state = {
        data: {
            email: "",
            username: "",
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
        username: Joi
            .string()
            .min(3)
            .max(20)
            .required()
            .label("Nickname"),
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
    
    /**
     * @override Submit the registration form
     */
    doSubmit = async () => {
        const body = {
            email: this.state.data.email,
            username: this.state.data.username,
            password: this.state.data.password,
        }

        try{
            const res = await userService.register(body);
            auth.storeTok(res.headers['x-auth-token']) //Retrieve token from custom header
            this.props.updateAuth();
            this.props.history.push('/')
        }
        catch(ex){
            if(ex.response && ex.response.status === 400){
                console.error("An error occurred while attempting to register user")
                console.error("Status: " + ex.response.status);
                const { errors } = this.state;
                errors.email = ex.response.data;
                this.setState({ errors });
            }
        }
        
        //const { data } = await res;
        //console.log(data);
        //console.log("request ok");
    }

    render() {
        return (
            <div className = "container w-50 light">

                <img className = "banner-fixed-left" src = {bannerLeft} alt = ""></img>
                <img className = "banner-fixed-right" src = {bannerRight} alt = ""></img>
                
                    <div className = "pt-4">
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
                            name = 'username'
                            type = 'text'
                            handler = {this.handleChange}
                            label = "Nickname"
                            error = {this.state.errors['username']}
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
                            onSubmit = {this.handleSubmit}
                        />
                    </form>
                    </div>
            </div>
        );
    }
}

export default RegisterForm;
