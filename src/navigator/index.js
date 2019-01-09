import { createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers'

import { AppNavigator } from './AppNavigator';

export const navReducer = createNavigationReducer(AppNavigator);

export const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);