import React from 'react';
import FormContainer from '../_forms/FormContainer';
import FormInput from '../_forms/FormInput';
import Joi from 'joi';
import FormButton from '../_forms/FormButton';
import auth from '../../services/auth';
import './LoginForm.scss'
import bannerLeft from '../../images/banner-left2.jpg';
import bannerRight from '../../images/banner-right2.jpg';

class LoginForm extends FormContainer {
    state = {
        data: {
            email: "",
            password: "",
        },
        errors: {}
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
    };

    /**
     * @override Submit the registration form
     */
    doSubmit = async () => { 
        try{
            const data = await auth.login(this.state.data);
            auth.storeTok(data);
            this.props.updateAuth();
            this.props.history.push("/"); //Redirect
        }
        catch(ex){
            if(ex.response && ex.response.status === 400){
                const { errors } = this.state;
                errors.email = ex.response.data;
                this.setState({ errors });
            }
        }
    }

    render() { 
        return (  
            <div className = "container w-50 light">

                <img className = "banner-fixed-left" src = {bannerLeft} alt = ""></img>

                <img className = "banner-fixed-right" src = {bannerRight} alt = ""></img>
            
                 <form className = "pt-5" onSubmit = {this.handleSubmit}>
                     <h1>Login</h1>

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

                    <FormButton 
                        classList = ""
                        checkValidity = {this.validateAll}
                        label = {"Submit"}
                        onSubmit = {this.handleSubmit}
                    />
                </form>

                <p className = "text-center">
                    
                </p>
            </div>
        );
    }
}
 
export default LoginForm;
