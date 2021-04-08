import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.component';
import { registerStyle } from './register.style';

export const RegisterScreen = () => {

    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderComponent title="Register" />
                <View style={registerStyle.content}>
                    <TextInput label="Name" />
                    <TextInput label="Email" keyboardType="email-address" />
                    <TextInput label="Password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={registerStyle.icon.color} />} />
                    <TextInput label="Confirm password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={registerStyle.icon.color} />} />
                    <TextInput label="Phone number" keyboardType="phone-pad" />
                    <Button mode="contained" style={registerStyle.button}>Register</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}