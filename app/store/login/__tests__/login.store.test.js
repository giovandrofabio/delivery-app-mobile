const { AppInitialState } = require("../../AppInitialState");
const { recoverPassword, recoverPasswordSuccess, recoverPasswordFail, recoverPasswordReset, login, loginSuccess, loginFail } = require("../login.actions");
const { loginReducer } = require("../login.reducers");

describe('Login store', () => {

    it('recoverPassword', () => {
        const initialState = {...AppInitialState.login};
        const newState = loginReducer(initialState, recoverPassword());

        expect(newState).toEqual({
            ...initialState,
            error: null,
            isRecoveredPassword: false,
            isRecoveringPassword: true
        })
    })

    it('recoverPasswordSuccess', () => {
        const initialState = {
            ...AppInitialState.login,
            isRecoveringPassword: true
        };
        const newState = loginReducer(initialState, recoverPasswordSuccess());

        expect(newState).toEqual({
            ...initialState,
            error: null,
            isRecoveredPassword: true,
            isRecoveringPassword: false
        })
    })

    it('recoverPasswordFail', () => {
        const initialState = {
            ...AppInitialState.login,
            isRecoveringPassword: true
        };
        const error = {message: 'error'};
        const newState = loginReducer(initialState, recoverPasswordFail(error));

        expect(newState).toEqual({
            ...initialState,
            error,
            isRecoveredPassword: false,
            isRecoveringPassword: false
        })
    })

    it('recoverPasswordReset', () => {
        const initialState = {
            ...AppInitialState.login,
            error: {error: 'message'},
            isRecoveredPassword: true,
            isRecoveringPassword: true
        };
        const newState = loginReducer(initialState, recoverPasswordReset());

        expect(newState).toEqual({
            ...AppInitialState.login
        })
    })

    it('login', () => {
        const initialState = {
            ...AppInitialState.login
        };
        const newState = loginReducer(initialState, login());
        expect(newState).toEqual({
            ...initialState,
            error: null,
            isLoggedIn: false,
            isLoggingIn: true
        })
    })
    
    it('loginSuccess', () => {
        const initialState = {
            ...AppInitialState.login,
            isLoggingIn: true
        };
        const user = {id: 'userId'};
        const newState = loginReducer(initialState, loginSuccess(user));
        expect(newState).toEqual({
            ...initialState,
            isLoggedIn: true,
            isLoggingIn: false
        })
    })
    
    it('loginFail', () => {
        const initialState = {
            ...AppInitialState.login,
            isLoggingIn: true
        };
        const error = {message: 'error'}
        const newState = loginReducer(initialState, loginFail(error));
        expect(newState).toEqual({
            ...initialState,
            error,
            isLoggedIn: false,
            isLoggingIn: false
        })
    })

})