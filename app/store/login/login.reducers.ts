import { createReducer } from "@reduxjs/toolkit";
import { AppInitialState } from "../AppInitialState";
import { login, loginFail, loginSuccess, recoverPassword, recoverPasswordFail, recoverPasswordReset, recoverPasswordSuccess } from "./login.actions";
import { LoginState } from "./LoginState";

const initialState: LoginState = AppInitialState.login;

export const loginReducer = createReducer(initialState, builder => {
    builder.addCase(recoverPassword, currentState => {
        return {
            ...currentState,
            error: null,
            isRecoveredPassword: false,
            isRecoveringPassword: true
        };
    }),
    builder.addCase(recoverPasswordSuccess, currentState => {
        return {
            ...currentState,
            error: null,
            isRecoveredPassword: true,
            isRecoveringPassword: false
        };
    }),
    builder.addCase(recoverPasswordFail, (currentState, action) => {
        return {
            ...currentState,
            error: action.payload,
            isRecoveredPassword: false,
            isRecoveringPassword: false
        };
    }),
    builder.addCase(recoverPasswordReset, currentState => {
        return {
            ...currentState,
            error: null,
            isRecoveredPassword: false,
            isRecoveringPassword: false
        };
    }),
    builder.addCase(login, currentState => {
        return {
            ...currentState,
            error: null,
            isLoggedIn: false,
            isLoggingIn: true
        }
    }),
    builder.addCase(loginSuccess, currentState => {
        return {
            ...currentState,
            isLoggedIn: true,
            isLoggingIn: false
        }
    }),
    builder.addCase(loginFail, (currentState, action) => {
        return {
            ...currentState,
            error: action.payload,
            isLoggedIn: false,
            isLoggingIn: false
        }
    })
})