import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/login/login.screen';
import HomeScreen from './screens/home/home.screen';
import RegisterScreen from './screens/register/register.screen';
import DeliveryRouteScreen from './screens/delivery-route/delivery-route.screen';
import DeliveriesScreen from './screens/deliveries/deliveries.screen';
import DeliveryScreen from './screens/delivery/delivery.screen';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator headerMode="none" initialRouteName="Login">
            <Screen name="Login" component={LoginScreen}></Screen>
            <Screen name="Home" component={HomeScreen}></Screen>
            <Screen name="Register" component={RegisterScreen}></Screen>
            <Screen name="DeliveryRoute" component={DeliveryRouteScreen}></Screen>
            <Screen name="Deliveries" component={DeliveriesScreen}></Screen>
            <Screen name="Delivery" component={DeliveryScreen}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;