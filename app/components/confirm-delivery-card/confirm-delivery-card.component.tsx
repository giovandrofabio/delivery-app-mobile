import React from 'react';
import { View } from 'react-native';
import { Button, Card, IconButton, List } from 'react-native-paper';
import { confirmDeliveryCardStyle } from './confirm-delivery-card.style';

export const ConfirmDeliveryCardComponent = () => {

    return (
        <Card>
            <Card.Content>
                <List.Item
                    title="$ 15,00"
                    description="Total price of delivery"
                    left={() => 
                        <IconButton
                            icon="bike"
                            size={30}
                            style={confirmDeliveryCardStyle.icon}
                            color={confirmDeliveryCardStyle.icon.color}/>
                    }
                    right={() => 
                        <View>
                            <Button
                                style={confirmDeliveryCardStyle.cancelButton}>Cancel</Button>
                            <Button mode="contained">Confirm</Button>   
                        </View>
                    }/>
            </Card.Content>
        </Card>
    )

}