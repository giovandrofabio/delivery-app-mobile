import { Formik } from 'formik';
import React from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';
import { loginForm } from './login.form';
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
                        <Formik
                            initialValues={{email: "", password: ""}}
                            onSubmit={login}
                            validationSchema={loginForm}>
                            {({handleSubmit, handleChange, errors, setFieldTouched, touched, values}) => (
                                <>
                                    <TextInput
                                        label="Email"
                                        keyboardType="email-address"
                                        onChangeText={handleChange('email')}
                                        onFocus={() => setFieldTouched('email')}
                                        testID="email"/>
                                    {
                                        touched.email && errors.email ? 
                                        <Text testID="error-email" style={{color: "white", backgroundColor:"red"}}>
                                            {errors.email}
                                        </Text>
                                        : null
                                    }
                                    <TextInput
                                        label="Password"
                                        secureTextEntry={true}
                                        onChangeText={handleChange('password')}
                                        onFocus={() => setFieldTouched('password')}
                                        testID="password"/>
                                    {
                                        touched.password && errors.password ? 
                                        <Text testID="error-password" style={{color: "white", backgroundColor:"red"}}>
                                            {errors.password}
                                        </Text>
                                        : null
                                    }
                                    <Button
                                        uppercase={false}
                                        style={loginStyle.cardButton}
                                        testID="recoveryButton"
                                        disabled={values.email == '' || errors.email ? true : false}>
                                        Forgot email/password
                                    </Button>
                                    <Button
                                        onPress={handleSubmit}
                                        mode="contained"
                                        style={loginStyle.cardButton}
                                        testID="loginButton">
                                        Login
                                    </Button>
                                    <Button
                                        onPress={register}
                                        style={loginStyle.cardButton}
                                        testID="registerButton">
                                        Register
                                    </Button>
                                </>
                            )}
                        </Formik>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );

}

export default LoginScreen;