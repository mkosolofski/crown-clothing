import { signInWithGooglePopup } from './../../utils/firebase.utils';
import Button, { BUTTON_TYPE_CLASSES } from './../button/button.component';
import FormInput from './../form-input/form-input.component';
import { useState } from 'react';
import { SignInContainer, TitleContainer, ButtonsContainer } from './sign-in-form.styles';

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;

    const resetForm = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            resetForm();
        } catch(error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    alert('invalid credentials');
            }

            console.log(error);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return (
        <SignInContainer>
            <TitleContainer>Already have an account?</TitleContainer>
            <p>Sign in with your email and password</p>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    required
                    type='email'
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
                <FormInput
                    label='Password'
                    required
                    type='password'
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <ButtonsContainer>
                    <Button type='submit'>
                        Sign In
                    </Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGooglePopup}>
                        Google Sign In
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
}

export default SignInForm;
