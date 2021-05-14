import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.component';
import { addressStyle } from './address.style';

const AddressScreen = () => {

    const destinations: number[] = [1, 2];

    return (
        <SafeAreaView>
            <HeaderComponent title="Address" hasBackButton={true} />
            <View style={addressStyle.marginHorizontal}>
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
                                    color={addressStyle.buttonIconRemove.color}
                                    style={addressStyle.buttonIconRemove} />
                                : null
                            } />
                    )
                }
            </View>
            <View>
                <Button
                    icon="plus"
                    style={addressStyle.buttonIconAdd}
                    labelStyle={addressStyle.buttonIconAddLabelStyle}
                    > </Button>
            </View>
            <Button
                mode="contained"
                uppercase={false}
                style={addressStyle.readyButtonStyle}
                labelStyle={addressStyle.readyButtonLabelStyle}>
                Ready
            </Button>
        </SafeAreaView>
    )

}

export default AddressScreen;