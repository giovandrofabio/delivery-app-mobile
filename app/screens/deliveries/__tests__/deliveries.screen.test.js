import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import DeliveriesScreen from '../deliveries.screen';

describe("Deliveries screen", () => {

    it('should show delivery details', () => {
        const navigation = {navigate: () => {}};
        spyOn(navigation, 'navigate');

        const page = render(<DeliveriesScreen navigation={navigation}/>);

        const delivery = page.getAllByTestId("deliveryCard")[0];
        fireEvent.press(delivery);

        expect(navigation.navigate).toHaveBeenCalledWith("Delivery");
    })

    it('should show deliveries list', () => {
        const page = render(<DeliveriesScreen deliveries={[1, 2, 3]}/>);

        expect(page.queryAllByTestId("deliveryCard").length).toEqual(3);
    })

})