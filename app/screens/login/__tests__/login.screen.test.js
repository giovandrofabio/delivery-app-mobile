import React from 'react';
import LoginScreen from '../login.screen';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import RegisterScreen from '../../register/register.screen';
import { loginForm } from '../login.form';

describe('Login screen', () => {

    it('should go to home page on login', async () => {
        const navigation = {navigate: () => {}}
        spyOn(navigation, 'navigate');

        const page = render(<LoginScreen navigation={navigation}/>);

        const email = page.getByTestId("email");
        const password = page.getByTestId("password");
        fireEvent.changeText(email, "valid@email.com");
        fireEvent.changeText(password, "12345678")

        const loginButton = page.getByTestId('loginButton');

        fireEvent.press(loginButton);

        await waitFor(() => expect(navigation.navigate).toHaveBeenCalledWith("Home"));
    })

    it('should go to register on register', () => {
        const navigation = {navigate: () => {}}
        spyOn(navigation, 'navigate');

        const page = render(<LoginScreen navigation={navigation}/>)

        const registerButton = page.getByTestId('registerButton')

        fireEvent.press(registerButton)

        expect(navigation.navigate).toHaveBeenCalledWith("Register");
    })

    it('should form be invalid if email is empty', () => {
        const formValues = {email: ""};

        expect(loginForm.isValidSync(formValues)).toBeFalsy();
    })

    it('should form be invalid if email is invalid', () => {
        const formValues = {email: "invalid"};

        expect(loginForm.isValidSync(formValues)).toBeFalsy();
    })

    it('should form be invalid if password is empty', () => {
        const formValues = {password: "", email: "valid@email.com"}

        expect(loginForm.isValidSync(formValues)).toBeFalsy();
    })

    it('should form be valid', () => {
        const formValues = {password: "validPassword", email: "valid@email.com"};

        expect(loginForm.isValidSync(formValues)).toBeTruthy();
    })

    it('should show error message if email is touched and it is empty', async () => {
        const page = render(<LoginScreen />);
        
        const email = page.getByTestId("email");
        fireEvent.changeText(email, "");

        const loginButton = page.getByTestId("loginButton");
        fireEvent.press(loginButton);

        await waitFor(() => page.getByTestId("error-email"));
    })

    it('should hide error message if email is not touched', async () => {
        const page = render(<LoginScreen />);

        await waitFor(() => expect(page.queryAllByTestId("error-email").length).toEqual(0))
    })

    it('should show error message if password is touched and it is empty', async () => {
        const page = render(<LoginScreen />);
        
        const password = page.getByTestId("password");
        fireEvent.changeText(password, "");

        const loginButton = page.getByTestId("loginButton");
        fireEvent.press(loginButton);

        await waitFor(() => page.getByTestId("error-password"));
    })

    it('should hide error message if password is not touched', async () => {
        const page = render(<LoginScreen />);

        await waitFor(() => expect(page.queryAllByTestId("error-password").length).toEqual(0))
    })

    it('should disable recovery button if email is empty', async () => {
        const page = render(<LoginScreen />);

        const recoveryButton = page.getByTestId("recoveryButton");

        await waitFor(() => expect(recoveryButton.props.accessibilityState.disabled).toBeTruthy());
    })

    it('should disable recovery button if email has error', async () => {
        const page = render(<LoginScreen />);

        const email = page.getByTestId('email');
        fireEvent.changeText(email, "invalid");

        const recoveryButton = page.getByTestId("recoveryButton");

        await waitFor(() => expect(recoveryButton.props.accessibilityState.disabled).toBeTruthy());
    })

})