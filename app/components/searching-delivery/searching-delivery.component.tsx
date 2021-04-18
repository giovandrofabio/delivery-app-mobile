import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Button, Title } from 'react-native-paper';
import { searchingDeliveryStyle } from './searching-delivery.style';

export const SearchingDeliveryComponent = () => {

    return (
        <View
            style={searchingDeliveryStyle.flexCenterColumn}>
            <ActivityIndicator
                color={searchingDeliveryStyle.icon.color}
                animating={true} />
            <Title
                style={searchingDeliveryStyle.title}>Searching for a delivery person in your region</Title>
            <Button
                style={searchingDeliveryStyle.cancelDeliveryButton}
                mode="contained">
                Cancel
            </Button>
        </View>
    )

}