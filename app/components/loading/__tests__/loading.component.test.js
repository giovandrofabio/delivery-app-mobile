import React from 'react';
const { render } = require("@testing-library/react-native")
const { default: LoadingComponent } = require("../loading.component");
import { Provider } from 'react-redux';
import { hide, show } from '../../../store/loading/loading.actions';
import { store } from '../../../store/store';

describe('loading component', () => {

    it('should hide loading component when not loading', () => {
        const component = render(
            <Provider store={store}>
                <LoadingComponent />
            </Provider>
        );

        store.dispatch(hide());

        const loading = component.queryAllByTestId("loadingComponent");

        expect(loading.length).toEqual(0);
    })

    it('should show loading component when loading', () => {
        const component = render(
            <Provider store={store}>
                <LoadingComponent />
            </Provider>
        );

        store.dispatch(show());

        const loading = component.queryAllByTestId("loadingComponent");

        expect(loading.length).toEqual(1);
    })

})