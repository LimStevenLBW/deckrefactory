import React from 'react';
import Joi from 'joi';
import FormContainer from '../../_forms/FormContainer';
import FormInput from '../../_forms/FormInput';
import FormButton from '../../_forms/FormButton';
import accountService from '../../../services/account';
import './ChangeForm.scss';

class ChangeForm extends FormContainer {
    state = {
        data: {
            oldpassword: "",
            password: "",
            confirmation: "",
        },
        errors: {

        }
    }

    schema = {
        oldpassword: Joi
            .string()
            .required()
            .label("Old Password"),
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
    }

    /**
     * @override Submit the change password form
     */
    doSubmit = async () => { 
        const body = {
            email: this.props.user,
            oldpassword: this.state.data.oldpassword,
            newpassword: this.state.data.password,
        }
        
        try{
            const res = await accountService.changePassword(body);
            this.props.history.push('/profile')
        }
        catch(ex){

        }
    }

    render(){
        return(
            <div>
                <form className = "container bg-container w-50" onSubmit = {this.handleSubmit}>
                    <h5>Please enter your old password before changing to a new one</h5>
                    <p>Use a password that cannot be easily guessed</p>

                    <FormInput 
                        name = 'oldpassword'
                        type = 'password'
                        handler = {this.handleChange}
                        label = "Old Password"
                        error = {this.state.errors['oldpassword']}
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
                        classList = "btn btn-primary mt-2 pl-4 pr-4"
                        checkValidity = {this.validateAll}
                        label = {"Submit"}
                        onSubmit = {this.handleSubmit}
                    />
                </form>
            </div>
        );
    }

}

export default ChangeForm;
