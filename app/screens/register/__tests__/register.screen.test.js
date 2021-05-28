import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import RegisterScreen from '../register.screen';

describe("Register screen", () => {

    it('should go to home page on register', () => {
        const navigation = {navigate: () => {}};
        spyOn(navigation, 'navigate');

        const page = render(<RegisterScreen navigation={navigation}/>);

        const registerButton = page.getByTestId("registerButton");
        fireEvent.press(registerButton);

        expect(navigation.navigate).toHaveBeenCalledWith("Home");
    })

})