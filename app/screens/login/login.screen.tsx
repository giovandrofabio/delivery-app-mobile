import React from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from './login.style';

interface LoginScreenProps {
    navigation: any;
}

const LoginScreen = (props: LoginScreenProps) => {

    const login = () => props.navigation.navigate("Home");
    const register = () => props.navigation.navigate("Register")

    return (
        <SafeAreaView
            style={loginStyle.content}>
            <View
                style={loginStyle.view}>
                <Card>
                    <Card.Title
                        title="Delivery App"
                        titleStyle={loginStyle.cardTitle} />
                    <Card.Content>
                        <TextInput
                            label="Email"
                            keyboardType="email-address" />
                        <TextInput
                            label="Password"
                            secureTextEntry={true}/>
                        <Button
                            uppercase={false}
                            style={loginStyle.cardButton}>
                            Forgot email/password
                        </Button>
                        <Button
                            onPress={login}
                            mode="contained"
                            style={loginStyle.cardButton}>
                            Login
                        </Button>
                        <Button
                            onPress={register}
                            style={loginStyle.cardButton}>
                            Register
                        </Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );

}

export default LoginScreen;