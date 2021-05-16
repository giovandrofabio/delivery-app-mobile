import React from 'react';
import { SafeAreaView, View } from 'react-native';
import MapView from 'react-native-maps';
import { Avatar, Card, List, Text, Title } from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.component';
import { deliveryStyle } from './delivery.style';

interface DeliveryScreenProps {
    navigation: any
}

const DeliveryScreen = (props: DeliveryScreenProps) => {

    return (
        <SafeAreaView
            style={deliveryStyle.flex}>
            <HeaderComponent
                title={"Delivery details"}
                hasBackButton={true}
                navigation={props.navigation}/>
            <View
                style={deliveryStyle.flex}>
                <MapView
                    initialRegion={{
                        latitude: -3.722,
                        longitude: -38.515,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }}
                    style={deliveryStyle.flex}>
                    
                </MapView>
            </View>
            <Card>
                <Card.Title
                    title={"99/99/9999"}
                    titleStyle={deliveryStyle.cardTitle}
                    right={() => 
                        <Text
                            style={deliveryStyle.price}>$ 30,00</Text>
                    }>
                </Card.Title>
                <Card.Content>
                    <List.Item
                        title={"Paulo Alves"}
                        description="53 deliveries"
                        left={() =>
                            <Avatar.Image
                                size={52}
                                source={{uri: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"}}
                            />
                        }
                    />
                    <List.Item
                        title="Origin"
                        description="Origin street, 60"
                        left={() => 
                            <List.Icon icon="flag-outline"/>
                        }
                    />
                    <List.Item
                        title="Destination"
                        description="Destination street, 60"
                        left={() => 
                            <List.Icon icon="flag-checkered"/>
                        }
                    />
                </Card.Content>
            </Card>
        </SafeAreaView>
    )

}

export default DeliveryScreen;