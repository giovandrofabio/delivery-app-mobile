const { AppInitialState } = require("../../AppInitialState");
const { recoverPassword, recoverPasswordSuccess, recoverPasswordFail } = require("../login.actions");
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

})