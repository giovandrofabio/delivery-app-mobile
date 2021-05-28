import React from 'react';
import LoginScreen from '../login.screen';
import { fireEvent, render } from '@testing-library/react-native';
import RegisterScreen from '../../register/register.screen';

describe('Login screen', () => {

    it('should go to home page on login', () => {
        const navigation = {navigate: () => {}}
        spyOn(navigation, 'navigate');

        const page = render(<LoginScreen navigation={navigation}/>);

        const loginButton = page.getByTestId('loginButton');

        fireEvent.press(loginButton);

        expect(navigation.navigate).toHaveBeenCalledWith("Home");
    })

    it('should go to register on register', () => {
        const navigation = {navigate: () => {}}
        spyOn(navigation, 'navigate');

        const page = render(<LoginScreen navigation={navigation}/>)

        const registerButton = page.getByTestId('registerButton')

        fireEvent.press(registerButton)

        expect(navigation.navigate).toHaveBeenCalledWith("Register");
    })

})