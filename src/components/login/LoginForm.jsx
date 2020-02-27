import React from 'react';
import Joi from 'joi';
import auth from '../../services/auth';
import { NavLink } from 'react-router-dom';

import FormContainer from '../_forms/FormContainer';
import FormInput from '../_forms/FormInput';
import FormButton from '../_forms/FormButton';

import './LoginForm.scss'
import bannerLeft from '../../images/banner-left2.jpg';
import bannerRight from '../../images/banner-right2.jpg';
import FormCheckbox from '../_forms/FormCheckbox';

/**
 * Subclass of FormContainer, contains collaborating forms to gather data for
 * a login request. When submitted, an api post-request is sent through Axios.
 * Joi is used to check the forms and will prevent submission if data is invalid.
 */
class LoginForm extends FormContainer {
    state = {
        data: {
            email: "",
            password: "",
        },
        isChecked: false,
        errors: {}
    }

    componentDidMount() {
        //Check if user is already logged in, if so, just redirect to homepage
        const user = auth.getCurrentUser();
        if(user) this.props.history.push("/"); //Redirect

        //Check if an email is already stored, and initialize state as necessary
        const isChecked = auth.getChecked();
        const email = auth.getPrevEmail();

        if(isChecked && email) {
            const data = { ...this.state.data }
            data["email"] = email;
            this.setState({ data, isChecked: true})
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
    };

    //Toggles checked status
    handleChecked = () => {
        const isChecked = !this.state.isChecked;
        this.setState({ isChecked });
    }

    /**
     * @override Submit the registration form
     */
    doSubmit = async () => { 
        try{
            const { data } = await auth.login(this.state.data);
            auth.storeTok(data);
      
            if(this.state.isChecked){
                auth.storeChecked();
                auth.storeEmail(this.state.data['email']);
            }

            this.props.updateAuth();      //Update login Status
            this.props.history.push("/builder"); //Redirect to homepage
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
            <div className = "container-fluid p-0 m-0 light">
            <div className = "row no-gutters">
                <div className = "col-3">
                    <img className = "banner-fixed-left" src = {bannerLeft} alt = ""></img>
                </div>

                <div className = "col-6">
                    <header className = "mb-4 mt-4">
                        <h2>Welcome Planeswalker!</h2>
                        <p>Please enter your login details to sign in</p>
                    </header>
                    
                    <form className = "login-container pl-5 pr-5 pt-4" onSubmit = {this.handleSubmit}>
                        <h2>Login</h2>

                        <FormInput 
                            name = 'email'
                            type = 'text'
                            handler = {this.handleChange}
                            label = "Email Address"
                            error = {this.state.errors['email']}
                            value = {this.state.data['email']}
                        />

                        <FormInput 
                            name = 'password'
                            type = 'password'
                            handler = {this.handleChange}
                            label = "Password"
                            error = {this.state.errors['password']}
                        />

                        <FormCheckbox 
                            textValue = "Remember My Username"
                            formID = "username-checkbox"
                            isChecked = {this.state.isChecked}
                            handleChecked = {this.handleChecked}
                        />

                        <FormButton 
                            classList = "btn btn-primary mt-2 pl-4 pr-4"
                            checkValidity = {this.validateAll}
                            label = {"Login"}
                            onSubmit = {this.handleSubmit}
                        />

                    <div className = "text-center">
                        <NavLink
                            className="login-nav-link"
                            to="/register">
                            Forgot your password? Click here to reset it (feature not yet available)
                        </NavLink>

                        <NavLink 
                            className="login-nav-link"
                            to="/register">
                            Don't have an account? Click here to register!
                        </NavLink>
                        
                    </div>

                    </form>
                </div>

                <div className = "col-3">
                  <img className = "banner-fixed-right" src = {bannerRight} alt = ""></img>
                </div>
                
                </div>
            </div>
        );
    }
}
 
export default LoginForm;
