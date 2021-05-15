import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.component';
import { deliveryRouteStyle } from './delivery-route.style';

const DeliveryRouteScreen = () => {

    const destinations: number[] = [1, 2];

    return (
        <SafeAreaView>
            <HeaderComponent
                title="Address"
                hasBackButton={true} />
            <View
                style={deliveryRouteStyle.marginHorizontal}>
                <TextInput
                    label="Origin"/>
                {
                    destinations.map((destination: number, index: number) =>
                        <TextInput
                            key={`destination${index}`}
                            label="Destination"
                            right={
                                destinations.length > 1 ?
                                <TextInput.Icon
                                    name="close"
                                    color={deliveryRouteStyle.buttonIconRemove.color}
                                    style={deliveryRouteStyle.buttonIconRemove} />
                                : null
                            } />
                    )
                }
            </View>
            <View>
                <Button
                    icon="plus"
                    style={deliveryRouteStyle.buttonIconAdd}
                    labelStyle={deliveryRouteStyle.buttonIconAddLabelStyle}
                    > </Button>
            </View>
            <Button
                mode="contained"
                uppercase={false}
                style={deliveryRouteStyle.readyButtonStyle}
                labelStyle={deliveryRouteStyle.readyButtonLabelStyle}>
                Ready
            </Button>
        </SafeAreaView>
    )

}

export default DeliveryRouteScreen;