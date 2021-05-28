import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import DeliveryRouteScreen from '../delivery-route.screen';

describe('Delivery route screen', () => {

    it('should load delivery pricing', () => {
        const navigation = {navigate: () => {}};
        spyOn(navigation, 'navigate');

        const page = render(<DeliveryRouteScreen navigation={navigation} />);

        const readyButton = page.getByTestId('readyButton');
        fireEvent.press(readyButton)

        expect(navigation.navigate).toHaveBeenCalledWith("Delivery");
    })

    it('should show destinations list', () => {
        const page = render(<DeliveryRouteScreen destinations={[1, 2, 3]}/>);

        expect(page.queryAllByTestId("destination").length).toEqual(3);
    })

})