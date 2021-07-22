import React from 'react';
import LoginScreen from '../login.screen';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import RegisterScreen from '../../register/register.screen';
import { loginForm } from '../login.form';
import { store } from '../../../store/store';
import { Provider } from 'react-redux';
import { recoverPassword, recoverPasswordFail, recoverPasswordReset, recoverPasswordSuccess } from '../../../store/login/login.actions';

describe('Login screen', () => {

    it('should go to home page on login', async () => {
        const navigation = {navigate: () => {}}
        spyOn(navigation, 'navigate');

        const page = renderLoginScreen(navigation);

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

        const page = renderLoginScreen(navigation);

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
        const page = renderLoginScreen();
        
        const email = page.getByTestId("email");
        fireEvent.changeText(email, "");

        const loginButton = page.getByTestId("loginButton");
        fireEvent.press(loginButton);

        await waitFor(() => page.getByTestId("error-email"));
    })

    it('should hide error message if email is not touched', async () => {
        const page = renderLoginScreen();

        await waitFor(() => expect(page.queryAllByTestId("error-email").length).toEqual(0))
    })

    it('should show error message if password is touched and it is empty', async () => {
        const page = renderLoginScreen();
        
        const password = page.getByTestId("password");
        fireEvent.changeText(password, "");

        const loginButton = page.getByTestId("loginButton");
        fireEvent.press(loginButton);

        await waitFor(() => page.getByTestId("error-password"));
    })

    it('should hide error message if password is not touched', async () => {
        const page = renderLoginScreen();

        await waitFor(() => expect(page.queryAllByTestId("error-password").length).toEqual(0))
    })

    it('should disable recovery button if email is empty', async () => {
        const page = renderLoginScreen();

        const recoveryButton = page.getByTestId("recoveryButton");

        await waitFor(() => expect(recoveryButton.props.accessibilityState.disabled).toBeTruthy());
    })

    it('should disable recovery button if email has error', async () => {
        const page = renderLoginScreen();

        const email = page.getByTestId('email');
        fireEvent.changeText(email, "invalid");

        const recoveryButton = page.getByTestId("recoveryButton");

        await waitFor(() => expect(recoveryButton.props.accessibilityState.disabled).toBeTruthy());
    })
    
    it('should show loading component and recover password on the forgot email/password', () => {
        const screen = renderLoginScreen();
        const email = screen.getByTestId('email');
        fireEvent.changeText(email, 'valid@email.com');
        const forgotEmailPasswordButton = screen.getByTestId('recoveryButton');
        fireEvent.press(forgotEmailPasswordButton);
        
        expect(store.getState().login.isRecoveringPassword).toBeTruthy();
        expect(store.getState().loading.show).toBeTruthy();
    })

    it('should hide loading and show success message when has recovered password', async () => {
        const screen = renderLoginScreen();
        const email = screen.getByTestId('email');
        fireEvent.changeText(email, 'valid@email.com');
        const forgotEmailPasswordButton = screen.getByTestId('recoveryButton');
        fireEvent.press(forgotEmailPasswordButton);

        await waitFor(() => {
            expect(store.getState().login.isRecoveredPassword).toBeTruthy();
            expect(store.getState().loading.show).toBeFalsy();
            screen.getByTestId('recoverPasswordSuccess');
        })
    })

    it('should hide success message when recover password is false', () => {
        const screen = renderLoginScreen();

        store.dispatch(recoverPassword());
        store.dispatch(recoverPasswordSuccess());
        store.dispatch(recoverPasswordReset());
        
        expect(screen.queryAllByTestId('recoverPasswordSuccess').length).toEqual(0);
    })

    it('should hide loading and show error message when has recovered password with error', async () => {
        const screen = renderLoginScreen();
        const email = screen.getByTestId('email');
        fireEvent.changeText(email, 'error@email.com');
        const forgotEmailPasswordButton = screen.getByTestId('recoveryButton');
        fireEvent.press(forgotEmailPasswordButton);

        await waitFor(() => {
            expect(store.getState().login.isRecoveredPassword).toBeFalsy();
            expect(store.getState().loading.show).toBeFalsy();
            expect(store.getState().login.error).not.toBeNull();
            screen.getByTestId('recoverPasswordFail');
        })
    })

    it('should hide success message when there is no error', () => {
        const screen = renderLoginScreen();

        store.dispatch(recoverPassword());
        store.dispatch(recoverPasswordFail({error: 'message'}));
        store.dispatch(recoverPasswordReset());
        
        expect(screen.queryAllByTestId('recoverPasswordFail').length).toEqual(0);
    })

    function renderLoginScreen(navigation){
        return render(<Provider store={store}><LoginScreen navigation={navigation}/></Provider>);
    }

})